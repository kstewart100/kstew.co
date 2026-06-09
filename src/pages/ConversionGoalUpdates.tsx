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

export function ConversionGoalUpdates() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-8 lg:py-12">
        <div className="space-y-6 mb-16 lg:mb-24">
          <CaseStudyLayout {...layout}>
            <h1 className={documentCaseStudyTitleClassName}>
              Turning a confusing conversion change into a clear one
            </h1>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              <strong>Company:</strong> Google, Google Ads
            </p>
            <p className={`${body} mt-0`}>
              <strong>Role:</strong> Senior Content Designer
            </p>
            <p className={`${body} mt-0`}>
              <strong>Team:</strong> UX Designers, Product Managers, Software
              Engineers, and Program Managers
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/laptop.png"
              alt="Conversion updates tool on laptop"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Ahead of an analytics platform update, advertisers needed to
              update their conversion goals—a critical part of their paid ad
              campaigns. The migration created duplicate conversion actions that
              needed cleanup, directly affecting their ad spend.
            </p>
            <p className={`${body} mt-4`}>
              I led UX content design and messaging strategy to walk users
              through each step clearly, ensuring they understood exactly how
              their campaigns would be affected.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Our design principles</h2>
            <ul className={`${list} mt-3`}>
              <li>
                <strong>
                  Be upfront about potential changes–both positive and negative.
                </strong>
              </li>
              <li>
                <strong>
                  Automate where possible and break tasks into manageable steps.
                </strong>
              </li>
              <li>
                <strong>
                  Be honest about trade-offs, both the short-term pain and
                  long-term benefits.
                </strong>
              </li>
            </ul>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Refining the content hierarchy</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/image.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The headlines from my partner&apos;s first iterations were
              technical, lacked action, and were filled with jargon. I wanted to
              understand what we were actually asking users to do and how they
              thought about it.
            </p>
            <p className={`${body} mt-4`}>
              The main headline from PM mocks captured the user&apos;s directive:
              &ldquo;Update your goals from Universal Analytics conversions to
              Google Analytics 4 conversions.&rdquo; Technically correct, but way
              too complicated.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/image-1.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              After digging through past research and talking with our research
              team, I reframed this as a &ldquo;switch&rdquo; to new analytics.
              Research backed this up. The language change aligned better with
              how advertisers think and reduced hesitation in testing.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              title="Headline copy decisions"
              rows={[
                {
                  copy: 'Update your goals from Universal Analytics conversions to Google Analytics 4 conversions',
                  status: 'Rejected',
                  decision:
                    'Way too much jargon; assumed users knew the relationship between goals and conversions; overly detailed for a headline',
                },
                {
                  copy: 'Change your Universal Analytics conversions to Google Analytics 4 conversions',
                  status: 'Rejected',
                  decision:
                    'Redundant wording ("conversions to conversions"); unclear what type of change was needed',
                },
                {
                  copy: 'Switch to Google Analytics 4 conversions',
                  status: 'Final',
                  decision:
                    'Simple, clear action; focused on the action rather than details; switch matches mental model',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Working with PM and design, I found more opportunities to clean
              things up. I cut redundant explanations and focused on what
              advertisers needed to know.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/image-2.png"
              alt=""
              loading="lazy"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              As we neared launch, I worked with help content teams to spot
              remaining knowledge gaps. We added tool tips and consolidated help
              resources to give people answers without overwhelming them.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>From manual guide to automated recommendation</h2>
            <p className={`${body} mt-3`}>
              Product management initially wanted users to handle updates
              manually, requiring us to share extensive information upfront. The
              thinking was that more information would help people feel confident
              making changes themselves, but this meant the user need to go
              through 6 different screens.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-5.png"
              alt="Early iteration of the complete user flow across 6 screens"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The biggest headache was the individual conversion updates. We
              showed users a table with all their conversions and dropdown menus
              to switch between &ldquo;Primary&rdquo; and &ldquo;Secondary&rdquo;
              settings. It felt comprehensive, but was actually a mess.
            </p>
            <p className={`${body} mt-4`}>
              My first iteration replaced generic drop-downs with clearer actions
              like &ldquo;Switch&rdquo; and &ldquo;Change to primary.&rdquo; I
              wanted to carry the language we used elsewhere and connect directly
              to the user&apos;s mental model.
            </p>
            <p className={`${body} mt-4`}>
              After putting this iteration in front of users, we heard something
              different. In roundtables, advertisers said this approach felt
              overwhelming and created decision paralysis. More options
              didn&apos;t mean more confidence.
            </p>
            <p className={`${body} mt-4`}>
              Taking in this feedback, I explored how to build confidence while
              reducing cognitive load. To do some of the heavy lifting, I
              explored automation. The change was straightforward: old conversions
              become secondary, new ones become primary.
            </p>
            <p className={`${body} mt-4`}>
              I mocked up a two-column layout displaying current settings
              alongside recommended changes, giving users clear visibility into
              exactly what would change before committing.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              title="Action / CTA decisions"
              copyColumnLabel="Action or CTA"
              rows={[
                {
                  copy: 'Dropdown',
                  status: 'Rejected',
                  decision:
                    'Generic dropdown to change "Primary" to "Secondary" didn\'t provide enough context about what users were actually changing. Felt too vague for such a critical migration task.',
                },
                {
                  copy: (
                    <>
                      &ldquo;Switch,&rdquo; &ldquo;Change to secondary,&rdquo;
                      and &ldquo;Change to primary&rdquo;
                    </>
                  ),
                  status: 'Rejected',
                  decision:
                    'More specific CTAs actually increased cognitive load. Users said this approach felt overwhelming and created decision paralysis.',
                },
                {
                  copy: 'Save',
                  status: 'Final',
                  decision:
                    'Shifted to automated recommendations with review-based language. Users could see exactly what would change before approving, dramatically reducing cognitive load while maintaining transparency.',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              After validating this with engineering, I spotted another
              opportunity. While working on performance warnings, I realized we
              were asking people to approve changes without showing the potential
              impact upfront.
            </p>
            <p className={`${body} mt-4`}>
              I made a mockup of how to share performance fluctuations on the
              review and update page. I shared updates with my design partner,
              and we presented the proposal to our product and engineering
              partners.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/image-3.png"
              alt=""
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              When we talked to engineering about moving these warnings earlier in
              the flow, they pointed out something helpful: since we were now
              generating recommendations automatically, we could also calculate
              and show the performance impact before users made any decisions.
            </p>
            <p className={`${body} mt-4`}>
              Why were we making people figure this out manually when we could
              automate it?
            </p>
            <p className={`${body} mt-4`}>
              We flipped the entire approach. Instead of &ldquo;here&apos;s a
              complex table, and you need to make changes,&rdquo; it became
              &ldquo;here&apos;s our recommendations–does this look right?&rdquo;
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-hero.png"
              alt="Final user flow for updating conversion goals across 3 screens"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The result was a dramatic reduction in cognitive load while
              maintaining full transparency—users could see exactly what would
              change and why, then approve updates with confidence in a fraction
              of the time.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Challenging language precedent</h2>
            <p className={`${body} mt-3`}>
              While working on this experience, I kept two things in balance.
              What did people need to know, and what kind of urgency did we want
              to create?
            </p>
            <p className={`${body} mt-4`}>
              The in-product notification and sub-header copy became just as
              important as the flow itself. They had to communicate both urgency
              and confidence–in a tone that matched their user&apos;s mental
              model.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Getting users to take action with notifications</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-7.png"
              alt="In-product notification for conversion goal updates"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              rows={[
                {
                  copy: 'Failing to migrate to Google Analytics 4 will leave your campaigns vulnerable to inaccurate data, ineffective bidding and lost revenue opportunities.',
                  status: 'Rejected',
                  decision:
                    'Fear-based messaging that focused on negatives; could create anxiety rather than motivation to act',
                },
                {
                  copy: 'Migrating to Google Analytics 4 ensures your campaigns remain functional and your data stays accurate as Universal Analytics phases out.',
                  status: 'Rejected',
                  decision:
                    "Vague messaging without clear urgency; didn't specify timeline or actionable next steps",
                },
                {
                  copy:
                    'Switch to Google Analytics 4 conversions. Make the changes now to ensure you have enough historical data when Universal Analytics stops collecting data on July 1, 2023.',
                  status: 'Final',
                  decision:
                    'Clear call-to-action with specific deadline; emphasizes proactive benefit (historical data) rather than fear; includes concrete date for urgency',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Giving users more context with subheaders</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-8.png"
              alt="Subheader copy for conversion updates context"
              loading="lazy"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <CopyDecisionTable
              rows={[
                {
                  copy: 'Universal Analytics (360) will cease data collection on July 1, 2024 and Universal Analytics on August 2024. You will need to migrate your primary conversions from the legacy Universal Analytics to the new Google Analytics 4. Your primary conversion actions for automated bidding from Universal Analytics will be superseded by Google Analytics 4 conversions. After you save these changes, you should expect potential performance fluctuations over 2 to 3 learning cycles.',
                  status: 'Rejected',
                  decision:
                    'Too technical and lengthy; mixed terminology between different analytics platforms; unclear timeline expectations',
                },
                {
                  copy:
                    "Since Universal Analytics will stop collecting data in July 2023, we've recommended new conversion optimization settings. Your primary conversion actions for bid optimization from Universal Analytics will be replaced with ones from Google Analytics 4. After saving, you may see temporary performance changes as the system learns for 1–2 weeks.",
                  status: 'Final',
                  decision:
                    'Clear, concise messaging; consistent platform naming; specific timeline that users can understand; positions change as helpful recommendation. With the hindsight of 2+ years working this space, I now see areas of improvement… such is the life of a writer.',
                },
              ]}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Learnings</h2>
            <p className={`${body} mt-3`}>
              While specific user metrics remain confidential, the project
              received enthusiastic feedback from stakeholders for its clarity and
              usability improvements.
            </p>
            <p className={`${body} mt-4`}>
              This project solidified my role as a trusted content design partner
              and demonstrated my ability to influence product decisions through
              content strategy. By challenging assumptions and advocating for
              user needs, I helped transform a potentially disruptive
              requirement into a smooth transition that set advertisers up for
              success.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );
}
