import React, { lazy } from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function ConversionGoalUpdates() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EFF0F3]">
      <Header variant="case-study" />
      <main className="flex-1 bg-[#EFF0F3] text-[#1a1a1a] py-10 lg:py-20 font-['Lato']">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
          {/* Title Section */}
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-['DM_Sans'] text-gray-700 text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Conversion goal updates
            </h1>
          </CaseStudyLayout>
          {/* Hero Image */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed">
                The conversion updates tool lets advertisers view
                recommendations, make changes, and save updates without manually
                editing each conversion.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc3ab43fdbb1c4c6cbf8_Laptop.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]" />

          </CaseStudyLayout>
          {/* Intro Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Ahead of an analytics platform update, advertisers needed to
              update their conversion goals—a critical part of their paid ad
              campaigns. The migration created duplicate conversion actions that
              needed cleanup, directly affecting their ad spend.
              <br />
              <br />I led UX content design and messaging strategy to walk users
              through each step clearly, ensuring they understood exactly how
              their campaigns would be affected.
            </p>
          </CaseStudyLayout>
          {/* Metadata Grid */}
          <CaseStudyLayout maxWidth="734px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 border-t border-b border-[rgba(26,26,26,0.25)] py-5">
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-['DM_Sans'] p-4 md:p-5">
                <strong className="font-bold">Role</strong>
                <br />
                Senior Content Designer
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-['DM_Sans'] p-4 md:p-5">
                <strong className="font-bold">Team</strong>
                <br />
                UX Designers, Product Managers, Software Engineers, and Program
                Managers
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-['DM_Sans'] p-4 md:p-5">
                <strong className="font-bold">Company</strong>
                <br />
                Google, Google Ads
              </div>
            </div>
          </CaseStudyLayout>
          {/* H2 Design Principles */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Our design principles
            </h2>
          </CaseStudyLayout>
          {/* Three Principle Cards */}
          <CaseStudyLayout maxWidth="816px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              <div className="bg-[#8ECAE6] font-['DM_Sans'] min-h-[148px] text-base font-semibold leading-[25.6px] border-[3px] border-black/5 rounded-[5px] p-5">
                Be upfront about potential changes–both positive and negative.
              </div>
              <div className="bg-[#8ECAE6] font-['DM_Sans'] min-h-[148px] text-base font-semibold leading-[25.6px] border-[3px] border-black/5 rounded-[5px] p-5">
                Automate where possible and break tasks into manageable steps.
              </div>
              <div className="bg-[#8ECAE6] font-['DM_Sans'] min-h-[148px] text-base font-semibold leading-[25.6px] border-[3px] border-black/5 rounded-[5px] p-5">
                Be honest about trade-offs, both the short-term pain and
                long-term benefits.
              </div>
            </div>
          </CaseStudyLayout>
          {/* H2 Refining Content Hierarchy */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Refining the content hierarchy
            </h2>
          </CaseStudyLayout>
          {/* Image CGU 2 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                First draft iteration from design partner.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc4d17cc67389db35e74_CGU%202.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              The headlines from my partner&#39;s first iterations were
              technical, lacked action, and were filled with jargon. I wanted to
              understand what we were actually asking users to do and how they
              thought about it.
              <br />
              <br />
              The main headline from PM mocks captured the user&#39;s directive:
              &quot;Update your goals from Universal Analytics conversions to
              Google Analytics 4 conversions.&quot; Technically correct, but way
              too complicated.
            </p>
          </CaseStudyLayout>
          {/* Image CGU 3 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                Second iteration outlining exact tasks for advertisers to
                complete in the flow.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc56cfebde2e6c840aa2_CGU%203.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              After digging through past research and talking with our research
              team, I reframed this as a &quot;switch&quot; to new analytics.
              Research backed this up. The language change aligned better with
              how advertisers think and reduced hesitation in testing.
            </p>
          </CaseStudyLayout>
          {/* Decision Table 1 */}
          <CaseStudyLayout maxWidth="816px">
            <div
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-['JetBrains_Mono']">

              {/* Desktop Table */}
              <div className="hidden md:grid md:grid-cols-[2fr_1fr_2fr] gap-4">
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Proposed copy
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Status
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Design decision
                </div>
                {/* Row 1 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Update your goals from Universal Analytics conversions to
                  Google Analytics 4 conversions
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  - Way too much jargon
                  <br />- Assumed users knew the relationship between goals and
                  conversions
                  <br />- Overly detailed for a headline
                </div>
                {/* Row 2 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Change your Universal Analytics conversions to Google
                  Analytics 4 conversions
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  - Redundant wording (&quot;conversions to conversions&quot;)
                  <br />- unclear what type of change was needed
                </div>
                {/* Row 3 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Switch to Google Analytics 4 conversions
                </div>
                <div>
                  <span
                    className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                    Final
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  - Simple, clear action
                  <br />- Focused on the action rather than details
                  <br />- Switch matches mental model
                </div>
              </div>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Update your goals from Universal Analytics conversions to
                    Google Analytics 4 conversions
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    - Way too much jargon
                    <br />- Assumed users knew the relationship between goals
                    and conversions
                    <br />- Overly detailed for a headline
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Change your Universal Analytics conversions to Google
                    Analytics 4 conversions
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    - Redundant wording (&quot;conversions to conversions&quot;)
                    <br />- unclear what type of change was needed
                  </p>
                </div>
                <div>
                  <div className="mb-2">
                    <span
                      className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                      Final
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Switch to Google Analytics 4 conversions
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    - Simple, clear action
                    <br />- Focused on the action rather than details
                    <br />- Switch matches mental model
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              Working with PM and design, I found more opportunities to clean
              things up. I cut redundant explanations and focused on what
              advertisers needed to know.
            </p>
          </CaseStudyLayout>
          {/* Image CGU 4 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                Launched content with concrete information and headlines, CTAs,
                and interactions driving user actions.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecc65b6baa5dc9999e6c5_CGU%204.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              As we neared launch, I worked with help content teams to spot
              remaining knowledge gaps. We added tool tips and consolidated help
              resources to give people answers without overwhelming them.
            </p>
          </CaseStudyLayout>
          {/* H2 From Manual to Automated */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              From manual guide to automated recommendation
            </h2>
          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              Product management initially wanted users to handle updates
              manually, requiring us to share extensive information upfront. The
              thinking was that more information would help people feel
              confident making changes themselves.
            </p>
          </CaseStudyLayout>
          {/* Image CGU 5 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                Early iteration of the complete user flow for updating
                conversion goals across 6 screens.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd1eff1cf83b0eef755a_CGU%205.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Long Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              The biggest headache was the individual conversion updates. We
              showed users a table with all their conversions and dropdown menus
              to switch between &quot;Primary&quot; and &quot;Secondary&quot;
              settings. It felt comprehensive, but was actually a mess.
              <br />
              <br />
              My first iteration replaced generic dropdowns with clearer actions
              like &quot;Switch&quot; and &quot;Change to primary.&quot; I
              wanted to carry the language we used elsewhere and connect
              directly to the user&#39;s mental model.
              <br />
              <br />
              After putting this iteration in front of users, we heard something
              different. In roundtables, advertisers said this approach felt
              overwhelming and created decision paralysis. More options
              didn&#39;t mean more confidence.
              <br />
              <br />
              Taking in this feedback, I explored how to build confidence while
              reducing cognitive load. To do some of the heavy lifting, I
              explored automation. The change was straightforward: old
              conversions become secondary, new ones become primary.
              <br />
              <br />I mocked up a two-column layout displaying current settings
              alongside recommended changes, giving users clear visibility into
              exactly what would change before committing.
            </p>
          </CaseStudyLayout>
          {/* Decision Table 2 */}
          <CaseStudyLayout maxWidth="816px">
            <div
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-['JetBrains_Mono']">

              {/* Desktop Table */}
              <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_2fr] gap-4">
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Action or CTA
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Status
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Design decision
                </div>
                {/* Row 1 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Dropdown
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Generic dropdown to change &quot;Primary&quot; to
                  &quot;Secondary&quot; didn&#39;t provide enough context about
                  what users were actually changing. Felt too vague for such a
                  critical migration task.
                </div>
                {/* Row 2 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  &quot;Switch,&quot; &quot;Change to secondary,&quot; and
                  &quot;Change to primary&quot;
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  More specific CTAs like &quot;Switch,&quot; &quot;Change to
                  secondary,&quot; and &quot;Change to primary&quot; actually
                  increased cognitive load.
                  <br />
                  <br />
                  Users said this approach felt overwhelming and created
                  decision paralysis.
                </div>
                {/* Row 3 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Switch to Google Analytics 4 conversions
                </div>
                <div>
                  <span
                    className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                    Final
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Shifted to automated recommendations with review-based
                  language. Users could see exactly what would change before
                  approving, dramatically reducing cognitive load while
                  maintaining transparency.
                </div>
              </div>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Dropdown
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Generic dropdown to change &quot;Primary&quot; to
                    &quot;Secondary&quot; didn&#39;t provide enough context
                    about what users were actually changing. Felt too vague for
                    such a critical migration task.
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    &quot;Switch,&quot; &quot;Change to secondary,&quot; and
                    &quot;Change to primary&quot;
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    More specific CTAs like &quot;Switch,&quot; &quot;Change to
                    secondary,&quot; and &quot;Change to primary&quot; actually
                    increased cognitive load. Users said this approach felt
                    overwhelming and created decision paralysis.
                  </p>
                </div>
                <div>
                  <div className="mb-2">
                    <span
                      className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                      Final
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Switch to Google Analytics 4 conversions
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Shifted to automated recommendations with review-based
                    language. Users could see exactly what would change before
                    approving, dramatically reducing cognitive load while
                    maintaining transparency.
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              After validating this with engineering, I spotted another
              opportunity. While working on performance warnings, I realized we
              were asking people to approve changes without showing the
              potential impact upfront.
              <br />
              <br />I made a mockup of how to share performance fluctuations on
              the review and update page. I shared updates with my design
              partner, and we presented the proposal to our product and
              engineering partners.
            </p>
          </CaseStudyLayout>
          {/* Image CGU 6 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                Performance fluctuation communication explorations showing table
                format (left) and dialog format (right).
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd0fb43fdbb1c4c70194_CGU%206.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              When we talked to engineering about moving these warnings earlier
              in the flow, they pointed out something helpful: since we were now
              generating recommendations automatically, we could also calculate
              and show the performance impact before users made any decisions.
              <br />
              <br />
              Why were we making people figure this out manually when we could
              automate it?
              <br />
              <br />
              We flipped the entire approach. Instead of &quot;here&#39;s a
              complex table, and you need to make changes,&quot; it became
              &quot;here&#39;s our recommendations–does this look right?&quot;
            </p>
          </CaseStudyLayout>
          {/* Image CGU Hero */}
          <CaseStudyLayout
            maxWidth="816px"
            caption={
            <p
              className="font-['JetBrains_Mono'] text-gray-600 text-xs font-normal leading-relaxed"
>

                Final user flow for updating conversion goals across 3 screens.
              </p>
            }>

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ece43c2cd6050d290c412_CGU%20hero.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              The result was a dramatic reduction in cognitive load while
              maintaining full transparency—users could see exactly what would
              change and why, then approve updates with confidence in a fraction
              of the time.
            </p>
          </CaseStudyLayout>
          {/* H2 Challenging Language */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Challenging language precedent
            </h2>
          </CaseStudyLayout>
          {/* Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              While working on this experience, I kept two things in balance.
              What did people need to know, and what kind of urgency did we want
              to create?
              <br />
              <br />
              The in-product notification and subheader copy became just as
              important as the flow itself. They had to communicate both urgency
              and confidence–in a tone that matched their user&#39;s mental
              model.
            </p>
          </CaseStudyLayout>
          {/* H2 Getting Users to Take Action */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Getting users to take action with notifications
            </h2>
          </CaseStudyLayout>
          {/* Image CGU 7 */}
          <CaseStudyLayout maxWidth="816px">
            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd58b43fdbb1c4c7213c_CGU%207.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Decision Table 3 */}
          <CaseStudyLayout maxWidth="816px">
            <div
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-['JetBrains_Mono']">

              {/* Desktop Table */}
              <div className="hidden md:grid md:grid-cols-[2.5fr_1fr_1.5fr] gap-4">
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Proposed copy
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Status
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Design decision
                </div>
                {/* Row 1 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Failing to migrate to Google Analytics 4 will leave your
                  campaigns vulnerable to inaccurate data, ineffective bidding
                  and lost revenue opportunities.
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Fear-based messaging that focused on negatives; could create
                  anxiety rather than motivation to act
                </div>
                {/* Row 2 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Migrating to Google Analytics 4 ensures your campaigns remain
                  functional and your data stays accurate as Universal Analytics
                  phases out.
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Vague messaging without clear urgency; didn&#39;t specify
                  timeline or actionable next steps
                </div>
                {/* Row 3 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  <strong>Switch to Google Analytics 4 conversions. M</strong>
                  ake the changes now to ensure you have enough historical data
                  when Universal Analytics stops collecting data on July 1,
                  2023.
                </div>
                <div>
                  <span
                    className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                    Final
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Clear call-to-action with specific deadline; emphasizes
                  proactive benefit (historical data) rather than fear; includes
                  concrete date for urgency
                </div>
              </div>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Failing to migrate to Google Analytics 4 will leave your
                    campaigns vulnerable to inaccurate data, ineffective bidding
                    and lost revenue opportunities.
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Fear-based messaging that focused on negatives; could create
                    anxiety rather than motivation to act
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Migrating to Google Analytics 4 ensures your campaigns
                    remain functional and your data stays accurate as Universal
                    Analytics phases out.
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Vague messaging without clear urgency; didn&#39;t specify
                    timeline or actionable next steps
                  </p>
                </div>
                <div>
                  <div className="mb-2">
                    <span
                      className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                      Final
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    <strong>Switch to Google Analytics 4 conversions. M</strong>
                    ake the changes now to ensure you have enough historical
                    data when Universal Analytics stops collecting data on July
                    1, 2023.
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Clear call-to-action with specific deadline; emphasizes
                    proactive benefit (historical data) rather than fear;
                    includes concrete date for urgency
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* H2 Giving Users More Context */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Giving users more context with subheaders
            </h2>
          </CaseStudyLayout>
          {/* Image CGU 8 */}
          <CaseStudyLayout maxWidth="816px">
            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/687ecd61e0440486c617b8e5_CGU%208.png"
              alt=""
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg object-contain shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Decision Table 4 */}
          <CaseStudyLayout maxWidth="816px">
            <div
              className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 overflow-x-auto shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] font-['JetBrains_Mono']">

              {/* Desktop Table */}
              <div className="hidden md:grid md:grid-cols-[2.5fr_1fr_1.5fr] gap-4">
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Proposed copy
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Status
                </div>
                <div
                  className="text-xs leading-[15.6px] font-bold"
>

                  Design decision
                </div>
                {/* Row 1 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Universal Analytics (360) will cease data collection on July
                  1, 2024 and Universal Analytics on August 2024. You will need
                  to migrate your primary conversions from the legacy Universal
                  Analytics to the new Google Analytics 4.
                  <br />
                  <br />
                  Your primary conversion actions for automated bidding from
                  Universal Analytics will be superseded by Google Analytics 4
                  conversions. After you save these changes, you should expect
                  potential performance fluctuations over 2 to 3 learning
                  cycles.
                </div>
                <div>
                  <span
                    className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                    Rejected
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Too technical and lengthy; mixed terminology between different
                  analytics platforms; unclear timeline expectations
                </div>
                {/* Row 2 */}
                <div
                  className="text-xs leading-[15.6px]"
>

                  Since Universal Analytics will stop collecting data in July
                  2023, we&#39;ve recommended new conversion optimization
                  settings. Your primary conversion actions for bid optimization
                  from Universal Analytics will be replaced with ones from
                  Google Analytics 4. After saving, you may see temporary
                  performance changes as the system learns for 1–2 weeks.
                </div>
                <div>
                  <span
                    className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                    Final
                  </span>
                </div>
                <div
                  className="text-xs leading-[15.6px]"
>

                  Clear, concise messaging; consistent platform naming; specific
                  timeline that users can understand; positions change as
                  helpful recommendation
                  <br />
                  <br />
                  With the hindsight of 2+ years working this space, I know see
                  areas of improvement... such the life of a writer.
                </div>
              </div>
              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2">
                    <span
                      className="bg-[#F4ACB7] border-2 border-black/5 rounded-xl px-2 py-1 text-xs"
>

                      Rejected
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Universal Analytics (360) will cease data collection on July
                    1, 2024 and Universal Analytics on August 2024. You will
                    need to migrate your primary conversions from the legacy
                    Universal Analytics to the new Google Analytics 4.
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Too technical and lengthy; mixed terminology between
                    different analytics platforms; unclear timeline expectations
                  </p>
                </div>
                <div>
                  <div className="mb-2">
                    <span
                      className="bg-[#95D5B2] border-2 border-black/[0.08] rounded-xl px-2 py-1 text-xs font-bold"
>

                      Final
                    </span>
                  </div>
                  <p
                    className="text-xs leading-[15.6px] mb-2 font-bold"
>

                    Since Universal Analytics will stop collecting data in July
                    2023, we&#39;ve recommended new conversion optimization
                    settings. Your primary conversion actions for bid
                    optimization from Universal Analytics will be replaced with
                    ones from Google Analytics 4. After saving, you may see
                    temporary performance changes as the system learns for 1–2
                    weeks.
                  </p>
                  <p
                    className="text-xs leading-[15.6px] text-gray-600"
>

                    Clear, concise messaging; consistent platform naming;
                    specific timeline that users can understand; positions
                    change as helpful recommendation. With the hindsight of 2+
                    years working this space, I know see areas of improvement...
                    such the life of a writer.
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* H2 Learnings */}
          <CaseStudyLayout maxWidth="734px" className="pl-[0px] pr-[0px]">
            <h2 className="font-['DM_Sans'] text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px]">
              Learnings
            </h2>
          </CaseStudyLayout>
          {/* Final Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p
              className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed md:leading-[28.8px]"
>

              While specific user metrics remain confidential, the project
              received enthusiastic feedback from stakeholders for its clarity
              and usability improvements.
              <br />
              <br />
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