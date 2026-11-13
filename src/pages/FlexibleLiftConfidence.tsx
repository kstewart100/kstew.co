import {
  CaseStudyHero,
  CaseStudyLayout,
  CaseStudyMeta,
  documentCaseStudyBodyClassName,
  documentCaseStudyH2ClassName,
  documentCaseStudyH3ClassName,
  documentCaseStudyImageClassName,
  documentCaseStudyListClassName,
  documentCaseStudyTitleClassName,
} from '../components/CaseStudyLayout';
import { Footer } from '../components/Footer';
import { CaseStudyNav } from '../components/CaseStudyNav';
import { FlexibleLiftCertaintyQuotes } from '../components/FlexibleLiftCertaintyQuotes';

const layout = { variant: 'document' as const };
const body = documentCaseStudyBodyClassName;
const h2 = documentCaseStudyH2ClassName;
const h3 = documentCaseStudyH3ClassName;
const img = documentCaseStudyImageClassName;
const list = documentCaseStudyListClassName;

export function FlexibleLiftConfidence() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-color-bg-canvas pt-[var(--site-header-height)]">
      <main id="main-content" className="flex-1 pt-8 pb-16 lg:pt-10 lg:pb-24">
          <div className="space-y-10 md:space-y-12 mb-24 lg:mb-32">
            <CaseStudyHero
              src="/images/case-studies/flexible-lift-confidence/image.png"
              alt="Google Ads brand lift metrics showing Certainty of lift"
              caption="Brand lift results now show how certain we are that the campaign actually drove lift."
              shadow
            />

            <CaseStudyLayout {...layout}>
              <h1 className={documentCaseStudyTitleClassName}>
                A metric name that works for statisticians and everyone else
              </h1>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                Brand lift campaigns on Google Ads rarely achieved statistical
                significance, so advertisers received vague insights like
                &ldquo;Your campaign drove an increase in awareness.&rdquo; We
                proposed lowering the statistical threshold and showing confidence
                levels directly in the product. This gave advertisers transparency
                about result reliability and made more campaigns actionable.
              </p>
              <p className={`${body} mt-6`}>
                I led the content design and messaging so both novices and
                experts could understand the concept from the product itself.
                Among users studied, over 50% found brand lift easier to use, and
                90% understood the metric from the name alone.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <CaseStudyMeta
                company="Google, Google Ads"
                role="Senior Content Designer"
                team="UX Designers, Product Managers, Software Engineers, and Program Managers"
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Our design principles</h2>
              <ul className={`${list} mt-6`}>
                <li>
                  Make statistics human by translating terminology into clear,
                  trustworthy language
                </li>
                <li>Put information where it belongs</li>
                <li>
                  Ground language choices in research, not convention
                </li>
              </ul>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Understanding the landscape</h2>
              <p className={`${body} mt-6`}>
                I was designing for two distinct users: the Stats Expert, who
                interprets data confidently and serves as the team&apos;s go-to
                resource, and the Stats Novice, who has limited recent statistics
                experience and benefits from simplified, educational content.
              </p>
              <p className={`${body} mt-6`}>
                To ground the work, I ran a literature review across prior studies,
                brand and naming conventions, and educational materials — which
                surfaced useful patterns but no definitive naming solution.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Exploring the different options for a name</h2>
              <p className={`${body} mt-6`}>
                The team had explored several naming options before my involvement.
                After conducting the literature review and consulting design
                guidelines, I proposed &ldquo;Certainty of lift,&rdquo; though
                stakeholders initially expressed skepticism about this terminology.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <img
                src="/images/case-studies/flexible-lift-confidence/naming-options.png"
                alt="Naming options explored for the brand lift metric"
                loading="lazy"
                className={img}
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
                src="/images/case-studies/flexible-lift-confidence/naming-matrix.png"
                alt="Naming evaluation matrix comparing metric name options"
                loading="lazy"
                className={img}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                The analysis narrowed our options to two candidates:
                &ldquo;statistical significance&rdquo; (favored by data science
                stakeholders) and &ldquo;Certainty of lift detection&rdquo; (aligned
                with content standards). User research would determine the final
                choice.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Testing through research</h2>
              <p className={`${body} mt-6`}>
                Effective feature names should be self-explanatory. While tooltips
                and help documentation provide support, the primary terminology
                should communicate clearly without additional explanation.
              </p>
              <p className={`${body} mt-6`}>
                I partnered with UX researchers to design a study comparing both
                terminology options. Participants viewed identical interfaces with
                different terminology, then explained their understanding of the
                metrics and their implications for campaign decisions.
              </p>
              <p className={`${body} mt-6`}>
                The drafted research study ensured the in-product content would be
                thoroughly tested and that both user groups understood the metric
                from the name alone, without needing tooltips or additional
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
              <p className={`${body} mt-6`}>
                Results strongly favored &ldquo;Certainty of lift detection&rdquo;
                across all user segments. Notably, even statistically sophisticated
                users found &ldquo;statistical significance&rdquo; ambiguous in this
                context. We further simplified it to &ldquo;Certainty of lift&rdquo;
                based on these findings.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h3 className={h3}>Research comparison</h3>
              <div className="mt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className={`${body} font-semibold mb-2`}>
                    Statistical significance
                  </p>
                  <ul className={list}>
                    <li>
                      More stats-savvy users preferred this because they use this
                      language today
                    </li>
                    <li>
                      Less stats-savvy users preferred this because it seemed more
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
                      Both more and less stats-savvy users preferred this because
                      it was easier to understand and explain to others
                    </li>
                  </ul>
                </div>
              </div>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                Prior to the launch, the team wanted to ensure the
                experience&apos;s usability and confirm users correctly comprehended
                the new metric. Before a market release, our research partners
                conducted a quantitative study to measure and understand key user
                perceptions. The survey included questions to specifically confirm
                that this initial cohort interpreted the new metric as we intended.
                This provided the data-backed signal we needed to de-risk the
                launch.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <img
                src="/images/case-studies/flexible-lift-confidence/survey-results.png"
                alt="Survey results confirming understanding of Certainty of lift"
                loading="lazy"
                className={img}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Creating an easy-to-read tooltip</h2>
              <p className={`${body} mt-6`}>
                With the terminology settled, I focused on designing the complete
                user experience. The goal was to make statistical results both
                comprehensible and actionable for decision-making.
              </p>
              <p className={`${body} mt-6`}>
                I explored approaches that combined metric definitions with
                contextual guidance based on confidence levels, moving beyond simple
                percentage displays to provide meaningful interpretation.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <img
                src="/images/case-studies/flexible-lift-confidence/certainty-iterations.png"
                alt="Tooltip iterations exploring guidance for different certainty levels"
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
              <FlexibleLiftCertaintyQuotes />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                To align stakeholders on the tooltip language, I developed two
                versions—one using plain language and another with technical
                terminology. Once stakeholders saw that plain language could get a
                technical point across, we launched with a version that balanced
                clarity with accuracy to ensure both technical and non-technical
                users could understand and trust the results.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout
              {...layout}
              caption="The plain language version. This is the one we launched with."
            >
              <img
                src="/images/case-studies/flexible-lift-confidence/certainty-tooltip.png"
                alt="Launched plain-language Certainty of lift tooltip"
                loading="lazy"
                className={img}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Learnings</h2>
              <p className={`${body} mt-6`}>
                Over 50% found brand lift easier to use, and 90% understood
                &ldquo;Certainty of lift&rdquo; from the name. Research beat
                internal preference: what felt &ldquo;oversimplified&rdquo; to
                stakeholders was what users could actually use.
              </p>
            </CaseStudyLayout>
            <CaseStudyNav />
          </div>
      </main>
      <Footer />
    </div>
  );
}
