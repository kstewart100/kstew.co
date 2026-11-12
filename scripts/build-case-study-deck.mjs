/**
 * Builds Kyle Stewart's case study master deck as a PPTX
 * (importable to Google Slides with full fidelity).
 */
import PptxGenJS from 'pptxgenjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG = (...parts) => path.join(ROOT, 'public', 'images', ...parts);
const OUT = path.join(ROOT, 'scripts', 'deck-output', 'Kyle-Stewart-Case-Study-Master-Deck.pptx');

const C = {
  navy: '134A70',
  navyDark: '093451',
  navyDeep: '022036',
  blueSubtle: 'DEF0FF',
  blue50: 'F0F8FF',
  canvas: 'FEFEFF',
  white: 'FFFFFF',
  secondary: '5A6F7E',
  caption: '758B9B',
  accent: 'B7C75A',
  greenBg: 'E3F5EA',
  greenText: '245538',
  rejectedBg: 'DEF0FF',
  border: 'CEDDE9',
};

const W = 13.333;
const H = 7.5;
const M = 0.55;

const pptx = new PptxGenJS();
pptx.defineLayout({ name: 'WIDE', width: W, height: H });
pptx.layout = 'WIDE';
pptx.author = 'Kyle Stewart';
pptx.title = 'Kyle Stewart — Case Study Master Deck';
pptx.subject = 'Content design case studies for hiring managers';

function base(slide, fill = C.canvas) {
  slide.background = { color: fill };
}

function accentBar(slide) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: W,
    h: 0.08,
    fill: { color: C.accent },
    line: { color: C.accent },
  });
}

function footer(slide, label) {
  slide.addText(label, {
    x: M,
    y: H - 0.38,
    w: 8,
    h: 0.25,
    fontSize: 10,
    fontFace: 'Arial',
    color: C.caption,
    margin: 0,
  });
  slide.addText('kstew.co', {
    x: W - M - 2.2,
    y: H - 0.38,
    w: 2.2,
    h: 0.25,
    fontSize: 10,
    fontFace: 'Arial',
    color: C.caption,
    align: 'right',
    margin: 0,
  });
}

function kicker(slide, text, y = 0.35) {
  slide.addText(text.toUpperCase(), {
    x: M,
    y,
    w: W - M * 2,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Arial',
    color: C.caption,
    bold: true,
    charSpacing: 2,
    margin: 0,
  });
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: M,
    y: opts.y ?? 0.7,
    w: opts.w ?? W - M * 2,
    h: opts.h ?? 1.0,
    fontSize: opts.fontSize ?? 32,
    fontFace: 'Arial',
    color: C.navy,
    bold: true,
    margin: 0,
    valign: 'top',
  });
}

function body(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? M,
    y: opts.y ?? 1.9,
    w: opts.w ?? W - M * 2,
    h: opts.h ?? 3.5,
    fontSize: opts.fontSize ?? 16,
    fontFace: 'Arial',
    color: opts.color ?? C.secondary,
    margin: 0,
    valign: 'top',
    ...(opts.bullet ? { bullet: true } : {}),
  });
}

function addImageSafe(slide, file, opts) {
  try {
    slide.addImage({ path: file, ...opts });
    return true;
  } catch (err) {
    console.warn('Image skip:', file, err.message);
    return false;
  }
}

function darkDivider({ eyebrow, headline, outcome, company }) {
  const slide = pptx.addSlide();
  base(slide, C.navy);
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 0.18,
    h: H,
    fill: { color: C.accent },
    line: { color: C.accent },
  });
  slide.addText(eyebrow.toUpperCase(), {
    x: 0.9,
    y: 2.1,
    w: 11,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Arial',
    color: C.accent,
    bold: true,
    charSpacing: 2,
    margin: 0,
  });
  slide.addText(headline, {
    x: 0.9,
    y: 2.55,
    w: 11.2,
    h: 1.4,
    fontSize: 34,
    fontFace: 'Arial',
    color: C.white,
    bold: true,
    margin: 0,
    valign: 'top',
  });
  if (outcome) {
    slide.addText(outcome, {
      x: 0.9,
      y: 4.2,
      w: 11.2,
      h: 0.5,
      fontSize: 16,
      fontFace: 'Arial',
      color: 'BEE1FF',
      margin: 0,
    });
  }
  if (company) {
    slide.addText(company, {
      x: 0.9,
      y: H - 0.55,
      w: 11,
      h: 0.3,
      fontSize: 12,
      fontFace: 'Arial',
      color: '9DCCF4',
      margin: 0,
    });
  }
  return slide;
}

function contentSlide({ section, heading, paragraphs = [], bullets = [], note, foot }) {
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, section);
  title(slide, heading, { y: 0.65, h: 0.85, fontSize: 28 });

  let y = 1.65;
  for (const p of paragraphs) {
    const h = Math.min(2.2, 0.28 + Math.ceil(p.length / 95) * 0.28);
    slide.addText(p, {
      x: M,
      y,
      w: W - M * 2,
      h,
      fontSize: 15,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
      valign: 'top',
    });
    y += h + 0.12;
  }

  if (bullets.length) {
    bullets.forEach((_, i) => {
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: M,
        y: y + 0.08 + i * 0.42,
        w: 0.12,
        h: 0.12,
        fill: { color: C.accent },
        line: { color: C.accent },
      });
    });
    slide.addText(
      bullets.map((t) => ({ text: t, options: { breakLine: true } })),
      {
        x: M + 0.28,
        y,
        w: W - M * 2 - 0.28,
        h: Math.min(3.2, bullets.length * 0.42),
        fontSize: 15,
        fontFace: 'Arial',
        color: C.navy,
        paraSpacing: 10,
        margin: 0,
      },
    );
    y += bullets.length * 0.42 + 0.2;
  }

  if (note) {
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: M,
      y: Math.min(y, 5.5),
      w: W - M * 2,
      h: 0.85,
      fill: { color: C.blueSubtle },
      line: { color: C.blueSubtle },
      rectRadius: 0.06,
    });
    slide.addText(note, {
      x: M + 0.25,
      y: Math.min(y, 5.5) + 0.15,
      w: W - M * 2 - 0.5,
      h: 0.55,
      fontSize: 13,
      fontFace: 'Arial',
      color: C.navy,
      margin: 0,
      valign: 'middle',
    });
  }

  footer(slide, foot || section);
  return slide;
}

function imageSlide({ section, heading, caption, image, foot, fullBleed = false }) {
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);

  if (fullBleed) {
    kicker(slide, section, 0.28);
    title(slide, heading, { y: 0.52, h: 0.55, fontSize: 22 });
    addImageSafe(slide, image, {
      x: M,
      y: 1.2,
      w: W - M * 2,
      h: 5.4,
      sizing: { type: 'contain', w: W - M * 2, h: 5.4 },
    });
  } else {
    kicker(slide, section);
    title(slide, heading, { y: 0.65, h: 0.7, fontSize: 26 });
    addImageSafe(slide, image, {
      x: M,
      y: 1.5,
      w: W - M * 2,
      h: 4.6,
      sizing: { type: 'contain', w: W - M * 2, h: 4.6 },
    });
    if (caption) {
      slide.addText(caption, {
        x: M,
        y: H - 0.7,
        w: W - M * 2,
        h: 0.28,
        fontSize: 12,
        fontFace: 'Arial',
        color: C.caption,
        italic: true,
        margin: 0,
      });
    }
  }
  footer(slide, foot || section);
  return slide;
}

function splitImageText({ section, heading, paragraphs, image, foot }) {
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, section);
  title(slide, heading, { y: 0.65, h: 0.7, fontSize: 24 });

  let y = 1.55;
  for (const p of paragraphs) {
    const h = Math.min(1.8, 0.28 + Math.ceil(p.length / 52) * 0.26);
    slide.addText(p, {
      x: M,
      y,
      w: 5.6,
      h,
      fontSize: 14,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
      valign: 'top',
    });
    y += h + 0.1;
  }

  addImageSafe(slide, image, {
    x: 6.6,
    y: 1.5,
    w: 6.2,
    h: 5.0,
    sizing: { type: 'contain', w: 6.2, h: 5.0 },
  });

  footer(slide, foot || section);
  return slide;
}

function decisionSlide({ section, heading, decisions, foot }) {
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, section);
  title(slide, heading, { y: 0.65, h: 0.65, fontSize: 24 });

  const cardW = (W - M * 2 - 0.3 * (decisions.length - 1)) / decisions.length;
  decisions.forEach((d, i) => {
    const x = M + i * (cardW + 0.3);
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x,
      y: 1.55,
      w: cardW,
      h: 4.7,
      fill: { color: C.white },
      line: { color: C.border, width: 1.25 },
      rectRadius: 0.08,
    });
    slide.addShape(pptx.shapes.RECTANGLE, {
      x,
      y: 1.55,
      w: cardW,
      h: 0.12,
      fill: { color: C.accent },
      line: { color: C.accent },
    });
    slide.addText(d.label, {
      x: x + 0.22,
      y: 1.85,
      w: cardW - 0.44,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Arial',
      color: C.caption,
      bold: true,
      margin: 0,
    });
    slide.addText(d.title, {
      x: x + 0.22,
      y: 2.25,
      w: cardW - 0.44,
      h: 1.1,
      fontSize: 16,
      fontFace: 'Arial',
      color: C.navy,
      bold: true,
      margin: 0,
      valign: 'top',
    });
    slide.addText(d.body, {
      x: x + 0.22,
      y: 3.45,
      w: cardW - 0.44,
      h: 1.8,
      fontSize: 13,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
      valign: 'top',
    });
    if (d.tradeoff) {
      slide.addText(`Trade-off: ${d.tradeoff}`, {
        x: x + 0.22,
        y: 5.4,
        w: cardW - 0.44,
        h: 0.6,
        fontSize: 12,
        fontFace: 'Arial',
        color: C.navyDark,
        italic: true,
        margin: 0,
        valign: 'top',
      });
    }
  });

  footer(slide, foot || section);
  return slide;
}

function copyTableSlide({ section, heading, rows, foot }) {
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, section);
  title(slide, heading, { y: 0.65, h: 0.55, fontSize: 22 });

  const tableRows = [
    [
      { text: 'Copy', options: { bold: true, color: C.navy, fill: { color: C.blue50 } } },
      { text: 'Status', options: { bold: true, color: C.navy, fill: { color: C.blue50 } } },
      { text: 'Why', options: { bold: true, color: C.navy, fill: { color: C.blue50 } } },
    ],
    ...rows.map((r) => [
      {
        text: r.copy,
        options: {
          color: C.navy,
          fill: { color: r.status === 'Final' ? C.greenBg : C.white },
        },
      },
      {
        text: r.status,
        options: {
          bold: true,
          color: r.status === 'Final' ? C.greenText : C.navy,
          fill: { color: r.status === 'Final' ? C.greenBg : C.rejectedBg },
          align: 'center',
        },
      },
      {
        text: r.why,
        options: {
          color: C.secondary,
          fill: { color: r.status === 'Final' ? C.greenBg : C.white },
        },
      },
    ]),
  ];

  slide.addTable(tableRows, {
    x: M,
    y: 1.4,
    w: W - M * 2,
    colW: [5.2, 1.4, 5.533],
    border: [{ pt: 0.5, color: C.border }],
    fontFace: 'Arial',
    fontSize: 11,
    valign: 'middle',
    align: 'left',
  });

  footer(slide, foot || section);
  return slide;
}

// ─────────────────────────────────────────────────────────────
// OPENING
// ─────────────────────────────────────────────────────────────

{
  const slide = pptx.addSlide();
  base(slide, C.navy);
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: W,
    h: 0.12,
    fill: { color: C.accent },
    line: { color: C.accent },
  });
  addImageSafe(slide, IMG('logo.png'), {
    x: M,
    y: 0.45,
    w: 2.4,
    h: 0.42,
    sizing: { type: 'contain', w: 2.4, h: 0.42 },
  });
  // invert-ish: logo is dark; on navy it may be hard to see — use white wordmark treatment via text fallback
  slide.addText('KYLE STEWART', {
    x: M,
    y: 0.45,
    w: 6,
    h: 0.4,
    fontSize: 14,
    fontFace: 'Arial',
    color: C.accent,
    bold: true,
    charSpacing: 3,
    margin: 0,
  });
  slide.addText('Case Study Master Deck', {
    x: M,
    y: 2.4,
    w: 10,
    h: 1.0,
    fontSize: 42,
    fontFace: 'Arial',
    color: C.white,
    bold: true,
    margin: 0,
  });
  slide.addText('Senior Content Designer', {
    x: M,
    y: 3.5,
    w: 10,
    h: 0.4,
    fontSize: 20,
    fontFace: 'Arial',
    color: 'BEE1FF',
    margin: 0,
  });
  slide.addText('Google Ads  ·  Intuit TurboTax Live  ·  Product content that moves people to act', {
    x: M,
    y: 5.9,
    w: 11,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Arial',
    color: '9DCCF4',
    margin: 0,
  });
  slide.addText('For hiring managers  ·  kstew.co  ·  hello@kstew.co', {
    x: M,
    y: 6.4,
    w: 11,
    h: 0.3,
    fontSize: 12,
    fontFace: 'Arial',
    color: '7BB0DC',
    margin: 0,
  });
}

{
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, 'About you');
  title(slide, 'Content design for products that feel good to use', {
    y: 0.7,
    h: 1.1,
    fontSize: 30,
  });

  addImageSafe(slide, IMG('about-portrait.png'), {
    x: 9.1,
    y: 1.5,
    w: 3.5,
    h: 4.6,
    sizing: { type: 'cover', w: 3.5, h: 4.6 },
  });

  const aboutParas = [
    "I'm a Bay Area native and content designer with 10+ years across startups, agencies, Google, and Intuit.",
    'I specialize in product content for complex flows—measurement, migrations, metrics, and expert tools—where the words have to earn trust and finish the job.',
    'My specialty: turning jargon-heavy, skippable steps into clear paths people complete correctly the first time.',
  ];
  let y = 2.0;
  for (const p of aboutParas) {
    slide.addText(p, {
      x: M,
      y,
      w: 8.0,
      h: 1.0,
      fontSize: 16,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
      valign: 'top',
    });
    y += 1.05;
  }
  footer(slide, 'About');
}

{
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, 'Agenda');
  title(slide, 'Four projects. Four different content problems.', {
    y: 0.65,
    h: 0.8,
    fontSize: 28,
  });
  slide.addText(
    'I picked these because together they show range: onboarding, migration risk, naming research, and seasonal expert tools—always with judgment, trade-offs, and shipped outcomes.',
    {
      x: M,
      y: 1.55,
      w: W - M * 2,
      h: 0.7,
      fontSize: 14,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
    },
  );

  const agenda = [
    {
      n: '01',
      co: 'Google Ads',
      title: 'Measurement setup',
      why: 'Shows how content makes a buried, skippable step worth finishing—and moves a real completion metric.',
    },
    {
      n: '02',
      co: 'Google Ads',
      title: 'Conversion goal updates',
      why: 'Shows reframing a high-stakes migration from manual chores to a clear “does this look right?” review.',
    },
    {
      n: '03',
      co: 'Google Ads',
      title: 'Certainty of lift',
      why: 'Shows research-backed naming that works for statisticians and everyone else—without tooltips doing the work.',
    },
    {
      n: '04',
      co: 'Intuit',
      title: 'Expert scheduling',
      why: 'Shows content systems for seasonal experts: less reading, better errors, guidance at the moment of need.',
    },
  ];

  agenda.forEach((a, i) => {
    const y = 2.4 + i * 1.05;
    slide.addText(a.n, {
      x: M,
      y,
      w: 0.7,
      h: 0.4,
      fontSize: 18,
      fontFace: 'Arial',
      color: C.accent,
      bold: true,
      margin: 0,
    });
    slide.addText(`${a.co}  ·  ${a.title}`, {
      x: M + 0.8,
      y,
      w: 11,
      h: 0.35,
      fontSize: 16,
      fontFace: 'Arial',
      color: C.navy,
      bold: true,
      margin: 0,
    });
    slide.addText(a.why, {
      x: M + 0.8,
      y: y + 0.35,
      w: 11,
      h: 0.45,
      fontSize: 13,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
    });
  });
  footer(slide, 'Agenda');
}

// ─────────────────────────────────────────────────────────────
// 01 MEASUREMENT SETUP
// ─────────────────────────────────────────────────────────────
const MS = '01  ·  Measurement setup';

darkDivider({
  eyebrow: 'Case study 01  ·  Google Ads',
  headline: 'Making an easy-to-skip step worth finishing',
  outcome: '25% more people measure their ads correctly',
  company: 'Senior Content Designer  ·  UX, PM, Eng, Program Management',
});

contentSlide({
  section: MS,
  heading: 'Context',
  paragraphs: [
    'Product: Google Ads conversion measurement setup inside campaign onboarding.',
    'Company & team: Google Ads. Partnered with UX designers, PMs, engineers, and program managers across related product areas.',
    'My role: Senior Content Designer. I owned the language for setup, CTAs, tags/snippets guidance, and stakeholder alignment when measurement language had to change in three other product surfaces.',
  ],
  foot: MS,
});

splitImageText({
  section: MS,
  heading: 'Problem',
  paragraphs: [
    'Conversion measurement is essential to campaign performance—but setup was buried, jargon-heavy, and easy for first-time advertisers to skip.',
    'Most people skipped it. Campaigns underperformed. Frustration with Google Ads grew.',
    'Why it mattered: without correct measurement, advertisers couldn’t optimize spend, and Google Ads looked broken for the people who needed it most.',
  ],
  image: IMG('case-studies', 'measurement-setup', 'image.png'),
  foot: MS,
});

contentSlide({
  section: MS,
  heading: 'Process & methods — what each step revealed',
  paragraphs: [
    'Design principles guided every pass: simplify with progressive disclosure, do the work for them, assume they’re new.',
  ],
  bullets: [
    'Content hierarchy exploration → denser first pass taught us what could leave the page until needed.',
    'Research discussions on celebratory “congrats” copy → revealed false launch impressions; forced a full rethink.',
    'CTA research + pattern audits → “Set up” / action-oriented language kept people moving; jargon stalled them.',
    'Why + what for tags/snippets → advertisers needed purpose, not implementation detail, to act.',
  ],
  note: 'Biggest lesson: listing methods isn’t enough—each method changed a specific decision.',
  foot: MS,
});

imageSlide({
  section: MS,
  heading: 'Exploration: denser first hierarchy',
  caption: 'First pass put everything on the page; later cuts revealed detail only when needed.',
  image: IMG('case-studies', 'measurement-setup', 'image-1.png'),
  foot: MS,
});

imageSlide({
  section: MS,
  heading: 'Celebratory messaging that misled',
  caption: 'Research: “congrats” framing implied the campaign had already launched.',
  image: IMG('case-studies', 'measurement-setup', 'cm-3.png'),
  foot: MS,
});

copyTableSlide({
  section: MS,
  heading: 'Key decision: headline & expectation setting',
  rows: [
    {
      copy: 'Congrats! You’re almost done…',
      status: 'Rejected',
      why: 'Vague timeline; mixed congrats vs. “almost done.”',
    },
    {
      copy: 'Your campaign is published! Now let’s track…',
      status: 'Rejected',
      why: 'Unclear review process; confused next steps.',
    },
    {
      copy: 'Your ads will go live after a review… (1–2 business days)',
      status: 'Final',
      why: 'Clear expectations, transparent process, specific timeline.',
    },
  ],
  foot: MS,
});

decisionSlide({
  section: MS,
  heading: 'Key decisions & trade-offs',
  decisions: [
    {
      label: 'Decision 01',
      title: 'Cut celebration, add clarity',
      body: 'Dropped momentum-building congrats copy after research showed it felt like launch was done.',
      tradeoff: 'Less emotional lift up front for more accurate mental model of the journey.',
    },
    {
      label: 'Decision 02',
      title: 'Action CTAs over tech labels',
      body: 'Chose “Set up” / purpose-led CTAs over “Get event snippet”-style jargon where research allowed.',
      tradeoff: 'Slightly less precise for power users; much clearer for first-timers.',
    },
    {
      label: 'Decision 03',
      title: 'Explain why, then what',
      body: 'Tag/snippet copy led with business purpose and sequence (tag before snippets), not code architecture.',
      tradeoff: 'Less technical completeness on-page; more completion.',
    },
  ],
  foot: MS,
});

imageSlide({
  section: MS,
  heading: 'Solution: clear path through measurement',
  caption: 'Final language guides advertisers through setup in plain terms.',
  image: IMG('case-studies', 'measurement-setup', 'image-2.png'),
  foot: MS,
});

imageSlide({
  section: MS,
  heading: 'Solution: CTA & pattern alignment',
  caption: 'Explorations revealed inconsistent patterns for Google tags and event snippets.',
  image: IMG('case-studies', 'measurement-setup', 'cm-5.png'),
  foot: MS,
});

contentSlide({
  section: MS,
  heading: 'Results & impact',
  paragraphs: [
    'About 25% more people finished measurement setup—and did it correctly.',
    'The useful pressure test that stuck: would this help someone who’s never done this before? That question usually settled what stayed on the page and what got cut.',
    'I also secured stakeholder buy-in so measurement language stayed consistent across three other product areas.',
  ],
  foot: MS,
});

// ─────────────────────────────────────────────────────────────
// 02 CONVERSION GOAL UPDATES
// ─────────────────────────────────────────────────────────────
const CG = '02  ·  Conversion goal updates';

darkDivider({
  eyebrow: 'Case study 02  ·  Google Ads',
  headline: 'Turning a migration chore into a clear yes',
  outcome: 'From flipping each setting to review and approve',
  company: 'Senior Content Designer  ·  UX, PM, Eng, Program Management',
});

contentSlide({
  section: CG,
  heading: 'Context',
  paragraphs: [
    'Product: Google Ads conversion goal migration from Universal Analytics to Google Analytics 4.',
    'Company & team: Google Ads cross-functional pod (UX, PM, Eng, PMs, help content).',
    'My role: Senior Content Designer leading content for the flow, notifications, CTAs, and review language—including the shift from manual updates to automated recommendations.',
  ],
  foot: CG,
});

splitImageText({
  section: CG,
  heading: 'Problem',
  paragraphs: [
    'Advertisers had to switch conversion goals to a new analytics platform. Those goals tell automated bidding what to optimize for—so they shape how campaigns spend money.',
    'Duplicates and delayed switches meant inaccurate bidding, wasted spend, and not enough historical data before UA shut down.',
    'For large accounts, those errors added up fast. The product needed honesty about trade-offs and a path people would actually finish.',
  ],
  image: IMG('case-studies', 'conversion-goal-updates', 'laptop.png'),
  foot: CG,
});

contentSlide({
  section: CG,
  heading: 'Process & methods — what each step revealed',
  bullets: [
    'Partner mock audit → headlines were technical, non-actionable, jargon-heavy.',
    'Past research + research partners → advertisers thought in “switch,” not “update goals from UA to GA4.”',
    'Usability on row-by-row Primary/Secondary → clearer CTAs still caused stalling; choice ≠ confidence.',
    'Eng feasibility check → recommendations + impact could be calculated before commit.',
    'Help-content partnership → tooltips and consolidated help closed remaining gaps without flooding the UI.',
  ],
  note: 'Principles: be upfront about change, automate where possible, be honest about short-term pain vs. long-term benefit.',
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Early hierarchy: partner content (iteration 1)',
  caption: 'Technically correct, but too complicated for a headline.',
  image: IMG('case-studies', 'conversion-goal-updates', 'image.png'),
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Reframe: exact tasks, clearer action',
  caption: 'Second iteration outlined the tasks advertisers needed to complete.',
  image: IMG('case-studies', 'conversion-goal-updates', 'image-1.png'),
  foot: CG,
});

copyTableSlide({
  section: CG,
  heading: 'Key decision: headline language',
  rows: [
    {
      copy: 'Update your goals from Universal Analytics conversions to Google Analytics 4 conversions',
      status: 'Rejected',
      why: 'Too much jargon; assumed goals↔conversions knowledge.',
    },
    {
      copy: 'Change your Universal Analytics conversions to Google Analytics 4 conversions',
      status: 'Rejected',
      why: 'Redundant; unclear what type of change.',
    },
    {
      copy: 'Switch to Google Analytics 4 conversions',
      status: 'Final',
      why: 'Simple action matching advertisers’ mental model.',
    },
  ],
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Process artifact: six-screen manual flow',
  caption: 'Early complete user flow before automation—too much work at the moment of change.',
  image: IMG('case-studies', 'conversion-goal-updates', 'cgu-5.png'),
  foot: CG,
});

decisionSlide({
  section: CG,
  heading: 'Key decisions & trade-offs',
  decisions: [
    {
      label: 'Decision 01',
      title: '“Switch,” not migration jargon',
      body: 'Reframed the job in advertiser language after research, then tested for hesitation.',
      tradeoff: 'Less platform-precision in the headline for faster comprehension.',
    },
    {
      label: 'Decision 02',
      title: 'Stop row-by-row decisions',
      body: 'Moved from dropdowns → labeled actions → automated primary/secondary recommendations with review.',
      tradeoff: 'Less advertiser control per row; more confidence and completion.',
    },
    {
      label: 'Decision 03',
      title: 'Show impact before approve',
      body: 'Partnered with eng to surface performance impact on the review step instead of after the fact.',
      tradeoff: 'More engineering scope; far less blind commitment.',
    },
  ],
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Solution: review & approve recommendation',
  caption: 'Final flow: three screens. See what changes, then save.',
  image: IMG('case-studies', 'conversion-goal-updates', 'cgu-hero.png'),
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Solution: performance impact on review',
  image: IMG('case-studies', 'conversion-goal-updates', 'image-3.png'),
  foot: CG,
});

imageSlide({
  section: CG,
  heading: 'Solution: notification that drives action',
  image: IMG('case-studies', 'conversion-goal-updates', 'cgu-7.png'),
  foot: CG,
});

copyTableSlide({
  section: CG,
  heading: 'Notification copy decisions',
  rows: [
    {
      copy: 'Failing to migrate… vulnerable… lost revenue…',
      status: 'Rejected',
      why: 'Fear-based; anxiety over motivation.',
    },
    {
      copy: 'Migrating ensures campaigns remain functional…',
      status: 'Rejected',
      why: 'Vague urgency; no timeline or next step.',
    },
    {
      copy: 'Switch to GA4… now… enough historical data… July 1, 2023.',
      status: 'Final',
      why: 'Clear CTA, concrete date, proactive benefit.',
    },
  ],
  foot: CG,
});

contentSlide({
  section: CG,
  heading: 'Results & impact',
  paragraphs: [
    'We cut the flow from six screens of manual updates to a shorter path: review the recommendation, then approve.',
    'Advertisers could see what would change before they committed—instead of flipping each setting themselves.',
    'Content didn’t just label the chore. It reframed the job from “change every conversion” to “does this look right?”',
  ],
  foot: CG,
});

// ─────────────────────────────────────────────────────────────
// 03 FLEXIBLE LIFT / CERTAINTY
// ─────────────────────────────────────────────────────────────
const FL = '03  ·  Certainty of lift';

darkDivider({
  eyebrow: 'Case study 03  ·  Google Ads',
  headline: 'A metric name that works for statisticians and everyone else',
  outcome: '90% got the name, no help needed',
  company: 'Senior Content Designer  ·  UX, PM, Eng, Research, Data Science',
});

contentSlide({
  section: FL,
  heading: 'Context',
  paragraphs: [
    'Product: Brand lift results in Google Ads—specifically naming and explaining a confidence/certainty metric.',
    'Company & team: Google Ads with UX, PM, Eng, program managers, UX research, and data science stakeholders.',
    'My role: Senior Content Designer leading naming, evaluation framework, research partnership, and tooltip/guidance language so novices and experts could understand the concept from the product itself.',
  ],
  foot: FL,
});

splitImageText({
  section: FL,
  heading: 'Problem',
  paragraphs: [
    'Brand lift campaigns rarely hit classic statistical significance, so advertisers got vague insights like “Your campaign drove an increase in awareness.”',
    'The team proposed lowering the threshold and showing confidence levels in-product—making more campaigns actionable, with honest reliability.',
    'The naming problem: one term had to work for stats experts and stats novices without tooltips doing the real work.',
  ],
  image: IMG('case-studies', 'flexible-lift-confidence', 'image.png'),
  foot: FL,
});

contentSlide({
  section: FL,
  heading: 'Process & methods — what each step revealed',
  bullets: [
    'Dual-audience framing (stats expert vs. novice) → clarified competing success criteria.',
    'Literature + brand/naming review → patterns, but no definitive name.',
    'Evaluation matrix vs. guidelines & plain language → narrowed to two candidates; de-personalized debate.',
    'Comparative UX research study → “Certainty of lift detection” beat “statistical significance,” even for experts in this context.',
    'Pre-launch quantitative survey → de-risked comprehension before market release.',
    'Tooltip iterations + stakeholder plain vs. technical versions → launched balanced plain language.',
  ],
  note: 'Principle: ground language in research, not convention—or internal preference.',
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Naming options on the table',
  image: IMG('case-studies', 'flexible-lift-confidence', 'naming-options.png'),
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Evaluation matrix: judgment with criteria',
  caption: 'Structured scoring beat subjective stakeholder preference.',
  image: IMG('case-studies', 'flexible-lift-confidence', 'naming-matrix.png'),
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Research design: two terminology groups',
  image: IMG('case-studies', 'flexible-lift-confidence', 'group-632560.png'),
  foot: FL,
});

decisionSlide({
  section: FL,
  heading: 'Key decisions & trade-offs',
  decisions: [
    {
      label: 'Decision 01',
      title: 'Framework before preference',
      body: 'Built a scoring matrix so “Certainty of lift” could compete fairly against data-science-favored terms.',
      tradeoff: 'Slower alignment early; stronger, defensible decision later.',
    },
    {
      label: 'Decision 02',
      title: 'Research over convention',
      body: 'Even stats-savvy users found “statistical significance” ambiguous here. We shipped “Certainty of lift.”',
      tradeoff: 'Less familiar academic label; higher unaided comprehension.',
    },
    {
      label: 'Decision 03',
      title: 'Plain-language tooltip',
      body: 'Showed stakeholders a plain vs. technical tooltip pair; launched the plain version once accuracy was proven.',
      tradeoff: 'Less formula detail in UI; more actionable interpretation.',
    },
  ],
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Solution: survey confirmation',
  image: IMG('case-studies', 'flexible-lift-confidence', 'survey-results.png'),
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Solution: tooltip iterations',
  image: IMG('case-studies', 'flexible-lift-confidence', 'certainty-iterations.png'),
  foot: FL,
});

imageSlide({
  section: FL,
  heading: 'Solution: launched plain-language tooltip',
  caption: 'The plain language version—this is the one we launched with.',
  image: IMG('case-studies', 'flexible-lift-confidence', 'certainty-tooltip.png'),
  foot: FL,
});

contentSlide({
  section: FL,
  heading: 'Results & impact',
  paragraphs: [
    'Over 50% found brand lift easier to use.',
    '90% understood “Certainty of lift” from the name alone—no help needed.',
    'Research beat internal preference: what felt “oversimplified” to stakeholders was what users could actually use.',
  ],
  foot: FL,
});

// ─────────────────────────────────────────────────────────────
// 04 EXPERT SCHEDULING
// ─────────────────────────────────────────────────────────────
const ES = '04  ·  Expert scheduling';

darkDivider({
  eyebrow: 'Case study 04  ·  Intuit',
  headline: 'Less reading, easier scheduling',
  outcome: 'Plain guidance so tax pros can set their own schedules',
  company: 'Content Designer  ·  Virtual Expert Platform  ·  UX, PM, Eng',
});

contentSlide({
  section: ES,
  heading: 'Context',
  paragraphs: [
    'Product: TurboTax Live expert base-schedule tool on Intuit’s Virtual Expert Platform.',
    'Company & team: Intuit. Partnered with UX designers, PMs, engineers, and program managers ahead of tax season.',
    'My role: Content Designer leading a content redesign of self-service scheduling—audit, onboarding instructions, in-product guidance, and error messaging—so seasonal experts could set 12 weeks of availability with confidence.',
  ],
  foot: ES,
});

splitImageText({
  section: ES,
  heading: 'Problem',
  paragraphs: [
    'Every year Intuit onboards thousands of TurboTax Live experts. Before they help customers, they must set a base schedule staffing depends on.',
    'A prior self-service tool was overwhelming: too much information, confusing instructions, experts stuck on a “simple” task.',
    'With tax season approaching, the content needed to turn a frustrating hurdle into something that helped experts feel ready for the role.',
  ],
  image: IMG('case-studies', 'expert-scheduling', 'hero-group-3766.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Expert journey: 12 weeks of availability',
  image: IMG('case-studies', 'expert-scheduling', 'journey-image-293.png'),
  foot: ES,
});

contentSlide({
  section: ES,
  heading: 'Process & methods — what each step revealed',
  bullets: [
    'End-to-end content audit (screenshots, strings, designs, data) → wall-of-text onboarding and unhelpful errors across the journey.',
    'Team review of audit deck → aligned on where content should work harder before UI polish.',
    'Usability on chunked onboarding → easier to scan than original, still too much retained at once.',
    'Stakeholder cuts + progressive disclosure → keep only essentials on first screen; move detail to moment of need.',
    'Error inventory with eng/PM → many errors preventable with better upfront guidance; remaining errors needed directive fixes.',
  ],
  note: 'Principles: information exactly when needed, celebrate progress, break intimidating tasks into smaller pieces.',
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Audit artifact: base-schedule workflow',
  image: IMG('case-studies', 'expert-scheduling', 'group-632525.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Before: onboarding wall of text',
  caption: 'Experts were expected to read and retain everything while creating a schedule.',
  image: IMG('case-studies', 'expert-scheduling', 'onboarding-original.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Iteration: chunked, still heavy',
  caption: 'Clearer headings helped scanning—but volume was still too high.',
  image: IMG('case-studies', 'expert-scheduling', 'onboarding-first-iteration.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Refined: only what’s needed to start',
  image: IMG('case-studies', 'expert-scheduling', 'onboarding-refined.png'),
  foot: ES,
});

decisionSlide({
  section: ES,
  heading: 'Key decisions & trade-offs',
  decisions: [
    {
      label: 'Decision 01',
      title: 'Cut the upfront wall',
      body: 'Moved rules off the first screen into the scheduling UI at the moment experts needed them.',
      tradeoff: 'Less “complete” orientation doc; higher completion and less overwhelm.',
    },
    {
      label: 'Decision 02',
      title: 'Errors that teach the fix',
      body: 'Rewrote errors to start with the action, after mapping every failure mode with engineering.',
      tradeoff: 'Longer strings in places; far more recoverable states.',
    },
    {
      label: 'Decision 03',
      title: 'Human constraints in the system',
      body: 'Launched messaging that acknowledged skipped weeks (life happens) while meeting staffing needs.',
      tradeoff: 'Softer enforcement tone; more realistic expert behavior.',
    },
  ],
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Solution: error messaging before → after',
  image: IMG('case-studies', 'expert-scheduling', 'error-message-mockup.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Solution: error inventory spreadsheet',
  image: IMG('case-studies', 'expert-scheduling', '06.jpg'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Solution: launched directive error',
  caption: 'Accounts for unseen use cases while guiding schedule approval.',
  image: IMG('case-studies', 'expert-scheduling', 'error-launched.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Solution: scheduling UI — original',
  image: IMG('case-studies', 'expert-scheduling', 'scheduling-original.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Solution: guidance moved into the task',
  caption: 'Requirements content moved from instructions to the scheduling interface.',
  image: IMG('case-studies', 'expert-scheduling', 'scheduling-first-iteration.png'),
  foot: ES,
});

imageSlide({
  section: ES,
  heading: 'Future-state concept',
  caption: 'Post-launch exploration: tighter headline, clearer hierarchy, help on demand.',
  image: IMG('case-studies', 'expert-scheduling', 'future-state.png'),
  foot: ES,
});

contentSlide({
  section: ES,
  heading: 'Results & impact',
  paragraphs: [
    'Hard to isolate content from the broader redesign—but experts got a clearer experience: guidance that told them what to do, information in smaller pieces, and errors that explained how to fix the problem.',
    'By replacing an upfront wall of instructions with focused guidance at the moment it mattered, we made scheduling easier—and helped experts feel more confident starting their new role.',
  ],
  foot: ES,
});

// ─────────────────────────────────────────────────────────────
// CLOSE
// ─────────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  base(slide);
  accentBar(slide);
  kicker(slide, 'Wrap-up');
  title(slide, 'What I want you to remember', { y: 0.7, h: 0.8, fontSize: 28 });

  const takeaways = [
    {
      t: 'Judgment over decoration',
      d: 'Copy tables and naming matrices show how I decide—not just what shipped.',
    },
    {
      t: 'Methods tied to insight',
      d: 'Research, audits, and partner loops each changed a concrete product decision.',
    },
    {
      t: 'Outcomes that matter',
      d: '+25% correct measurement setup · review-and-approve migrations · 90% name comprehension · clearer expert scheduling.',
    },
  ];
  takeaways.forEach((item, i) => {
    const y = 1.8 + i * 1.35;
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: M,
      y,
      w: 0.12,
      h: 1.0,
      fill: { color: C.accent },
      line: { color: C.accent },
    });
    slide.addText(item.t, {
      x: M + 0.35,
      y,
      w: 11.5,
      h: 0.4,
      fontSize: 18,
      fontFace: 'Arial',
      color: C.navy,
      bold: true,
      margin: 0,
    });
    slide.addText(item.d, {
      x: M + 0.35,
      y: y + 0.4,
      w: 11.5,
      h: 0.55,
      fontSize: 14,
      fontFace: 'Arial',
      color: C.secondary,
      margin: 0,
    });
  });
  footer(slide, 'Wrap-up');
}

{
  const slide = pptx.addSlide();
  base(slide, C.navy);
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: W,
    h: 0.12,
    fill: { color: C.accent },
    line: { color: C.accent },
  });
  slide.addText('Q&A', {
    x: M,
    y: 2.3,
    w: 12,
    h: 0.9,
    fontSize: 54,
    fontFace: 'Arial',
    color: C.white,
    bold: true,
    margin: 0,
  });
  slide.addText('Thanks for your time. Happy to go deep on any project, artifact, or decision.', {
    x: M,
    y: 3.4,
    w: 11,
    h: 0.5,
    fontSize: 18,
    fontFace: 'Arial',
    color: 'BEE1FF',
    margin: 0,
  });
  slide.addText('Kyle Stewart  ·  Content Designer  ·  hello@kstew.co  ·  linkedin.com/in/kylestewart100  ·  kstew.co', {
    x: M,
    y: 6.2,
    w: 12,
    h: 0.35,
    fontSize: 13,
    fontFace: 'Arial',
    color: '9DCCF4',
    margin: 0,
  });
}

await pptx.writeFile({ fileName: OUT });
console.log('Wrote', OUT);
