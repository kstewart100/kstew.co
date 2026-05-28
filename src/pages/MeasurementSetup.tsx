import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CaseStudyLayout, caseStudyH2ClassName } from '../components/CaseStudyLayout';

const PAGE_TITLE = 'Measurement setup — Kyle Stewart';

export function MeasurementSetup() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => { document.title = 'Kyle Stewart — Portfolio'; };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-10 lg:py-20">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
          {/* Title Section */}
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-heading text-gray-700 text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Measurement Setup
            </h1>
          </CaseStudyLayout>
          {/* Hero Image */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="This conversion measurement page lets advertisers set up conversion tracking during onboarding, ensuring accurate reporting and optimal campaign performance from day one.">

            <img
              src="/images/case-studies/measurement-setup/cm-1.png"
              alt="Measurement Setup Hero"
              loading="lazy"
              className="w-full max-w-full block bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]" />

          </CaseStudyLayout>
          {/* Intro Body Text */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Conversion tracking was essential to campaign performance, but the
              setup experience was buried, jargon-heavy, and easy for first-time
              advertisers to skip.
              <br />
              <br />
              I helped reposition measurement setup inside onboarding with
              clearer headlines, simpler guidance, and action-oriented copy so
              more users could complete setup correctly on the first pass.
            </p>
          </CaseStudyLayout>
          {/* Metadata Grid */}
          <CaseStudyLayout maxWidth="734px">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 border-t border-b border-[rgba(26,26,26,0.25)] py-5">
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Role</strong>
                Content Designer
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Team</strong>
                UX Designers, Product Managers, Software Engineers, and Program
                Managers
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Timeline</strong>
                July 2022 to Oct 2022
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block mb-1">Company</strong>
                Google, Google Ads
              </div>
            </div>
          </CaseStudyLayout>
          {/* Design principles card */}
          <CaseStudyLayout maxWidth="816px">
            <div className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <h2 className={caseStudyH2ClassName}>
                Our design principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Simplify and hide details with progressive disclosure
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Do the work for them
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Assume they're new
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Refining Content Hierarchy */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Refining content hierarchy
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              My initial approach included all information users might need
              directly on the page. But after exploring this, I realized we
              could streamline the narrative and significantly reduce cognitive
              load.
            </p>
          </CaseStudyLayout>
          {/* Image 2 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="Initial mockups from designer.">

            <img
              src="/images/case-studies/measurement-setup/cm-2.png"
              alt="Initial mockups"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Text */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              I thought a celebratory message would be motivating, but research
              quickly shot that down. People thought 'Congrats!' meant their
              campaigns were already live, which was completely wrong. This led
              to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>
          {/* Image 3 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="Initial attempt at streamlined copy with tag and tracking terminology to be verified.">

            <img
              src="/images/case-studies/measurement-setup/cm-3.png"
              alt="Streamlined copy attempt"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Text */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              I initially added a celebratory message to build momentum, but
              research discussions revealed a critical issue—this messaging gave
              the false impression that campaigns had already launched. This led
              to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>
          {/* Table 1 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="A few iterations of the main headline and subheader copy.">

            <div className="bg-white w-full min-w-0 border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 border-b border-gray-200 pb-2 [&>div]:min-w-0">
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Proposed copy
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Status
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Design decision
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Congrats! You're almost done.</strong>
                    <br />
                    Your campaign has been published and will be reviewed by our
                    team.
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block text-[#294050]">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Too vague about timeline and mixed messaging (congrats vs.
                    "almost done")
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Your campaign is published!</strong>
                    <br />
                    Now let's track your conversions.
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block text-[#294050]">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Unclear about review process; users were confused about next
                    steps
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Your ads will go live after a review</strong>
                    <br />
                    All ads are checked to ensure they're safe and appropriate
                    for everyone. This editorial and policy review should take
                    1–2 business days.
                  </div>
                  <div>
                    <span className="font-mono border-2 border-[rgba(0,0,0,0.08)] rounded-xl py-1 px-2 text-xs font-bold inline-block text-[#294050] bg-[#95D5B2]">
                      Final
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Clear expectations, transparent process, specific timeline
                  </div>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Text */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              The final design uses clear, direct language to explain what
              advertisers should expect, building trust while considering the
              full journey of tasks they need to accomplish.
            </p>
          </CaseStudyLayout>
          {/* Image 4 */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="Launched copy with reduced jargon and cohesive narrative across dialogue boxes and headlines.">

            <img
              src="/images/case-studies/measurement-setup/group-632552.png"
              alt="Launched copy"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* CTAs + CTA variations image */}
          <CaseStudyLayout
            maxWidth="816px"
            caption="Different variations of the same CTA from the product and testing phases."
          >
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Finding and aligning on the CTAs
              </h2>
            </div>
            <img
              src="/images/case-studies/measurement-setup/cm-5.png"
              alt="CTA variations"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Leveraging prior research, I discovered that "Set up" and "Get
              event snippet" resonated strongly with advertisers. These
              action-oriented CTAs clearly communicated what users needed to do
              while avoiding technical jargon that might cause hesitation.
              <br />
              <br />
              This seemingly small decision had significant impact—clear CTAs
              reduced decision paralysis and helped advertisers move confidently
              through setup.
            </p>
          </CaseStudyLayout>
          {/* Jargon */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Working out the jargon
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              While working on this experience, I kept one thing in mind: What
              did the user need to know to take action? Why did the user even
              care about taking action?
              <br />
              <br />
              An important place this thought should be alleviated is in the
              directional copy in the tags and snippets. Without setting these
              up correctly, users wouldn't see results in their campaign. This
              approach—explaining the "why" alongside the "what"—helped
              advertisers understand not just what they were doing, but why it
              mattered for their business.
            </p>
          </CaseStudyLayout>
          {/* Tag Copy + image */}
          <CaseStudyLayout maxWidth="816px">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>Tag copy</h2>
            </div>
            <img
              src="/images/case-studies/measurement-setup/cm-6.png"
              alt="Tag copy"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout
            maxWidth="816px"
            caption="A few iterations of the headline and subhead copy for the Star tag.">

            <div className="bg-white w-full min-w-0 border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 border-b border-gray-200 pb-2 [&>div]:min-w-0">
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Proposed copy
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Status
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Design decision
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Install your Google tag</strong>
                    <br />
                    The global site tag works in unison with another piece of
                    code, an event snippet, to track your conversions. To
                    streamline your experience with using this website code
                    across products, you can use the global site tag to track
                    your conversions. This tag should be installed on every page
                    of your website. Learn more about tags
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block text-[#294050]">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Too wordy and repetitive; confusing explanation of
                    relationship between global tag and event snippets
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Your tag</strong>
                    <br />
                    Works with your Google Tag to track conversions. Create your
                    Google Tag first to get this code.
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block text-[#294050]">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Too brief and vague; inconsistent terminology (Google Tag vs
                    Your Tag); unclear purpose
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Activate measurement with a Google tag</strong>
                    <br />A Google tag allows you to measure activity on your
                    website. You need to do this before individual event
                    snippets can start measuring conversions.
                  </div>
                  <div>
                    <span className="bg-[#95D5B2] font-mono border-2 border-[rgba(0,0,0,0.08)] rounded-xl py-1 px-2 text-xs font-bold inline-block text-[#294050]">
                      Final
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Clear, concise explanation of purpose; establishes proper
                    sequence (Google tag before event snippets); action-oriented
                    language
                  </div>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Event Snippet + image */}
          <CaseStudyLayout maxWidth="816px">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>Event snippet copy</h2>
            </div>
            <img
              src="/images/case-studies/measurement-setup/cm-7.png"
              alt="Event snippet"
              loading="lazy"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout
            maxWidth="816px"
            caption="A few iterations of the headline and subhead copy for the event snippet.">

            <div className="bg-white w-full min-w-0 border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 border-b border-gray-200 pb-2 [&>div]:min-w-0">
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Proposed copy
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Status
                  </div>
                  <div className="font-mono text-xs font-bold text-[#294050]">
                    Design decision
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Event tracking</strong>
                    <br />
                    Works with your Google Tag to track conversions. Create your
                    Google Tag first to get this code.
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Too technical and assumes prior knowledge; unclear
                    relationship between Google Tag and event snippets
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 mb-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>Install your event snippets</strong>
                    <br />
                    Adding a Google Ads event snippet ensures precise tracking
                    of user actions, such as form submissions or purchases, by
                    firing a JavaScript code when these events occur. This data
                    is sent to Google Ads for conversion tracking, enabling you
                    to attribute actions to campaigns, optimize bids, and use
                    features like Smart Bidding.
                  </div>
                  <div>
                    <span className="bg-[#F4ACB7] font-mono border-2 border-[rgba(0,0,0,0.05)] rounded-xl py-1 px-2 text-xs inline-block">
                      Rejected
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Overly technical explanation that overwhelmed users; too
                    much detail for initial setup step
                  </div>
                </div>
                <div className="grid grid-cols-[minmax(0,11fr)_minmax(0,3fr)_minmax(0,6fr)] gap-x-4 gap-y-4 items-start [&>div]:min-w-0">
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    <strong>
                      Measure each conversion with an event snippet
                    </strong>
                    <br />
                    Event snippets measure and help optimize your campaign's
                    performance based on your website conversion goals. You need
                    to set up an event snippet for each conversion.
                  </div>
                  <div>
                    <span className="bg-[#95D5B2] font-mono border-2 border-[rgba(0,0,0,0.08)] rounded-xl py-1 px-2 text-xs font-bold inline-block">
                      Final
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-[#294050]">
                    Strikes balance between clarity and completeness; explains
                    purpose without technical jargon; actionable next step
                  </div>
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Learnings */}
          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Learnings
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mb-4">
              The experiment worked. More people actually completed the
              conversion setup, and they did it correctly. When you make
              something less confusing, people can actually use it. We
              significantly improved conversion tracking accuracy and increased
              successful setup completion rates.
              <br />
              <br />
              This project reinforced several key insights:
            </p>
            <ul className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] list-disc pl-6 mb-4 space-y-2">
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
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Working with several different teams was tricky—everyone had
              opinions about what should be included. But keeping the focus on
              'will this help someone who's never done this before?' usually got
              us to the right answer.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>);

}