export const SITE_URL = 'https://kstew.co';
export const DEFAULT_PAGE_TITLE = 'Content Design Portfolio';
export const SITE_DESCRIPTION = 'Kyle Stewart · Content Design';

export interface CaseStudy {
  slug: string;
  label: string;
  title: string;
  pageTitle: string;
  previewImage: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'measurement-setup',
    label: 'Google',
    title: "Helping more advertisers measure what's working in Google Ads",
    pageTitle:
      "Helping more advertisers measure what's working in Google Ads — Kyle Stewart",
    previewImage: '/images/case-studies/measurement-setup/image.png',
    description:
      'Repositioning measurement setup in Google Ads onboarding with clearer headlines and action-oriented copy.',
  },
  {
    slug: 'conversion-goal-updates',
    label: 'Google',
    title: 'Turning a confusing conversion change into a clear one',
    pageTitle:
      'Turning a confusing conversion change into a clear one — Kyle Stewart',
    previewImage: '/images/case-studies/conversion-goal-updates/laptop.png',
    description:
      'UX content design for a Google Ads conversion goal migration that affected advertiser spend.',
  },
  {
    slug: 'flexible-lift-confidence',
    label: 'Google',
    title: 'Redesigning ad metrics teams can report with confidence',
    pageTitle:
      'Redesigning ad metrics teams can report with confidence — Kyle Stewart',
    previewImage: '/images/case-studies/flexible-lift-confidence/image.png',
    description:
      'Making brand lift confidence levels understandable for both novice and expert Google Ads users.',
  },
  {
    slug: 'expert-scheduling',
    label: 'Intuit',
    title: 'Streamlining schedule creation for tax pros',
    pageTitle: 'Streamlining schedule creation for tax pros — Kyle Stewart',
    previewImage: '/images/case-studies/expert-scheduling/hero-group-3766.png',
    description:
      'A content redesign of Intuit’s TurboTax Live expert scheduling tool ahead of tax season.',
  },
];

const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((study) => [study.slug, study]),
) as Record<string, CaseStudy>;

export function getCaseStudyByPath(pathname: string): CaseStudy | undefined {
  const slug = pathname.replace(/^\/+|\/+$/g, '');
  return slug ? caseStudyBySlug[slug] : undefined;
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) {
    return caseStudies[0];
  }
  return caseStudies[(index + 1) % caseStudies.length];
}

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}
