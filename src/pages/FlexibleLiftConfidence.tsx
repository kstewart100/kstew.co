import { useEffect } from 'react';
import { CaseStudyLayout, caseStudyH2ClassName } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE =
  'Redesigning ad metrics teams can report with confidence — Kyle Stewart';

const bodyClassName =
  'font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]';

const imageClassName =
  'w-full max-w-full block h-auto object-contain bg-white border-[3px] border-black/5 p-4 md:p-5';

const h3ClassName =
  'font-heading text-[#1a1a1a] text-lg font-normal leading-snug tracking-[1.2px] mb-4';

export function FlexibleLiftConfidence() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => { document.title = 'Kyle Stewart — Portfolio'; };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EFF0F3] text-[#1a1a1a] font-sans">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-10 lg:py-20">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-heading text-gray-700 text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Redesigning ad metrics teams can report with confidence
            </h1>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 border-t border-b border-[rgba(26,26,26,0.25)] py-5">
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Company</strong>
                Google, Google Ads
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Role</strong>
                Content Designer
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Team</strong>
                UX Designers, Product Managers, Software Engineers, and Program
                Managers
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/image.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Brand lift campaigns on Google Ads rarely achieved statistical
              significance, leaving advertisers with vague insights like “Your
              campaign drove an increase in awareness.” We proposed lowering the
              statistical threshold and displaying confidence levels directly in
              the product—giving advertisers transparency about result reliability
              while making more campaigns actionable.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I lead the content design and messaging to make this complex
              statistical concept accessible to both novices and experts. The
              updates significantly improved customer satisfaction scores and
              renewed engagement with brand lift campaigns.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <h2 className={caseStudyH2ClassName}>Our design principles</h2>
              <ul className="space-y-4 lg:space-y-5 list-none p-0 m-0">
                <li className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Make statistics human by translating terminology into clear,
                  trustworthy language
                </li>
                <li className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Put information where it belongs
                </li>
                <li className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Validate language choices through research rather than following
                  others
                </li>
              </ul>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Understanding the landscape</h2>
            <p className={bodyClassName}>
              I was designing for two distinct users: the Stats Expert, who
              interprets data confidently and serves as the team&apos;s go-to
              resource, and the Stats Novice, who has limited recent statistics
              experience and benefits from simplified, educational content.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              To ground the work, I ran a literature review across prior studies,
              brand and naming conventions, and educational materials — which
              surfaced useful patterns but no definitive naming solution.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Exploring the different options for a name
            </h2>
            <p className={bodyClassName}>
              The team had explored several naming options before my involvement.
              After conducting the literature review and consulting design
              guidelines, I proposed “certainty of lift,” though stakeholders
              initially expressed skepticism about this terminology.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632545.png"
              alt="Naming options from cross-functional collaboration"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              To move beyond subjective preferences, I developed a structured
              evaluation framework. Each option was assessed against established
              guidelines, user needs, and plain language principles, ensuring our
              decision would be grounded in objective criteria rather than
              personal opinions.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/image-1.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The analysis narrowed our options to two candidates: “statistical
              significance” (favored by data science stakeholders) and “certainty
              of lift detection” (aligned with content standards). User research
              would determine the final choice.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Testing through research</h2>
            <p className={bodyClassName}>
              Effective feature names should be self-explanatory. While tooltips
              and help documentation provide support, the primary terminology
              should communicate clearly without additional explanation.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I partnered with UX researchers to design a study comparing both
              terminology options. Participants viewed identical interfaces with
              different terminology, then explained their understanding of the
              metrics and their implications for campaign decisions.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              The drafted research study ensured the in-product content would be
              thoroughly validated and that both user groups understood the metric
              and metric group without needing to reference tooltips or additional
              educational information.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632560.png"
              alt="Research study groups"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The participants were divided into two groups: one would see
              “statistical significance” and the other would see “Certainty of
              lift detection,” and both groups would be asked to explain what
              the term means to them.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              Results strongly favored “certainty of lift detection” across all
              user segments. Notably, even statistically sophisticated users found
              “statistical significance” ambiguous in this context. We further
              simplified it to “certainty of lift” based on these findings.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h3 className={h3ClassName}>Research comparison</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="font-sans text-gray-700 text-sm font-bold leading-[19.2px] mb-3">
                  Statistical significance
                </p>
                <ul className="font-sans text-gray-700 text-xs font-normal leading-[19.2px] p-2.5 list-disc pl-5 space-y-1">
                  <li>
                    More stats savvy users preferred this because they use this
                    language today
                  </li>
                  <li>
                    Less stats savvy users preferred this because it seemed more
                    technical and exact
                  </li>
                  <li>More universal term, specific to stats</li>
                  <li>Most users could not explain how it’s calculated</li>
                </ul>
              </div>
              <div>
                <p className="font-sans text-gray-700 text-sm font-bold leading-[19.2px] mb-3">
                  Certainty of lift detection
                </p>
                <ul className="font-sans text-gray-700 text-xs font-normal leading-[19.2px] p-2.5 list-disc pl-5 space-y-1">
                  <li>More specific term to lift</li>
                  <li>Users deduced the meaning by using context clues</li>
                  <li>
                    Lift detection means they got lift, and certainty is how
                    accurate the results are
                  </li>
                  <li>
                    Both more and less stats savvy users preferred this because
                    it was easier to understand and explain to others
                  </li>
                </ul>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Prior to the launch, the team wanted to validate the experience’s
              usability and confirm users correctly comprehended the new metric.
              Before a market release, our research partners conducted a
              quantitative study to measure and validate key user perceptions. The
              survey included questions to specifically confirm that this initial
              cohort interpreted the new metric as we intended. This provided the
              data-backed signal we needed to de-risk the launch.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/frame-632571.png"
              alt="Survey results"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Creating an easy-to-read tooltip
            </h2>
            <p className={bodyClassName}>
              With validated terminology, I focused on designing the complete user
              experience. The goal was to make statistical results both
              comprehensible and actionable for decision-making.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I explored approaches that combined metric definitions with
              contextual guidance based on confidence levels, moving beyond simple
              percentage displays to provide meaningful interpretation.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632542.png"
              alt="Star tag headline and subhead iterations"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Research revealed two primary use cases: some advertisers required
              statistical validation for major decisions, while others sought
              directional insights for ongoing optimization. Our content strategy
              needed to accommodate both scenarios effectively.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632550.png"
              alt="Use case comparison"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              To align stakeholders on the tooltip language, I developed two
              versions—one using plain language and another with technical
              terminology. After showing my stakeholders you can use plain
              language to get a technical point across, we launched with a version
              that balanced clarity with accuracy to ensure both technical and
              non-technical users could understand and trust the results.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/flexible-lift-confidence/image-2.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Learnings</h2>
            <p className={bodyClassName}>
              The project delivered measurable improvements: over 50% of users
              found brand lift campaigns easy to use, and 90% understood “Certainty
              of lift.”
            </p>
            <p className={`${bodyClassName} mt-6`}>
              Key learnings: Complex concepts don’t require complex
              language—simple terminology that resonates with users can maintain
              technical accuracy while bridging knowledge gaps. Showing results
              below traditional significance thresholds proved valuable, with 70%
              of users preferring directional insights over no information. Most
              importantly, user research revealed that terminology seeming
              “oversimplified” to internal stakeholders was optimal for actual
              users—validating evidence-based content decisions over intuition.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );
}
