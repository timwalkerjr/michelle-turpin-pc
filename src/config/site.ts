export const SITE = {
  name: 'Michelle Turpin P.C.',
  title: 'Utah Tax Attorneys | IRS Tax Help | Michelle Turpin P.C.',
  description: 'Facing IRS or Utah State tax issues or audits? Our Salt Lake City tax attorneys provide expert IRS representation, tax debt relief, and bankruptcy help.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://michelleturpin2026.clientsite.agency',
  phone: '(801) 685-0552',
  phoneHref: 'tel:+18016850552',
  address: '4764 S 900 E #3, Millcreek, UT 84117',
} as const;

export type SiteConfig = typeof SITE;
