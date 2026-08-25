import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceDir = path.resolve(process.env.STATIC_SOURCE_DIR ?? 'dist');
const outputDir = path.resolve(process.env.STATIC_OUTPUT_DIR ?? 'static-app-dist');
const noindex = (process.env.STATIC_APP_NOINDEX ?? 'true').toLowerCase() !== 'false';
const robotsMeta = '<meta name="robots" content="noindex, nofollow, noarchive">';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await htmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

if (sourceDir === outputDir) {
  throw new Error('STATIC_SOURCE_DIR and STATIC_OUTPUT_DIR must be different');
}

await rm(outputDir, { recursive: true, force: true });
await cp(sourceDir, outputDir, { recursive: true });

if (noindex) {
  for (const file of await htmlFiles(outputDir)) {
    let html = await readFile(file, 'utf8');
    const existingRobotsMeta = /<meta\s+[^>]*name=["']robots["'][^>]*>/i;

    if (existingRobotsMeta.test(html)) {
      html = html.replace(existingRobotsMeta, robotsMeta);
    } else {
      html = html.replace(/<head(?:\s[^>]*)?>/i, (head) => `${head}\n${robotsMeta}`);
    }

    await writeFile(file, html);
  }

  await writeFile(path.join(outputDir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
}

console.log(`Prepared ${outputDir} from ${sourceDir} with STATIC_APP_NOINDEX=${noindex}`);
