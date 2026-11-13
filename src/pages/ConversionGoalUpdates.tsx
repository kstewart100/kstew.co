import {
  CaseStudyHero,
  CaseStudyLayout,
  CaseStudyMeta,
  CopyDecisionTable,
  documentCaseStudyBodyClassName,
  documentCaseStudyH2ClassName,
  documentCaseStudyImageClassName,
  documentCaseStudyImageShadowClassName,
  documentCaseStudyListClassName,
  documentCaseStudyTitleClassName,
} from '../components/CaseStudyLayout';
import { Footer } from '../components/Footer';
import { CaseStudyNav } from '../components/CaseStudyNav';

const layout = { variant: 'document' as const };
const body = documentCaseStudyBodyClassName;
const h2 = documentCaseStudyH2ClassName;
const img = documentCaseStudyImageClassName;
const imgShadow = documentCaseStudyImageShadowClassName;
const list = documentCaseStudyListClassName;

export function ConversionGoalUpdates() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-color-bg-canvas pt-[var(--site-header-height)]">
      <main id="main-content" className="flex-1 pt-8 pb-16 lg:pt-10 lg:pb-24">
          <div className="space-y-10 md:space-y-12 mb-24 lg:mb-32">
            <CaseStudyHero
              src="/images/case-studies/conversion-goal-updates/laptop.png"
              alt="Conversion updates tool on laptop"
            />

            <CaseStudyLayout {...layout}>
              <h1 className={documentCaseStudyTitleClassName}>
                Turning a migration chore into a clear yes
              </h1>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                Ahead of an analytics platform update, advertisers needed to
                switch their conversion goals to a new platform. Those goals tell
                automated bidding what to optimize for, so they shape how campaigns
                spend money.
              </p>
              <p className={`${body} mt-6`}>
                Switching analytics platforms created duplicate conversion actions
                in Google Ads. Advertisers who didn&apos;t clean them up risked
                bidding on inaccurate data, which could mean wasted spend and lost
                revenue. Advertisers who waited also risked not building up enough
                data on the new platform before the old one shut down. For large
                accounts, those errors added up fast.
              </p>
              <p className={`${body} mt-6`}>
                I led the content design to clearly walk advertisers through each
                step, so they understood exactly how their campaigns would be
                affected.
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
                  Be upfront about potential changes—both positive and negative
                </li>
                <li>
                  Automate where possible and break tasks into manageable steps
                </li>
                <li>
                  Be honest about trade-offs, both the short-term pain and
                  long-term benefits
                </li>
              </ul>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Refining content hierarchy</h2>
            </CaseStudyLayout>

            <CaseStudyLayout
              {...layout}
              caption="First iteration with content from my design partner."
            >
              <img
                src="/images/case-studies/conversion-goal-updates/image.png"
                alt="First iteration of conversion goal updates with design-partner content"
                loading="lazy"
                className={imgShadow}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                The headlines from my partner&apos;s first iterations were
                technical, lacked action, and were filled with jargon. I wanted to
                understand what we were actually asking advertisers to do and how
                they thought about it.
              </p>
              <p className={`${body} mt-6`}>
                The main headline from PM mockups captured the directive:
                &ldquo;Update your goals from Universal Analytics conversions to
                Google Analytics 4 conversions.&rdquo; Technically correct, but way
                too complicated.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout
              {...layout}
              caption="Second iteration outlining the exact tasks advertisers need to complete."
            >
              <img
                src="/images/case-studies/conversion-goal-updates/image-1.png"
                alt="Second iteration outlining the tasks advertisers need to complete"
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
                      'Way too much jargon; assumed advertisers knew the relationship between goals and conversions; overly detailed for a headline',
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
              <p className={`${body} mt-6`}>
                As we neared launch, I worked with help content teams to spot
                remaining knowledge gaps. We added tooltips and consolidated help
                resources to give people answers without overwhelming them.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>From manual guide to automated recommendation</h2>
              <p className={`${body} mt-6`}>
                Product management initially wanted advertisers to handle updates
                manually, requiring us to share extensive information upfront. The
                thinking was that more information would help people feel confident
                making changes themselves, but this meant the advertiser needed to
                go through six different screens.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <img
                src="/images/case-studies/conversion-goal-updates/cgu-5.gif"
                alt="Early iteration of the complete user flow across 6 screens"
                loading="lazy"
                className={img}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                The biggest headache was the individual conversion updates. We
                showed advertisers a table with all their conversions and dropdown
                menus to switch between &ldquo;Primary&rdquo; and
                &ldquo;Secondary&rdquo; settings. It felt comprehensive, but was
                actually a mess.
              </p>
              <p className={`${body} mt-6`}>
                My first iteration replaced generic drop-downs with clearer actions
                like &ldquo;Switch&rdquo; and &ldquo;Change to primary.&rdquo; I
                wanted to carry the language we used elsewhere and connect directly
                to the user&apos;s mental model.
              </p>
              <p className={`${body} mt-6`}>
                After putting this iteration in front of advertisers, we heard
                something different. Clearer CTAs still left them deciding Primary
                vs. Secondary for every conversion. In roundtables they
                stalled—more labeled choices didn&apos;t make them more sure.
              </p>
              <p className={`${body} mt-6`}>
                So I stopped asking them to make the change row by row. The rule
                was simple: old conversions become secondary, new ones become
                primary. Content&apos;s job shifted from &ldquo;pick an
                action&rdquo; to &ldquo;does this look right?&rdquo;
              </p>
              <p className={`${body} mt-6`}>
                I mocked a two-column review: current settings next to recommended
                changes, so advertisers could see exactly what would change before
                committing.
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
                      'Generic dropdown to change "Primary" to "Secondary" didn\'t provide enough context about what advertisers were actually changing. Felt too vague for such a critical migration task.',
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
                      'Clearer action labels still left a row-by-row Primary/Secondary decision. Advertisers stalled; more options didn\'t mean more confidence.',
                  },
                  {
                    copy: '\u201cSave\u201d',
                    status: 'Final',
                    decision:
                      'Automated recommendations with review language. Advertisers saw what would change, then approved—instead of flipping each setting themselves.',
                  },
                ]}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                After confirming with engineering that this change was possible, I
                spotted another opportunity. While working on performance warnings,
                I realized we were asking people to approve changes without seeing
                their potential impact first.
              </p>
              <p className={`${body} mt-6`}>
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
                and show the performance impact before advertisers made any
                decisions.
              </p>
              <p className={`${body} mt-6`}>
                Why were we making people figure this out manually when we could
                automate it?
              </p>
              <p className={`${body} mt-6`}>
                We flipped the entire approach. Instead of &ldquo;here&apos;s a
                complex table, and you need to make changes,&rdquo; it became
                &ldquo;here&apos;s a recommendation—does this look right?&rdquo;
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <img
                src="/images/case-studies/conversion-goal-updates/cgu-hero.gif"
                alt="Final user flow for updating conversion goals across 3 screens"
                loading="lazy"
                className={img}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <p className={body}>
                Instead of a table of manual updates, advertisers got a
                recommendation they could check and approve. Same transparency, far
                less work at the moment of change.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Challenging language precedent</h2>
              <p className={`${body} mt-6`}>
                While working on this experience, I kept two things in balance.
                What did people need to know, and what kind of urgency did we want
                to create?
              </p>
              <p className={`${body} mt-6`}>
                The in-product notification and sub-header copy became just as
                important as the flow itself. They had to communicate both urgency
                and confidence—in a tone that matched advertisers&apos; mental
                models.
              </p>
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>
                Getting advertisers to take action with notifications
              </h2>
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
              <h2 className={h2}>
                Giving advertisers more context with sub-headers
              </h2>
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
                    copy: 'Universal Analytics (360) will cease data collection on July 1, 2023 and Universal Analytics on July 1, 2023. You will need to migrate your primary conversions from the legacy Universal Analytics to the new Google Analytics 4. Your primary conversion actions for automated bidding from Universal Analytics will be superseded by Google Analytics 4 conversions. After you save these changes, you should expect potential performance fluctuations over 2 to 3 learning cycles.',
                    status: 'Rejected',
                    decision:
                      'Too technical and lengthy; mixed terminology between different analytics platforms; unclear timeline expectations',
                  },
                  {
                    copy:
                      "Since Universal Analytics will stop collecting data in July 2023, we've recommended new conversion optimization settings. Your primary conversion actions for bid optimization from Universal Analytics will be replaced with ones from Google Analytics 4. After saving, you may see temporary performance changes as the system learns for 1–2 weeks.",
                    status: 'Final',
                    decision:
                      'Clear, concise messaging; consistent platform naming; specific timeline that advertiser can understand; positions change as helpful recommendation. With the hindsight of 2+ years working this space, I now see areas of improvement… such is the life of a writer.',
                  },
                ]}
              />
            </CaseStudyLayout>

            <CaseStudyLayout {...layout}>
              <h2 className={h2}>Learnings</h2>
              <p className={`${body} mt-6`}>
                We cut the flow from six screens of manual updates to a shorter
                path: review the recommendation, then approve. Advertisers could
                see what would change before they committed—instead of flipping
                each setting themselves.
              </p>
              <p className={`${body} mt-6`}>
                Content didn&apos;t just label the chore. It reframed the job from
                &ldquo;change every conversion&rdquo; to &ldquo;does this look
                right?&rdquo;
              </p>
            </CaseStudyLayout>
            <CaseStudyNav />
          </div>
      </main>
      <Footer />
    </div>
  );
}
