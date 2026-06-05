import {
  CaseStudyLayout,
  documentCaseStudyBodyClassName,
  documentCaseStudyH2ClassName,
  documentCaseStudyH3ClassName,
  documentCaseStudyImageClassName,
  documentCaseStudyListClassName,
  documentCaseStudyTitleClassName,
} from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const layout = { variant: 'document' as const };
const body = documentCaseStudyBodyClassName;
const h2 = documentCaseStudyH2ClassName;
const h3 = documentCaseStudyH3ClassName;
const img = documentCaseStudyImageClassName;
const imgShadow = `${documentCaseStudyImageClassName} shadow-[0_12px_40px_rgba(41,64,80,0.18)]`;
const list = documentCaseStudyListClassName;

export function FlexibleLiftConfidence() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-8 lg:py-12">
        <div className="space-y-6 mb-16 lg:mb-24">
          <CaseStudyLayout {...layout}>
            <h1 className={documentCaseStudyTitleClassName}>
              Redesigning ad metrics teams can report with confidence
            </h1>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              <strong>Company:</strong> Google, Google Ads
            </p>
            <p className={`${body} mt-0`}>
              <strong>Role:</strong> Content Designer
            </p>
            <p className={`${body} mt-0`}>
              <strong>Team:</strong> UX Designers, Product Managers, Software
              Engineers, and Program Managers
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/image.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Brand lift campaigns on Google Ads rarely achieved statistical
              significance, leaving advertisers with vague insights like &ldquo;Your
              campaign drove an increase in awareness.&rdquo; We proposed lowering
              the statistical threshold and displaying confidence levels directly
              in the product—giving advertisers transparency about result
              reliability while making more campaigns actionable.
            </p>
            <p className={`${body} mt-4`}>
              I lead the content design and messaging to make this complex
              statistical concept accessible to both novices and experts. The
              updates significantly improved customer satisfaction scores and
              renewed engagement with brand lift campaigns.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Our design principles</h2>
            <ul className={`${list} mt-3`}>
              <li>
                <strong>
                  Make statistics human by translating terminology into clear,
                  trustworthy language
                </strong>
              </li>
              <li>
                <strong>Put information where it belongs</strong>
              </li>
              <li>
                <strong>
                  Validate language choices through research rather than
                  following others
                </strong>
              </li>
            </ul>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Understanding the landscape</h2>
            <p className={`${body} mt-3`}>
              I was designing for two distinct users: the Stats Expert, who
              interprets data confidently and serves as the team&apos;s go-to
              resource, and the Stats Novice, who has limited recent statistics
              experience and benefits from simplified, educational content.
            </p>
            <p className={`${body} mt-4`}>
              To ground the work, I ran a literature review across prior studies,
              brand and naming conventions, and educational materials — which
              surfaced useful patterns but no definitive naming solution.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Exploring the different options for a name</h2>
            <p className={`${body} mt-3`}>
              The team had explored several naming options before my involvement.
              After conducting the literature review and consulting design
              guidelines, I proposed &ldquo;certainty of lift,&rdquo; though
              stakeholders initially expressed skepticism about this terminology.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632545.png"
              alt="Naming options from cross-functional collaboration"
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              To move beyond subjective preferences, I developed a structured
              evaluation framework. Each option was assessed against established
              guidelines, user needs, and plain language principles, ensuring our
              decision would be grounded in objective criteria rather than personal
              opinions.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/image-1.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The analysis narrowed our options to two candidates:
              &ldquo;statistical significance&rdquo; (favored by data science
              stakeholders) and &ldquo;certainty of lift detection&rdquo; (aligned
              with content standards). User research would determine the final
              choice.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Testing through research</h2>
            <p className={`${body} mt-3`}>
              Effective feature names should be self-explanatory. While tooltips
              and help documentation provide support, the primary terminology
              should communicate clearly without additional explanation.
            </p>
            <p className={`${body} mt-4`}>
              I partnered with UX researchers to design a study comparing both
              terminology options. Participants viewed identical interfaces with
              different terminology, then explained their understanding of the
              metrics and their implications for campaign decisions.
            </p>
            <p className={`${body} mt-4`}>
              The drafted research study ensured the in-product content would be
              thoroughly validated and that both user groups understood the metric
              and metric group without needing to reference tooltips or additional
              educational information.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632560.png"
              alt="Research study groups"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The participants were divided into two groups: one would see
              &ldquo;statistical significance&rdquo; and the other would see
              &ldquo;Certainty of lift detection,&rdquo; and both groups would be
              asked to explain what the term means to them.
            </p>
            <p className={`${body} mt-4`}>
              Results strongly favored &ldquo;certainty of lift detection&rdquo;
              across all user segments. Notably, even statistically sophisticated
              users found &ldquo;statistical significance&rdquo; ambiguous in this
              context. We further simplified it to &ldquo;certainty of lift&rdquo;
              based on these findings.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h3 className={h3}>Research comparison</h3>
            <div className="mt-4 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <p className={`${body} font-semibold mb-2`}>
                  Statistical significance
                </p>
                <ul className={list}>
                  <li>
                    More stats savvy users preferred this because they use this
                    language today
                  </li>
                  <li>
                    Less stats savvy users preferred this because it seemed more
                    technical and exact
                  </li>
                  <li>More universal term, specific to stats</li>
                  <li>Most users could not explain how it&apos;s calculated</li>
                </ul>
              </div>
              <div>
                <p className={`${body} font-semibold mb-2`}>
                  Certainty of lift detection
                </p>
                <ul className={list}>
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

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Prior to the launch, the team wanted to validate the
              experience&apos;s usability and confirm users correctly comprehended
              the new metric. Before a market release, our research partners
              conducted a quantitative study to measure and validate key user
              perceptions. The survey included questions to specifically confirm
              that this initial cohort interpreted the new metric as we intended.
              This provided the data-backed signal we needed to de-risk the
              launch.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/frame-632571.png"
              alt="Survey results"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Creating an easy-to-read tooltip</h2>
            <p className={`${body} mt-3`}>
              With validated terminology, I focused on designing the complete user
              experience. The goal was to make statistical results both
              comprehensible and actionable for decision-making.
            </p>
            <p className={`${body} mt-4`}>
              I explored approaches that combined metric definitions with
              contextual guidance based on confidence levels, moving beyond simple
              percentage displays to provide meaningful interpretation.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632542.png"
              alt="Star tag headline and subhead iterations"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Research revealed two primary use cases: some advertisers required
              statistical validation for major decisions, while others sought
              directional insights for ongoing optimization. Our content strategy
              needed to accommodate both scenarios effectively.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/group-632550.png"
              alt="Use case comparison"
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              To align stakeholders on the tooltip language, I developed two
              versions—one using plain language and another with technical
              terminology. After showing my stakeholders you can use plain language
              to get a technical point across, we launched with a version that
              balanced clarity with accuracy to ensure both technical and
              non-technical users could understand and trust the results.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/flexible-lift-confidence/image-2.png"
              alt=""
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Learnings</h2>
            <p className={`${body} mt-3`}>
              The project delivered measurable improvements: over 50% of users
              found brand lift campaigns easy to use, and 90% understood
              &ldquo;Certainty of lift.&rdquo;
            </p>
            <p className={`${body} mt-4`}>
              Key learnings: Complex concepts don&apos;t require complex
              language—simple terminology that resonates with users can maintain
              technical accuracy while bridging knowledge gaps. Showing results
              below traditional significance thresholds proved valuable, with 70%
              of users preferring directional insights over no information. Most
              importantly, user research revealed that terminology seeming
              &ldquo;oversimplified&rdquo; to internal stakeholders was optimal for
              actual users—validating evidence-based content decisions over
              intuition.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );
}
