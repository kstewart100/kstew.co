import {
  CaseStudyLayout,
  CopyDecisionTable,
  documentCaseStudyBodyClassName,
  documentCaseStudyH2ClassName,
  documentCaseStudyImageClassName,
  documentCaseStudyListClassName,
  documentCaseStudyTitleClassName,
} from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const layout = { variant: 'document' as const };
const body = documentCaseStudyBodyClassName;
const h2 = documentCaseStudyH2ClassName;
const img = documentCaseStudyImageClassName;
const imgShadow = `${documentCaseStudyImageClassName} shadow-[0_12px_40px_rgba(41,64,80,0.18)]`;
const list = documentCaseStudyListClassName;

export function MeasurementSetup() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-8 lg:py-12">
        <div className="space-y-6 mb-16 lg:mb-24">
          <CaseStudyLayout {...layout}>
            <h1 className={documentCaseStudyTitleClassName}>
              Helping more advertisers measure what&apos;s working in Google Ads
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
              src="/images/case-studies/measurement-setup/image.png"
              alt=""
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Conversion tracking was essential to campaign performance, but the
              setup experience was buried, jargon-heavy, and easy for first-time
              advertisers to skip.
            </p>
            <p className={`${body} mt-4`}>
              I helped reposition measurement setup inside onboarding with
              clearer headlines, simpler guidance, and action-oriented copy so
              more users could complete setup correctly on the first pass. With
              these new updates, we saw a 25 percent increase in people setting
              up these tools.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Our design principles</h2>
            <ul className={`${list} mt-3`}>
              <li>
                <strong>
                  Simplify and hide details with progressive disclosure
                </strong>
              </li>
              <li>
                <strong>Do the work for them</strong>
              </li>
              <li>
                <strong>Assume they&apos;re new</strong>
              </li>
            </ul>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Refining content hierarchy</h2>
            <p className={`${body} mt-3`}>
              My initial approach included all information users might need
              directly on the page. But after exploring this, I realized we
              could streamline the narrative and significantly reduce cognitive
              load.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/measurement-setup/image-1.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              I thought a celebratory message would be motivating, but research
              quickly shot that down. People thought &apos;Congrats!&apos; meant
              their campaigns were already live, which was completely wrong.
              This led to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/measurement-setup/cm-3.png"
              alt="Initial attempt at streamlined copy"
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              I initially added a celebratory message to build momentum, but
              research discussions revealed a critical issue—this messaging gave
              the false impression that campaigns had already launched. This led
              to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              title="Headline and subhead copy decisions"
              rows={[
                {
                  copy: (
                    <>
                      <strong>Congrats! You&apos;re almost done.</strong> Your
                      campaign has been published and will be reviewed by our
                      team.
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Too vague about timeline and mixed messaging (congrats vs. "almost done")',
                },
                {
                  copy: (
                    <>
                      <strong>Your campaign is published!</strong> Now
                      let&apos;s track your conversions.
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Unclear about review process; users were confused about next steps',
                },
                {
                  copy: (
                    <>
                      <strong>Your ads will go live after a review</strong> All
                      ads are checked to ensure they&apos;re safe and appropriate
                      for everyone. This editorial and policy review should take
                      1–2 business days.
                    </>
                  ),
                  status: 'Final',
                  decision:
                    'Clear expectations, transparent process, specific timeline',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The final design uses clear, direct language to explain what
              advertisers should expect, building trust while considering the
              full journey of tasks they need to accomplish.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/measurement-setup/image-2.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Finding and aligning on the CTAs</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/measurement-setup/cm-5.png"
              alt="CTA variations from product and testing phases"
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Leveraging prior research, I discovered that &ldquo;Set up&rdquo;
              and &ldquo;Get event snippet&rdquo; resonated strongly with
              advertisers. These action-oriented CTAs clearly communicated what
              users needed to do while avoiding technical jargon that might cause
              hesitation.
            </p>
            <p className={`${body} mt-4`}>
              This seemingly small decision had significant impact—clear CTAs
              reduced decision paralysis and helped advertisers move confidently
              through setup.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Working out the jargon</h2>
            <p className={`${body} mt-3`}>
              While working on this experience, I kept one thing in mind: What
              did the user need to know to take action? Why did the user even
              care about taking action?
            </p>
            <p className={`${body} mt-4`}>
              An important place this thought should be alleviated is in the
              directional copy in the tags and snippets. Without setting these
              up correctly, users wouldn&apos;t see results in their campaign.
              This approach—explaining the &ldquo;why&rdquo; alongside the
              &ldquo;what&rdquo;—helped advertisers understand not just what
              they were doing, but why it mattered for their business
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              title="Tag copy decisions"
              rows={[
                {
                  copy: (
                    <>
                      <strong>Install your Google tag</strong> — The global
                      site tag works in unison with another piece of code, an
                      event snippet, to track your conversions. To streamline
                      your experience with using this website code across
                      products, you can use the global site tag to track your
                      conversions. This tag should be installed on every page
                      of your website. Learn more about tags
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Too wordy and repetitive; confusing explanation of relationship between global tag and event snippets',
                },
                {
                  copy: (
                    <>
                      <strong>Your tag</strong> — Works with your Google Tag to
                      track conversions. Create your Google Tag first to get this
                      code.
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Too brief and vague; inconsistent terminology (Google Tag vs Your Tag); unclear purpose',
                },
                {
                  copy: (
                    <>
                      <strong>Activate measurement with a Google tag</strong> —
                      A Google tag allows you to measure activity on your
                      website. You need to do this before individual event
                      snippets can start measuring conversions.
                    </>
                  ),
                  status: <strong>Final</strong>,
                  decision:
                    'Clear, concise explanation of purpose; establishes proper sequence (Google tag before event snippets); action-oriented language',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              title="Event snippet copy decisions"
              rows={[
                {
                  copy: (
                    <>
                      <strong>Event tracking</strong> — Works with your Google
                      Tag to track conversions. Create your Google Tag first to
                      get this code.
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Too technical and assumes prior knowledge; unclear relationship between Google Tag and event snippets',
                },
                {
                  copy: (
                    <>
                      <strong>Install your event snippets</strong> — Adding a
                      Google Ads event snippet ensures precise tracking of user
                      actions, such as form submissions or purchases, by firing
                      a JavaScript code when these events occur. This data is
                      sent to Google Ads for conversion tracking, enabling you
                      to attribute actions to campaigns, optimize bids, and use
                      features like Smart Bidding.
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'Overly technical explanation that overwhelmed users; too much detail for initial setup step',
                },
                {
                  copy: (
                    <>
                      <strong>
                        Measure each conversion with an event snippet
                      </strong>{' '}
                      — Event snippets measure and help optimize your
                      campaign&apos;s performance based on your website
                      conversion goals. You need to set up an event snippet for
                      each conversion.
                    </>
                  ),
                  status: <strong>Final</strong>,
                  decision:
                    'Strikes balance between clarity and completeness; explains purpose without technical jargon; actionable next step',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Learnings</h2>
            <p className={`${body} mt-3`}>
              The experiment worked. More people actually completed the
              conversion setup, and they did it correctly. When you make
              something less confusing, people can actually use it. We
              significantly improved conversion tracking accuracy and increased
              successful setup completion rates.
            </p>
            <p className={`${body} mt-4`}>
              This project reinforced several key insights:
            </p>
            <ul className={`${list} mt-3`}>
              <li>
                Meeting users in their natural workflow dramatically improves
                adoption
              </li>
              <li>
                Technical processes can be made approachable through thoughtful
                content design
              </li>
              <li>
                Small language changes—like simplified CTAs—can have outsized
                impact
              </li>
            </ul>
            <p className={`${body} mt-4`}>
              Working with several different teams was tricky—everyone had
              opinions about what should be included. But keeping the focus on
              &apos;will this help someone who&apos;s never done this before?&apos;
              usually got us to the right answer.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}
