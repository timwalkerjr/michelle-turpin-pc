# Client changes — BugHerd project 537829

Implemented for review from the 31 client notes retrieved on September 22, 2026.

| BugHerd tasks | Implementation |
| --- | --- |
| 1 | Homepage hero uses the Salt Lake City mountain photograph supplied by the user. |
| 2–7 | Updated attorney captions and copy; removed Spencer's redundant heading; added Staci's homepage profile using existing team information. |
| 8 | Independent, manually controlled review carousels at the top and bottom of the homepage, with keyboard-accessible scrolling and reduced-motion support. |
| 9–10 | Shared service sidebar identifies the office as Salt Lake City. |
| 11–12 | Updated OIC introduction and added the existing Rich Whale OIC testimonial below the consultation box. |
| 13 | OIC is the first sidebar service; bankruptcy quick links removed from the sidebar and navigation. Homepage promotional emphasis shifted to tax resolution. Existing bankruptcy URLs retained. |
| 14 | Existing audit appeal URL now covers examination findings; separate `/services/offer-in-compromise-appeal/` page covers OIC rejection procedures. Navigation and related links distinguish the two. |
| 15 | Removed the redundant sidebar payment portal; top payment links remain. |
| 16 | Added Spencer's credentials sidebar to the state tax page from the referenced source page. |
| 17–19 | Removed the specified Utah-only wording from business audit and bank levy content. |
| 20 | Consultation links added to Individual, Settlement, Criminal Tax, and More menus, including collapsed navigation; Business Review retained. |
| 21 | Business Audit Defense naming applied to the page and navigation links. |
| 22–23 | Reviews mentioning Mark removed from website review displays, without altering the quoted text of retained reviews. |
| 24 | Working review filters: Offer in Compromise, Audit Defense, Tax Planning, Tax Appeals, and All Reviews. |
| 25 | Tax planning page now presents the full client-referenced business tax planning article. |
| 26–28 | Ten full existing articles imported with original URL slugs, national-facing listing titles, and reading times calculated from actual word counts. Old placeholder redirects lead to corresponding articles where available. |
| 29–31 | Added 2019 and 2024 team milestones; changed Spencer's badges to Tax Controversy and Audit Defense. |

## Content notes

- The available review set contains one explicit OIC review and no explicit Tax Appeals review. The Tax Appeals filter has a useful empty state rather than assigning an unsupported category. More client-approved testimonials can be added later.
- Article bodies were migrated from the firm's existing site, not rewritten as a new legal-content audit. Formatting was normalized and internal links repaired. Source URLs are recorded in `src/data/articles.json`.
- Source for the articles and planning content: https://www.taxlawsolutions.com/articles
- Source for Spencer's credentials: https://www.taxlawsolutions.com/services/audit-offer-in-compromise-appeal
- New appeal-page procedural copy was checked against IRS Appeals, Taxpayer Advocate Service's Offer in Compromise page, and U.S. Tax Court definitions. These sources are linked on the pages.
- No client messages were sent and no review was removed from Google or another third-party platform.

## Validation

- `pnpm check`: no errors, warnings, or hints.
- `pnpm build`: 49 pages generated.
- Built HTML internal link and image audit: no missing targets.
- Browser verification: all five review filter states, independent carousel controls, collapsed Criminal Tax navigation, hero image, article index, and tax-planning content.
- Phone-size viewport emulation did not take effect in the internal browser; the responsive collapsed menu was verified at the browser's actual 1138px width.
