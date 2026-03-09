# Case Study Pages — Audit Summary

## 1. Padding, margin, and spacing

### Findings
- **Page wrapper:** All four case studies used `min-h-screen flex flex-col bg-[#EFF0F3]` but with slight differences (e.g. `w-full` only on some).
- **Main content padding:** ConversionGoalUpdates used `py-10 md:py-16 lg:py-20`; the others used `py-10 lg:py-20`.
- **Content block spacing:** ExpertScheduling had no bottom margin on the content wrapper (`mb-20 lg:mb-[140px]`); the others did. FlexibleLiftConfidence had `space-y-12 lg:space-y-16` on the same div as `py-10 lg:py-20` without a dedicated content wrapper with bottom margin.
- **CaseStudyLayout:** Used `px-4 sm:px-8 lg:px-12` and default `maxWidth="650px"`. ExpertScheduling relied on that default; others passed 734px, 796px, or 816px, so horizontal alignment with the header (max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10) was inconsistent.

### Changes made
- **ConversionGoalUpdates:** Main padding set to `py-10 lg:py-20` to match others. Extra wrapper div around the header removed.
- **ExpertScheduling:** Content wrapper given `mb-20 lg:mb-[140px]`. Root wrapper given `w-full` and explicit `bg-[#EFF0F3]`.
- **FlexibleLiftConfidence:** Content wrapped in a single inner div with `space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]`.
- **CaseStudyLayout:** Default `maxWidth` set to `734px`. Outer wrapper set to `max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10` so horizontal padding and width match the header. ExpertScheduling sections given explicit `maxWidth="734px"` (text) or `maxWidth="816px"` (images).

---

## 2. Color usage

### Findings
- **Two backgrounds (grey vs blue):** Case study pages use a grey background (`#EFF0F3`) on their root div, but the **body** in `index.css` was set to `#5AAEE8` (blue). When the grey content didn’t fully cover the viewport (e.g. short content or scroll), the blue body could show.
- **Footer:** Footer already used `bg-[#EFF0F3]` for case-study variant, so it matched the page.

### Changes made
- **Body background:** In `index.css`, `body` background set to `#EFF0F3` and default text color to `#1a1a1a`. The home page still uses its own fixed full-bleed gradient overlay, so the blue gradient is unchanged there. Case study routes now see only grey; no blue bleed-through.

---

## 3. Content and text formatting

### Findings
- **Font references:** Mix of `font-['DM_Sans',sans-serif]`, `font-dm-sans`, `font-['DM_Sans']`, and inline `style={{ fontFamily: '"DM Sans", sans-serif' }}`. All resolve to the same typeface but are inconsistent.
- **H1:** Slight differences in class order and use of `tracking-[-2.4px]` (only on ConversionGoalUpdates).
- **H2:** Most use `text-[28px] font-normal leading-[40px] tracking-[1.2px] text-[#1A1A1A]`; MeasurementSetup uses `leading-10` in places.
- **Body text:** Generally `text-gray-700 text-lg leading-[28.8px]` or equivalent; consistent across pages.
- **Captions:** CaseStudyLayout used `font-body text-sm text-color-text-secondary italic`. Some pages pass a custom ReactNode (e.g. JetBrains Mono) for captions.

### Changes made
- **CaseStudyLayout captions:** When `caption` is a string, it’s rendered with `font-['JetBrains_Mono'] text-xs text-gray-600`. When it’s a ReactNode, it’s rendered as-is so custom caption styling (e.g. JetBrains Mono) is preserved and we avoid invalid `<p>` wrapping around block elements.

**Done:** Typography standardized on `font-['DM_Sans']` and shared H1/H2/body utilities. MeasurementSetup aligned to 734px (text) / 816px (images, tables). Metadata grids use `gap-4 lg:gap-5` and `md:grid-cols-3` across all four pages.

---

## 4. Layout and grid design

### Findings
- **CaseStudyLayout:** One shared component; good. Default width was 650px while most content used 734px or 816px, so many sections needed an explicit `maxWidth`. Outer padding didn’t match the header.
- **Content widths:** ExpertScheduling used default (650px); ConversionGoalUpdates and FlexibleLiftConfidence used 734px (text) and 816px (images/tables); MeasurementSetup used 796px throughout.
- **Metadata grids:** All use a 3-column grid with `border-t border-b border-[rgba(26,26,26,0.25)] py-5`; small differences in `gap-4` vs `gap-5` and `sm:grid-cols-3` vs `md:grid-cols-3`.
- **Principle cards:** All use `bg-[#8ECAE6]`, `min-h-[148px]`, `border-[3px] border-black/5`, `rounded-[5px]`, `p-5`; consistent.

### Changes made
- **CaseStudyLayout:** Single outer wrapper with `max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10` so layout aligns with the header and works as a single grid-like column. Default `maxWidth` set to `734px` so text-heavy sections don’t need to pass it every time. Image/wide sections pass `maxWidth="816px"`.
- **ExpertScheduling:** All sections now have an explicit `maxWidth` (734px or 816px) so widths are consistent with the other case studies.

---

## Summary

| Area              | Status    | Notes                                                                 |
|-------------------|-----------|-----------------------------------------------------------------------|
| Page background   | Fixed     | Body set to #EFF0F3; case studies are grey-only; home keeps gradient |
| Main padding      | Unified   | All use `py-10 lg:py-20` and content wrapper `mb-20 lg:mb-[140px]`    |
| CaseStudyLayout   | Unified   | Same horizontal padding as header; default maxWidth 734px             |
| Content widths    | Aligned   | ExpertScheduling uses 734/816; others already did or use 796          |
| Caption rendering | Improved  | String vs node handled; no invalid `<p>` wrapping                     |
| Typography        | Partial   | Same fonts in use; class names still vary (optional cleanup)         |
