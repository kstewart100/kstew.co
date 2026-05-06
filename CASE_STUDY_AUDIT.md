# Case study pages — current conventions

Reference for the four routes: Expert Scheduling, Conversion Goal Updates, Flexible Lift Confidence, Measurement Setup.

## Layout

- **Page shell:** `min-h-screen flex flex-col bg-[#EFF0F3]`; **main:** `py-10 lg:py-20`; inner content **`space-y-12 lg:space-y-16`** with **`mb-20 lg:mb-[140px]`** on the wrapper.
- **CaseStudyLayout:** Outer **`max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10`** (aligned with header); inner max width defaults to **`734px`**; wide figures/tables use **`816px`**. See component JSDoc for **section rhythm** (heading + body vs heading-only before a figure).
- **Header:** Uses **`bg-color-bg-canvas`**; **`--color-bg-canvas`** in `index.css` matches **`#EFF0F3`** so the bar matches the page.
- **Footer (case study):** **`max-w-[1024px] px-5 md:px-8 lg:px-10`** — same horizontal inset as article columns.

## Typography

- **Fonts:** Cabin / Instrument Sans via Tailwind **`font-sans`**; captions **`font-mono`** (Geist Mono). String captions in CaseStudyLayout use **`text-xs text-gray-600`**.
- **H1:** **`text-gray-700`**, responsive scale, **`tracking-[-0.02em]`** on case study titles.
- **H2 (sections):** **`text-[#1a1a1a]`**, responsive **`text-xl md:text-2xl lg:text-[28px]`**, **`tracking-[1.2px]`**. Use **`mb-6`** on **`h2`** when the **first block in the same layout is body copy**. Omit **`mb-6`** when the **`h2` is alone** and the **next row is a figure** (avoid stacking margin with **`space-y-12`**).
- **Body:** **`font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]`**.
- **Metadata row:** **`text-[rgba(5,37,55,0.95)] text-sm`**, labels **`strong` + `block`**. Measurement uses **four columns** where Role / Team / Timeline / Company are separate cells.

## Figures

- Screenshots typically **`border-[3px] border-black/5`**, **`bg-white`**, **`rounded-lg`** or **`rounded-[20px]`** for heroes; shadow **`shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]`** (lighter) or **`...0.2]`** (content). Prefer **Tailwind shadow utilities**, not inline **`boxShadow`**.

## Legacy audit file

The older multi-section “findings / changes” narrative referred to DM Sans, 650px defaults, and blue body bleed — those issues are **resolved**. This file is the **single source** for how case studies are structured now.
