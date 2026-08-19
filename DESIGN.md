## Visual Theme
Authoritative legal practice design featuring a distinct crimson red brand accent (#C1272D), deep charcoal/black structural elements (#1A1A1A), warm cream section accents, and refined PT Serif typography for legal authority.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(0 0% 10%)
- muted-foreground: hsl(218 11% 27%)
- border: hsl(220 13% 91%)
- surface: hsl(36 43% 93%)
- primary: hsl(358 66% 45%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(358 66% 35%)
- secondary: hsl(0 0% 10%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(0 0% 20%)
- dark-background: hsl(0 0% 10%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted-foreground: hsl(218 11% 84%)
- dark-border: hsl(0 0% 100% / 0.1)
- accent: hsl(358 66% 45%)

## Page Background
solid hsl(0 0% 100%)

## Typography
- Heading font: REQUIRED slug `pt-serif` (source: "PT Serif", available weights: 400, 700)
- Body font: REQUIRED slug `roboto` (source: "Roboto", available weights: 300, 400, 500, 700, 900)

Typography size fidelity:
- h1: text-[42px] lg:text-[60px] font-bold leading-[1.1] font-serif
- h2: text-[28px] lg:text-[36px] font-bold leading-[1.2] font-serif
- h3: text-[22px] lg:text-[30px] font-bold leading-[1.3] font-serif
- h4: text-[18px] lg:text-[20px] font-bold leading-[1.4] font-serif
- body: text-[15px] lg:text-[16px] leading-[1.6] font-sans
- nav links: text-[15px] font-medium font-sans

## Components
- Buttons:
  - Primary CTA: Red solid `bg-[#C1272D] text-white rounded-[6px] px-3 py-2 text-[14px] font-medium hover:bg-[#8F1A1F] transition`
  - Outline button: `border border-white/40 text-white rounded-[6px] px-3 py-2 text-[14px] font-normal hover:bg-white/10 transition`
  - Form Submit button: `w-full bg-white text-[#C1272D] rounded-[6px] py-3 text-[16px] font-semibold hover:bg-gray-100 transition shadow`
- Cards:
  - Hero Testimonial Cards: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-[8px] p-6 text-white`
  - Service Directory Cards: `bg-white border border-gray-200 rounded-[8px] p-4 hover:shadow-md hover:border-[#C1272D]/30 transition flex items-start gap-4`
  - Form Container: `bg-[#C1272D] rounded-[8px] p-6 lg:p-8 text-white shadow-xl`