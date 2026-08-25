import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? "dist");
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else if (entry.name.endsWith(".html")) htmlFiles.push(filePath);
  }
}

walk(root);

const routes = new Set(
  htmlFiles.map((filePath) => {
    const relative = `/${path.relative(root, filePath).split(path.sep).join("/")}`;
    if (relative.endsWith("/index.html")) return relative.slice(0, -10) || "/";
    return relative.replace(/\.html$/, "");
  }),
);

for (const route of ["/llms.txt", "/robots.txt", "/sitemap.xml", "/sitemap-index.xml"]) {
  routes.add(route);
}

const missing = [];
const hrefPattern = /href=["']([^"']+)["']/g;

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf8");
  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1].split("#")[0].split("?")[0];
    if (
      !href ||
      !href.startsWith("/") ||
      href.startsWith("//") ||
      href.startsWith("/assets/") ||
      href.startsWith("/_astro/")
    ) {
      continue;
    }

    const normalized = href.length > 1 && href.endsWith("/") ? href.slice(0, -1) : href;
    const localFile = path.join(root, normalized.replace(/^\//, ""));
    if (fs.existsSync(localFile) && fs.statSync(localFile).isFile()) continue;
    if (!routes.has(normalized) && !routes.has(`${normalized}/`)) {
      missing.push(`${path.relative(root, filePath)} -> ${href}`);
    }
  }
}

console.log(`HTML_PAGES=${htmlFiles.length}`);
console.log(`MISSING_INTERNAL_LINKS=${missing.length}`);
if (missing.length) {
  console.log(missing.join("\n"));
  process.exitCode = 1;
}
