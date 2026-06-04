import { useEffect } from 'react';
import { CaseStudyLayout, caseStudyH2ClassName } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE =
  'Turning a confusing conversion change into a clear one — Kyle Stewart';

const bodyClassName =
  'font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]';

const imageClassName =
  'w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 object-contain';

const h3ClassName =
  'font-heading text-[#1a1a1a] text-lg font-normal leading-snug tracking-[1.2px] mb-4';

function StatusBadge({ status }: { status: 'Rejected' | 'Final' }) {
  if (status === 'Final') {
    return (
      <span className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold">
        Final
      </span>
    );
  }
  return (
    <span className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs">
      Rejected
    </span>
  );
}

export function ConversionGoalUpdates() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => { document.title = 'Kyle Stewart — Portfolio'; };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-10 lg:py-20">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-heading text-gray-700 text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Turning a confusing conversion change into a clear one
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
                Senior Content Designer
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
              src="/images/case-studies/conversion-goal-updates/laptop.png"
              alt="Conversion updates tool on laptop"
              loading="lazy"
              className={`${imageClassName} rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Ahead of an analytics platform update, advertisers needed to
              update their conversion goals—a critical part of their paid ad
              campaigns. The migration created duplicate conversion actions that
              needed cleanup, directly affecting their ad spend.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I led UX content design and messaging strategy to walk users
              through each step clearly, ensuring they understood exactly how
              their campaigns would be affected.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <h2 className={caseStudyH2ClassName}>Our design principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Be upfront about potential changes–both positive and negative.
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Automate where possible and break tasks into manageable steps.
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Be honest about trade-offs, both the short-term pain and
                  long-term benefits.
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Refining the content hierarchy
              </h2>
            </div>
            <img
              src="/images/case-studies/conversion-goal-updates/image.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The headlines from my partner&apos;s first iterations were
              technical, lacked action, and were filled with jargon. I wanted to
              understand what we were actually asking users to do and how they
              thought about it.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              The main headline from PM mocks captured the user&apos;s directive:
              &quot;Update your goals from Universal Analytics conversions to
              Google Analytics 4 conversions.&quot; Technically correct, but way
              too complicated.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/conversion-goal-updates/image-1.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              After digging through past research and talking with our research
              team, I reframed this as a &quot;switch&quot; to new analytics.
              Research backed this up. The language change aligned better with
              how advertisers think and reduced hesitation in testing.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <h3 className={h3ClassName}>Headline copy decisions</h3>
            <div
              role="table"
              aria-label="Headline copy decisions"
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-mono"
            >
              <div className="hidden md:block">
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="columnheader" className="text-xs leading-[15.6px] font-bold">Proposed copy</div>
                  <div role="columnheader" className="text-xs leading-[15.6px] font-bold">Status</div>
                  <div role="columnheader" className="text-xs leading-[15.6px] font-bold">Design decision</div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Update your goals from Universal Analytics conversions to Google Analytics 4 conversions
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Way too much jargon; assumed users knew the relationship between goals and conversions; overly detailed for a headline
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Change your Universal Analytics conversions to Google Analytics 4 conversions
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Redundant wording (&quot;conversions to conversions&quot;); unclear what type of change was needed
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                  <div role="cell" className="text-xs leading-[15.6px] font-bold">
                    Switch to Google Analytics 4 conversions
                  </div>
                  <div role="cell"><StatusBadge status="Final" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Simple, clear action; focused on the action rather than details; switch matches mental model
                  </div>
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Update your goals from Universal Analytics conversions to Google Analytics 4 conversions
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Way too much jargon; assumed users knew the relationship between goals and conversions; overly detailed for a headline
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Change your Universal Analytics conversions to Google Analytics 4 conversions
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Redundant wording (&quot;conversions to conversions&quot;); unclear what type of change was needed
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Switch to Google Analytics 4 conversions
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Simple, clear action; focused on the action rather than details; switch matches mental model
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Working with PM and design, I found more opportunities to clean
              things up. I cut redundant explanations and focused on what
              advertisers needed to know.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/conversion-goal-updates/image-2.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              As we neared launch, I worked with help content teams to spot
              remaining knowledge gaps. We added tool tips and consolidated help
              resources to give people answers without overwhelming them.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              From manual guide to automated recommendation
            </h2>
            <p className={bodyClassName}>
              Product management initially wanted users to handle updates
              manually, requiring us to share extensive information upfront. The
              thinking was that more information would help people feel
              confident making changes themselves, but this meant the user need
              to go through 6 different screens.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-5.png"
              alt="Early iteration of the complete user flow across 6 screens"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The biggest headache was the individual conversion updates. We
              showed users a table with all their conversions and dropdown menus
              to switch between &quot;Primary&quot; and &quot;Secondary&quot;
              settings. It felt comprehensive, but was actually a mess.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              My first iteration replaced generic drop-downs with clearer actions
              like &quot;Switch&quot; and &quot;Change to primary.&quot; I
              wanted to carry the language we used elsewhere and connect
              directly to the user&apos;s mental model.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              After putting this iteration in front of users, we heard something
              different. In roundtables, advertisers said this approach felt
              overwhelming and created decision paralysis. More options
              didn&apos;t mean more confidence.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              Taking in this feedback, I explored how to build confidence while
              reducing cognitive load. To do some of the heavy lifting, I
              explored automation. The change was straightforward: old
              conversions become secondary, new ones become primary.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I mocked up a two-column layout displaying current settings
              alongside recommended changes, giving users clear visibility into
              exactly what would change before committing.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <h3 className={h3ClassName}>Action / CTA decisions</h3>
            <div
              role="table"
              aria-label="Action and CTA decisions"
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-mono"
            >
              <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_2fr] gap-4">
                <div className="text-xs leading-[15.6px] font-bold">Action or CTA</div>
                <div className="text-xs leading-[15.6px] font-bold">Status</div>
                <div className="text-xs leading-[15.6px] font-bold">Design decision</div>
                <div className="text-xs leading-[15.6px]">Dropdown</div>
                <div><StatusBadge status="Rejected" /></div>
                <div className="text-xs leading-[15.6px]">
                  Generic dropdown to change &quot;Primary&quot; to
                  &quot;Secondary&quot; didn&apos;t provide enough context about
                  what users were actually changing. Felt too vague for such a
                  critical migration task.
                </div>
                <div className="text-xs leading-[15.6px]">
                  &quot;Switch,&quot; &quot;Change to secondary,&quot; and
                  &quot;Change to primary&quot;
                </div>
                <div><StatusBadge status="Rejected" /></div>
                <div className="text-xs leading-[15.6px]">
                  More specific CTAs actually increased cognitive load. Users
                  said this approach felt overwhelming and created decision
                  paralysis.
                </div>
                <div className="text-xs leading-[15.6px] font-bold">
                  Switch to Google Analytics 4 conversions
                </div>
                <div><StatusBadge status="Final" /></div>
                <div className="text-xs leading-[15.6px]">
                  Shifted to automated recommendations with review-based
                  language. Users could see exactly what would change before
                  approving, dramatically reducing cognitive load while
                  maintaining transparency.
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">Dropdown</p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Generic dropdown to change &quot;Primary&quot; to
                    &quot;Secondary&quot; didn&apos;t provide enough context
                    about what users were actually changing. Felt too vague for
                    such a critical migration task.
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    &quot;Switch,&quot; &quot;Change to secondary,&quot; and
                    &quot;Change to primary&quot;
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    More specific CTAs actually increased cognitive load. Users
                    said this approach felt overwhelming and created decision
                    paralysis.
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Switch to Google Analytics 4 conversions
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Shifted to automated recommendations with review-based
                    language. Users could see exactly what would change before
                    approving, dramatically reducing cognitive load while
                    maintaining transparency.
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              After validating this with engineering, I spotted another
              opportunity. While working on performance warnings, I realized we
              were asking people to approve changes without showing the
              potential impact upfront.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I made a mockup of how to share performance fluctuations on the
              review and update page. I shared updates with my design partner,
              and we presented the proposal to our product and engineering
              partners.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/conversion-goal-updates/image-3.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              When we talked to engineering about moving these warnings earlier
              in the flow, they pointed out something helpful: since we were now
              generating recommendations automatically, we could also calculate
              and show the performance impact before users made any decisions.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              Why were we making people figure this out manually when we could
              automate it?
            </p>
            <p className={`${bodyClassName} mt-6`}>
              We flipped the entire approach. Instead of &quot;here&apos;s a
              complex table, and you need to make changes,&quot; it became
              &quot;here&apos;s our recommendations–does this look right?&quot;
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-hero.png"
              alt="Final user flow for updating conversion goals across 3 screens"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The result was a dramatic reduction in cognitive load while
              maintaining full transparency—users could see exactly what would
              change and why, then approve updates with confidence in a fraction
              of the time.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Challenging language precedent
            </h2>
            <p className={bodyClassName}>
              While working on this experience, I kept two things in balance.
              What did people need to know, and what kind of urgency did we want
              to create?
            </p>
            <p className={`${bodyClassName} mt-6`}>
              The in-product notification and sub-header copy became just as
              important as the flow itself. They had to communicate both urgency
              and confidence–in a tone that matched their user&apos;s mental
              model.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Getting users to take action with notifications
              </h2>
            </div>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-7.png"
              alt="In-product notification for conversion goal updates"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div
              role="table"
              aria-label="Notification copy decisions"
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-mono"
            >
              <div className="hidden md:grid md:grid-cols-[2.5fr_1fr_1.5fr] gap-4">
                <div className="text-xs leading-[15.6px] font-bold">Proposed copy</div>
                <div className="text-xs leading-[15.6px] font-bold">Status</div>
                <div className="text-xs leading-[15.6px] font-bold">Design decision</div>
                <div className="text-xs leading-[15.6px]">
                  Failing to migrate to Google Analytics 4 will leave your
                  campaigns vulnerable to inaccurate data, ineffective bidding
                  and lost revenue opportunities.
                </div>
                <div><StatusBadge status="Rejected" /></div>
                <div className="text-xs leading-[15.6px]">
                  Fear-based messaging that focused on negatives; could create
                  anxiety rather than motivation to act
                </div>
                <div className="text-xs leading-[15.6px]">
                  Migrating to Google Analytics 4 ensures your campaigns remain
                  functional and your data stays accurate as Universal Analytics
                  phases out.
                </div>
                <div><StatusBadge status="Rejected" /></div>
                <div className="text-xs leading-[15.6px]">
                  Vague messaging without clear urgency; didn&apos;t specify
                  timeline or actionable next steps
                </div>
                <div className="text-xs leading-[15.6px] font-bold">
                  Switch to Google Analytics 4 conversions. Make the changes now
                  to ensure you have enough historical data when Universal
                  Analytics stops collecting data on July 1, 2023.
                </div>
                <div><StatusBadge status="Final" /></div>
                <div className="text-xs leading-[15.6px]">
                  Clear call-to-action with specific deadline; emphasizes
                  proactive benefit (historical data) rather than fear; includes
                  concrete date for urgency
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Failing to migrate to Google Analytics 4 will leave your
                    campaigns vulnerable to inaccurate data, ineffective bidding
                    and lost revenue opportunities.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Fear-based messaging that focused on negatives; could create
                    anxiety rather than motivation to act
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Migrating to Google Analytics 4 ensures your campaigns
                    remain functional and your data stays accurate as Universal
                    Analytics phases out.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Vague messaging without clear urgency; didn&apos;t specify
                    timeline or actionable next steps
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Switch to Google Analytics 4 conversions. Make the changes
                    now to ensure you have enough historical data when Universal
                    Analytics stops collecting data on July 1, 2023.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Clear call-to-action with specific deadline; emphasizes
                    proactive benefit (historical data) rather than fear;
                    includes concrete date for urgency
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Giving users more context with subheaders
              </h2>
            </div>
            <img
              src="/images/case-studies/conversion-goal-updates/cgu-8.png"
              alt="Subheader copy for conversion updates context"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div
              role="table"
              aria-label="Sub-header copy decisions"
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-mono"
            >
              <div className="hidden md:grid md:grid-cols-[2.5fr_1fr_1.5fr] gap-4">
                <div className="text-xs leading-[15.6px] font-bold">Proposed copy</div>
                <div className="text-xs leading-[15.6px] font-bold">Status</div>
                <div className="text-xs leading-[15.6px] font-bold">Design decision</div>
                <div className="text-xs leading-[15.6px]">
                  Universal Analytics (360) will cease data collection on July
                  1, 2024 and Universal Analytics on August 2024. You will need
                  to migrate your primary conversions from the legacy Universal
                  Analytics to the new Google Analytics 4. Your primary
                  conversion actions for automated bidding from Universal
                  Analytics will be superseded by Google Analytics 4 conversions.
                  After you save these changes, you should expect potential
                  performance fluctuations over 2 to 3 learning cycles.
                </div>
                <div><StatusBadge status="Rejected" /></div>
                <div className="text-xs leading-[15.6px]">
                  Too technical and lengthy; mixed terminology between different
                  analytics platforms; unclear timeline expectations
                </div>
                <div className="text-xs leading-[15.6px] font-bold">
                  Since Universal Analytics will stop collecting data in July
                  2023, we&apos;ve recommended new conversion optimization
                  settings. Your primary conversion actions for bid optimization
                  from Universal Analytics will be replaced with ones from
                  Google Analytics 4. After saving, you may see temporary
                  performance changes as the system learns for 1–2 weeks.
                </div>
                <div><StatusBadge status="Final" /></div>
                <div className="text-xs leading-[15.6px]">
                  Clear, concise messaging; consistent platform naming; specific
                  timeline that users can understand; positions change as helpful
                  recommendation. With the hindsight of 2+ years working this
                  space, I now see areas of improvement… such is the life of a
                  writer.
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Universal Analytics (360) will cease data collection on July
                    1, 2024 and Universal Analytics on August 2024. You will need
                    to migrate your primary conversions from the legacy Universal
                    Analytics to the new Google Analytics 4. Your primary
                    conversion actions for automated bidding from Universal
                    Analytics will be superseded by Google Analytics 4
                    conversions. After you save these changes, you should expect
                    potential performance fluctuations over 2 to 3 learning
                    cycles.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Too technical and lengthy; mixed terminology between
                    different analytics platforms; unclear timeline expectations
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2 font-bold">
                    Since Universal Analytics will stop collecting data in July
                    2023, we&apos;ve recommended new conversion optimization
                    settings. Your primary conversion actions for bid
                    optimization from Universal Analytics will be replaced with
                    ones from Google Analytics 4. After saving, you may see
                    temporary performance changes as the system learns for 1–2
                    weeks.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Clear, concise messaging; consistent platform naming;
                    specific timeline that users can understand; positions change
                    as helpful recommendation. With the hindsight of 2+ years
                    working this space, I now see areas of improvement… such is
                    the life of a writer.
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Learnings</h2>
            <p className={bodyClassName}>
              While specific user metrics remain confidential, the project
              received enthusiastic feedback from stakeholders for its clarity
              and usability improvements.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              This project solidified my role as a trusted content design
              partner and demonstrated my ability to influence product decisions
              through content strategy. By challenging assumptions and
              advocating for user needs, I helped transform a potentially
              disruptive requirement into a smooth transition that set
              advertisers up for success.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );
}
