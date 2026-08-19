## 1. Site Info

SITE_TYPE: Legal Services / Tax Law Firm
HTML_LANG: en

## 2. Color Token Mapping

---DESIGN_MD_START---
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
---DESIGN_MD_END---

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100%
NAV_BACKGROUND: rgb(255, 255, 255)
NAV_BORDER_RADIUS: 0
NAV_POSITION: sticky
NAV_SHADOW: 0 2px 4px rgba(0,0,0,0.05)
SCROLL_BEHAVIOR: none
NAV_DIVIDERS: none

**Top Utility Bar (above main navigation):**
- Background: `rgb(26, 26, 26)`
- Container: `max-w-[1400px] mx-auto px-4 py-2 flex justify-between items-center text-white text-[14px]`
- Left text: "Utah Tax & Bankruptcy Attorneys"
- Right CTA Group:
  - Phone Link / Button: `bg-[#C1272D] text-white rounded-[6px] px-3 py-1.5 text-[14px] font-medium flex items-center gap-1.5 hover:bg-[#8F1A1F]` with phone icon text: "Contact Us (801) 685-0552"
  - Outline button: `border border-white/40 text-white rounded-[6px] px-3 py-1.5 text-[14px] font-normal hover:bg-white/10` text: "Pay Invoice"
  - Outline button: `border border-white/40 text-white rounded-[6px] px-3 py-1.5 text-[14px] font-normal hover:bg-white/10` text: "Pay Retainer"

**Main Header / Nav Bar:**
- Background: `rgb(255, 255, 255)`
- Container: `max-w-[1400px] mx-auto px-4 py-3 flex justify-between items-center`
- Logo:
  - Source match: `https://cdn.prod.website-files.com/60a2b0ce1efb1732f7f4faa1/60a40858d7dde91631f98db1_logo-michelle-turpin-pc.svg`
  - Dimensions: `w-[284px] h-[40px] object-contain`
  - Badge: false
- Link style:
  - fontSize: text-[15px]
  - fontWeight: font-medium (500)
  - fontFamily: Roboto
  - textTransform: normal-case, do NOT use uppercase
  - letterSpacing: tracking-normal
  - color: `text-[#1A1A1A] hover:text-[#C1272D]`
  - active link ("Home"): `text-[#C1272D]`
  - link row layout: flex items-center gap-1 xl:gap-2 whitespace-nowrap
- Dropdown items (show down chevron icon `ri-arrow-down-s-line`):
  - Individual Taxes
  - Business Taxes
  - Settlement Options
  - Bankruptcy
  - More
- Direct links:
  - About Us (`href="/about"`)
  - Contact Us (`href="/contact-us"`)

---

## 4. Section Plan

### Hero Section id="hero"
- theme: DARK
- background: `bg-dark-background`
- backgroundImage: Capitol building illuminated at night with mountain backdrop
- overlay: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))`
- padding: py-20 lg:py-28
- layout: flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-4
- content:
  - Heading: h1 `Utah Tax Attorneys` (text-[44px] lg:text-[60px] font-bold text-white font-serif mb-4)
  - Subheading / Lead: `We fight the IRS to achieve the best possible outcome for you. Don't deal with the IRS alone — contact us for a consultation and find out why our clients recommend us.` (text-[18px] lg:text-[22px] text-gray-200 italic max-w-[850px] mx-auto leading-relaxed mb-12)
  - 3 Testimonial Glass Cards Grid: `grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left`
    - Card 1: 5 gold stars (`★★★★★`), quote: `"Very prompt and responsive to all questions raised. Skilled and thorough tax attorneys!"`, author: `— Adrienne Prude` (text-sm text-gray-300 mt-3 font-medium)
    - Card 2: 5 gold stars (`★★★★★`), quote: `"Amazing firm. The entire team works hard to answer all my questions and get my problems resolved as quickly as possible."`, author: `— Joanna Smith` (text-sm text-gray-300 mt-3 font-medium)
    - Card 3: 5 gold stars (`★★★★★`), quote: `"I searched the web for tax attorneys who were familiar with the new opportunity zone tax benefits. The attorneys at Michelle Turpin P.C. were the only ones I could find who were knowledgeable in this area."`, author: `— Johnnie Sasaki` (text-sm text-gray-300 mt-3 font-medium)

---

### Attorney Profile 1 id="michelle-turpin"
- theme: LIGHT
- background: `bg-white`
- padding: py-16 lg:py-20
- layout: `max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`
- content:
  - Left Column (lg:col-span-5):
    - Photo container: `relative rounded-[8px] overflow-hidden shadow-lg`
    - Image: Michelle Turpin headshot outdoors with fall foliage (`w-full aspect-[4/3] lg:aspect-auto object-cover h-[420px]`)
    - Dark bottom overlay tag: `absolute bottom-0 inset-x-0 bg-[#1A1A1A]/90 text-white text-center py-2.5 text-[15px] font-medium` ("Michelle Turpin, Founder / Tax Lawyer")
  - Right Column (lg:col-span-7):
    - Heading: h2 `Get IRS and/or Utah State Tax Relief Today` (text-[30px] lg:text-[36px] font-bold text-[#1A1A1A] font-serif mb-6)
    - Paragraph 1: `<strong class="text-[#C1272D] font-bold">No one should have to deal with the IRS alone.</strong> If you're facing an audit or owe the IRS taxes, you'll want Utah's tax law experts on your side. Michelle Turpin PC Utah Tax and Bankruptcy Attorneys has been helping taxpayers throughout the nation for more than 30 years.`
    - Paragraph 2: `With offices serving the Greater Salt Lake City area, one of our tax attorneys can meet with you to discuss your tax situation and help you find the tax assistance you need. We pride ourselves on offering personalized service and experienced representation to ensure your rights and assets are protected when dealing with the IRS. Reach out today to schedule a consultation.` (text-[#374151] text-[16px] leading-[1.65] mt-4)

---

### Attorney Profile 2 id="richard-kennedy"
- theme: LIGHT
- background: `bg-white`
- padding: py-16 lg:py-20
- layout: `max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`
- content:
  - Left Column (lg:col-span-7):
    - Heading: h2 `Don't Fight Alone` (text-[30px] lg:text-[36px] font-bold text-[#1A1A1A] font-serif mb-6)
    - Body Copy: `<strong class="text-[#C1272D] font-bold">Fight with a highly experienced attorney in your corner.</strong> Richard retired from the Office of Chief Counsel of the Internal Revenue Service where he was the National Trust Coordinator and tried numerous cases. He is extensively knowledgeable in all matters concerning the IRS. Reach out today to schedule a consultation with our full-service tax law firm.` (text-[#374151] text-[16px] leading-[1.65])
  - Right Column (lg:col-span-5):
    - Photo container: `relative rounded-[8px] overflow-hidden shadow-lg`
    - Image: Richard Kennedy in front of brick wall (`w-full object-cover h-[420px]`)
    - Dark bottom overlay tag: `absolute bottom-0 inset-x-0 bg-[#1A1A1A]/90 text-white text-center py-2.5 text-[15px] font-medium` ("Richard Kennedy, Attorney of Counsel")

---

### Representation & Bankruptcy id="representation"
- theme: LIGHT
- background: `bg-white`
- padding: py-16 lg:py-20
- layout: `max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`
- content:
  - Left Column (lg:col-span-7):
    - Heading: h2 `Get Tax, Criminal Tax, and Bankruptcy Representation You Can Count On — <span class="text-[#C1272D]">Federal and State Tax Attorney</span>` (text-[28px] lg:text-[34px] font-bold text-[#1A1A1A] font-serif mb-6 leading-tight)
    - Body Copy: `<strong class="text-[#C1272D] font-bold">Did you know that some taxes can be discharged in bankruptcy?</strong> Many people, including attorneys, mistakenly think that bankruptcy does not apply to taxes. While our bankruptcy practice is not exclusive to taxes, as a tax and bankruptcy law firm we have special expertise to apply in bankruptcy cases in which taxes are an issue. There are several types of bankruptcy. If bankruptcy is the right choice for you, it is important to competent advice to help select the type of bankruptcy most helpful to you and your unique circumstances.` (text-[#374151] text-[16px] leading-[1.65])
  - Right Column (lg:col-span-5):
    - Image: Law gavel and scales on legal desk (`w-full object-cover h-[420px] rounded-[8px] shadow-lg`)

---

### Tax Controversy Law in Utah id="controversy-law"
- theme: LIGHT
- background: `rgba(245, 239, 230, 0.4)` (warm cream surface tint)
- padding: py-16 lg:py-20
- layout: `max-w-[900px] mx-auto px-4`
- content:
  - Title: h2 `Tax Controversy Law in Utah` (text-[32px] lg:text-[36px] font-bold text-[#1A1A1A] font-serif mb-6 text-center lg:text-left)
  - Intro Paragraph: `No one should have to deal with the IRS alone. As a tax attorney in Utah, we understand the complexities and challenges of tax law. One particular area that is often rife with confusion and legal disputes is tax controversy law.` (text-[#374151] text-[15px] leading-relaxed mb-8)
  - Sub-section 1:
    - h3 `What is Tax Controversy Law?` (text-[22px] font-bold text-[#1A1A1A] font-serif mb-3)
    - Text: `Tax controversy law refers to the legal disputes and controversies that can arise between taxpayers and taxing authorities, such as the Internal Revenue Service (IRS) or the Utah State Tax Commission. These disputes can arise for a variety of reasons, including disputes over <a href="/#" class="text-[#C1272D] underline hover:text-[#8F1A1F]">tax liability</a>, tax assessments, tax collection efforts, or claims for refunds.`
  - Sub-section 2:
    - h3 `What are the Key Issues in Tax Controversy Law?` (text-[22px] font-bold text-[#1A1A1A] font-serif mt-8 mb-3)
    - Text: `There are several key issues that arise in tax controversy law. One of the most common issues is disputes over tax liability. Taxpayers may dispute the amount of tax that they owe or whether they are liable for any tax at all. Taxing authorities may make mistakes when assessing taxes, such as failing to account for certain deductions or credits.`
    - Text: `Tax collection efforts can also be a source of controversy in tax law. Taxing authorities may use aggressive collection tactics, such as wage garnishment or property seizure, to collect unpaid taxes. Taxpayers may challenge these collection efforts in court, arguing that they are unfair or violate their constitutional rights.` (mt-3)
  - Sub-section 3:
    - h3 `How Can Tax Attorneys Navigate Tax Controversy Law?` (text-[22px] font-bold text-[#1A1A1A] font-serif mt-8 mb-3)
    - Text: `Tax attorneys can play a vital role in helping taxpayers navigate tax controversy law. They can provide legal advice and representation throughout the dispute resolution process, including negotiating with taxing authorities, filing <a href="/#" class="text-[#C1272D] underline hover:text-[#8F1A1F]">administrative appeals</a>, and representing clients in court.`
  - Conclusion:
    - h4 `Conclusion` (text-[18px] font-bold text-[#1A1A1A] font-serif mt-8 mb-2)
    - Text: `Tax controversy law is a complex and challenging area of law that requires specialized knowledge and skills. Tax attorneys play a critical role in helping taxpayers navigate disputes with taxing authorities and protect their legal rights.`

---

### Dual Feature Dark Banner id="experience-banner"
- theme: DARK
- background: `linear-gradient(rgb(38, 38, 38), rgb(22, 22, 22), rgb(10, 10, 10))`
- padding: py-16
- layout: `max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16`
- content:
  - Column 1:
    - Title: h3 `Our Local, State, and Federal Tax Lawyers` (text-[24px] lg:text-[28px] font-bold text-white font-serif border-l-4 border-[#C1272D] pl-4 mb-4)
    - Paragraph: `We are a full-service tax law firm with more than 30 years of experience helping individuals and businesses deal with all of their tax and bankruptcy issues. If you are dealing with the IRS or a State taxing authority, our tax attorneys can help you navigate the bureaucratic process.` (text-gray-300 text-[15px] leading-relaxed pl-5)
  - Column 2:
    - Title: h3 `We'll Help You Deal with the IRS` (text-[24px] lg:text-[28px] font-bold text-white font-serif border-l-4 border-[#C1272D] pl-4 mb-4)
    - Paragraph: `The IRS can be ruthless when it comes to dealing with those they believe have committed tax fraud or who owe them money. If you have come into conflict with the IRS, you'll want our experienced Salt Lake tax law professionals on your side.` (text-gray-300 text-[15px] leading-relaxed pl-5)

---

### Practice Areas & Services Directory id="services"
- theme: LIGHT
- background: `bg-white`
- padding: py-16 lg:py-24
- layout: `max-w-[1200px] mx-auto px-4 flex flex-col gap-14`
- content:
  - Section Header:
    - h2 `Tax Questions? We have answers...` (text-[32px] lg:text-[38px] font-bold text-[#1A1A1A] font-serif text-center mb-3)
    - Lead: `Our attorneys are highly experienced and knowledgeable of all areas of tax law. They have dealt with nearly every kind of tax situation imaginable and will be able to help you navigate the complex world of tax law.` (text-center text-[#4B5563] text-[16px] max-w-[800px] mx-auto mb-10)

  - Category 1: `Individual Taxes`
    - Header Badge: `inline-block bg-[#C1272D] text-white font-serif font-bold text-[20px] px-6 py-2.5 rounded-[6px] mb-6`
    - 2-Column Grid of 10 Cards (`grid grid-cols-1 md:grid-cols-2 gap-4`):
      1. `Audit/Offer In Compromise Appeal` — "Utah Tax Attorney Michelle Turpin, P.C. — Learn How to Appeal an IRS Audit or Offer in Compromise Denial."
      2. `Bank Levy & Wage Garnishment Defense` — "Emergency Tax Relief for Individuals and Businesses. If you are facing IRS Bank Levies and/or Wage Garnishments we can help."
      3. `Federal and State Tax Liens` — "When you owe taxes, a tax lien may be filed against your Utah property. Call our Utah Tax Lien Attorneys today."
      4. `Individuals Tax Help` — "We can help assist you with all of your personal taxes, both State and Federal. Call for a consultation today."
      5. `Innocent Spouse Relief` — "Innocent Spouse Relief provides you relief from additional taxes you owe due to a spouse's actions. Contact us to learn more."
      6. `IRS and State Tax Audit Help` — "Expert audit legal representation for IRS, State, and Local Tax Issues. Find out how audits work."
      7. `Property Seizures` — "Is the IRS trying to seize your Utah property? Contact our tax lawyers today to start your defense."
      8. `Tax Penalty` — "The IRS penalizes millions of taxpayers each year. Call us and learn how we can help you."
      9. `Tax Planning` — "Our full-service tax law firm can help you reduce taxes and audit risks. Contact us today."
      10. `Unfiled Tax Returns` — "If you are facing unfiled returns for Utah or for the IRS, contact one of our tax lawyers today for specific guidance."
      - Card Styling: `border border-gray-200 rounded-[8px] p-4 flex items-start gap-4 hover:border-[#C1272D]/40 hover:shadow-sm transition bg-white group`
      - Icon Circle: `w-11 h-11 rounded-full bg-[#C1272D]/10 flex items-center justify-center shrink-0 text-[#C1272D]` with user/person icon `ri-user-line`

  - Category 2: `Business Taxes`
    - Header Badge: `inline-block bg-[#C1272D] text-white font-serif font-bold text-[20px] px-6 py-2.5 rounded-[6px] mb-6`
    - 2-Column Grid of 9 Cards:
      1. `Audit Help for Businesses` — "Michelle Turpin P.C. represents Utah businesses being audited by the IRS. Contact us today."
      2. `Business Audit Appeals` — "You may have the right to appeal an IRS Business Audit. Contact Utah Business Tax Lawyer Michelle Turpin P.C. today."
      3. `Business Bank Levy` — "If your Utah business is facing an IRS Bank Levy we may be able to help you. Contact our Business Levy Legal Team Today."
      4. `Business Tax Liens` — "If your Utah business owes taxes, the IRS may file a Federal Tax Lien against you. Call our Business Tax Attorneys today."
      5. `Business Tax Penalty` — "Our tax penalty attorneys can represent you to the IRS and work to abate your penalties."
      6. `IRS & State Tax Representation for Business` — "We can help your business with IRS Tax Issues. Contact Michelle Turpin, P.C. today."
      7. `State Tax Problem` — "Unpaid Employment Taxes, State Taxing Authority Problems? Our Utah Tax Lawyers can help."
      8. `Strategic Business Tax Planning` — "The IRS code is complex. We help Utah Business Owners plan to save on taxes."
      9. `Trust Fund Recovery Penalty (TFRP)` — "Facing an IRS Trust Fund Recovery Penalty? Michelle Turpin P.C. defends individuals against personal liability."
      - Icon Circle: `w-11 h-11 rounded-full bg-[#C1272D]/10 flex items-center justify-center shrink-0 text-[#C1272D]` with document/briefcase icon `ri-file-list-3-line`

  - Category 3: `Settlement Options`
    - Header Badge: `inline-block bg-[#C1272D] text-white font-serif font-bold text-[20px] px-6 py-2.5 rounded-[6px] mb-6`
    - 2-Column Grid of 6 Cards:
      1. `Collection Appeals` — "Has the IRS rejected your Installment Agreement? We can appeal your case before the IRS."
      2. `Corporate Restructuring` — "Restructuring your business in Utah may be an answer to incurred income or tax debt."
      3. `Installment Agreements` — "Our Utah Tax Lawyers can help you with IRS Installment Agreements for taxes due."
      4. `Offer in Compromise` — "The IRS Offer in Compromise is an excellent way to settle taxes with the IRS for less than owed."
      5. `Tax Appeals` — "You may have the right to a Tax Appeal with the IRS. Our IRS Tax Appeals Attorneys can help you."
      6. `Trust Fund Taxes (Payroll & Sales Tax)` — "Is the IRS trying to collect payroll taxes from your business? Our Utah Business Tax Attorneys can help."
      - Icon Circle: `w-11 h-11 rounded-full bg-[#C1272D]/10 flex items-center justify-center shrink-0 text-[#C1272D]` with handshake/agreement icon `ri-scales-line`

  - Category 4: `Bankruptcy`
    - Header Badge: `inline-block bg-[#C1272D] text-white font-serif font-bold text-[20px] px-6 py-2.5 rounded-[6px] mb-6`
    - 2-Column Grid of 3 Cards:
      1. `Chapter 11 Small Business Bankruptcy` — "Chapter 11 Small Business Bankruptcy Attorneys. Salt Lake City and all of Utah. Call today."
      2. `Chapter 13 Bankruptcy` — "Chapter 13 Bankruptcy Attorneys. Salt Lake City and all of Utah. Call today."
      3. `Chapter 7 Bankruptcy` — "Chapter 7 Bankruptcy Attorneys. Salt Lake City and all of Utah. Call today."
      - Icon Circle: `w-11 h-11 rounded-full bg-[#C1272D]/10 flex items-center justify-center shrink-0 text-[#C1272D]` with hammer/auction icon `ri-auction-line`

---

### Contact & Consultation Section id="contact"
- theme: DARK
- background: `bg-dark-background`
- backgroundImage: Utah red rock canyon landscape
- overlay: `rgba(26, 26, 26, 0.8)`
- padding: py-20 lg:py-24
- layout: `max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start`
- content:
  - Left Column (lg:col-span-6 text-white):
    - Title: h2 `We Do Utah State and Federal Tax Preparation` (text-[30px] lg:text-[38px] font-bold font-serif leading-tight mb-4)
    - Description: `Our attorneys are highly experienced and knowledgeable of all areas of tax law. They have dealt with nearly every kind of tax situation imaginable, and they will be able to help you navigate the complex world of tax law.` (text-gray-200 text-[16px] leading-relaxed mb-8)
    - Testimonial Box: `bg-white/10 backdrop-blur-md border border-white/15 rounded-[8px] p-6 text-white`
      - 5 Stars: `★★★★★` in gold text
      - Quote: `"Outstanding tax attorneys! Talk about tax savings! Thanks for all your help."` (italic text-[16px] mt-2 mb-3)
      - Author: `— Joshua Echols` (text-sm font-medium text-gray-300)
  - Right Column (lg:col-span-6):
    - Card Container: `bg-[#C1272D] rounded-[8px] p-6 lg:p-8 text-white shadow-2xl`
    - Form Header: h3 `Send Us Your Message` (text-[24px] font-bold font-serif mb-6 text-white)
    - Form Fields:
      - Field 1: Text `NAME` label (`text-xs uppercase font-bold tracking-wider mb-1 block`), input placeholder `Your Name` (`w-full px-4 py-2.5 rounded-[6px] text-[#1A1A1A] bg-white border-none focus:ring-2 focus:ring-white mb-4 text-[14px]`)
      - Field 2: Text `CONTACT PHONE` label (`text-xs uppercase font-bold tracking-wider mb-1 block`), input placeholder `Your Best Contact Number` (`w-full px-4 py-2.5 rounded-[6px] text-[#1A1A1A] bg-white border-none focus:ring-2 focus:ring-white mb-4 text-[14px]`)
      - Field 3: Email `EMAIL ADDRESS` label (`text-xs uppercase font-bold tracking-wider mb-1 block`), input placeholder `Your Email` (`w-full px-4 py-2.5 rounded-[6px] text-[#1A1A1A] bg-white border-none focus:ring-2 focus:ring-white mb-4 text-[14px]`)
      - Field 4: Textarea `YOUR MESSAGE` label (`text-xs uppercase font-bold tracking-wider mb-1 block`), textarea placeholder `How can we help you? Briefly describe your situation.` (`w-full px-4 py-2.5 rounded-[6px] text-[#1A1A1A] bg-white border-none focus:ring-2 focus:ring-white mb-6 text-[14px] h-[110px]`)
      - Submit Button: `w-full bg-white text-[#C1272D] rounded-[6px] py-3 text-[16px] font-bold hover:bg-gray-100 transition tracking-normal shadow` text: `Send Us Your Message`

---

### Office Locations / Maps Section id="locations"
- theme: LIGHT
- background: `bg-white`
- padding: py-0
- layout: `w-full grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-gray-200`
- content:
  - Location 1 (Millcreek Office):
    - Container: `relative h-[360px] bg-gray-100 overflow-hidden`
    - Map iframe or stylized interactive map view of Salt Lake City / Millcreek area
    - Google Place Info Overlay Card:
      - Title: `Michelle Turpin PC - Creekside Office Plaza`
      - Address: `4764 S 900 E #3, Millcreek, UT 84117`
      - Rating: `4.6 ★ (34 reviews)`
      - Links: "View larger map", "Directions"
  - Location 2 (St. George Office):
    - Container: `relative h-[360px] bg-gray-100 overflow-hidden border-l border-gray-200`
    - Map iframe or stylized interactive map view of St. George UT area
    - Google Place Info Overlay Card:
      - Title: `Michelle Turpin PC - St. George UT`
      - Address: `162 N 400 E Ste a-204, St. George, UT 84770`
      - Rating: `3.7 ★ (3 reviews)`
      - Links: "View larger map", "Directions"

---

## 5. Favicon

Instruct the builder to install the favicon via `process_favicon_image({ imageUrl: "https://michelleturpin2026.clientsite.agency/vite.svg" })` or generate a compliant favicon featuring the "MT" monogram in primary red #C1272D.

---

## 6. Footer Spec

Style: `linear-gradient(rgb(38, 38, 38), rgb(22, 22, 22), rgb(10, 10, 10))` (dark gradient / rgb(26,26,26))
Text color: `text-[#D1D5DB]` (rgb(209, 213, 219))
Columns: 4 column layout on desktop (`max-w-[1400px] mx-auto px-4 py-14`)

Content alignment:
- Left-to-right distributed columns:
  - Column 1: Firm Logo (`w-[284px] h-[40px] object-contain`)
  - Column 2:
    - Link: `Client Reviews` (`href="/reviews"`)
    - Link: `About Our Firm` (`href="/about"`)
  - Column 3:
    - Link: `Tel: +1 (801) 685-0552` (`href="tel:+18016850552"`)
    - Link: `Contact Us` (`href="/contact-us"`)
  - Column 4:
    - Link: `Tax Planning` (`href="/tax-planning"`)
    - Link: `Tax Law Articles` (`href="/articles"`)

Bottom Legal Disclaimer & Copyright:
- Container: `border-t border-white/10 mt-10 pt-8 text-center text-[12px] text-gray-400 max-w-[1000px] mx-auto px-4 leading-relaxed`
- Disclaimer text: `Lawyer Advertising. This website is designed for general informational purposes only. Information on this website is in no way intended to constitute legal advice nor the formation of a lawyer/client relationship. Every case is unique and prior results are not a guarantee or prediction with respect to a future case.`
- Copyright text: `© 2026 Michelle Turpin, P.C. All Rights Reserved.` (mt-4 text-xs text-gray-500)

---

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/site.ts`
- `src/styles/global.css`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/AttorneyMichelle.astro`
- `src/components/home/AttorneyRichard.astro`
- `src/components/home/Representation.astro`
- `src/components/home/ControversyLaw.astro`
- `src/components/home/ExperienceBanner.astro`
- `src/components/home/ServicesMatrix.astro`
- `src/components/home/ContactFormSection.astro`
- `src/components/home/MapLocations.astro`