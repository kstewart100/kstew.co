import { useEffect } from 'react';
import { CaseStudyLayout, caseStudyH2ClassName } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE =
  "Helping more advertisers measure what's working in Google Ads — Kyle Stewart";

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
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-heading text-gray-700 text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Helping more advertisers measure what&apos;s working in Google
              Ads
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
              src="/images/case-studies/measurement-setup/image.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Conversion tracking was essential to campaign performance, but the
              setup experience was buried, jargon-heavy, and easy for first-time
              advertisers to skip.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              I helped reposition measurement setup inside onboarding with
              clearer headlines, simpler guidance, and action-oriented copy so
              more users could complete setup correctly on the first pass. With
              these new updates, we saw a 25 percent increase in people setting
              up these tools.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <div className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
              <h2 className={caseStudyH2ClassName}>Our design principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Simplify and hide details with progressive disclosure
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Do the work for them
                </div>
                <div className="font-heading text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                  Assume they&apos;re new
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Refining content hierarchy</h2>
            <p className={bodyClassName}>
              My initial approach included all information users might need
              directly on the page. But after exploring this, I realized we
              could streamline the narrative and significantly reduce cognitive
              load.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/measurement-setup/image-1.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              I thought a celebratory message would be motivating, but research
              quickly shot that down. People thought &apos;Congrats!&apos; meant
              their campaigns were already live, which was completely wrong. This
              led to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/measurement-setup/cm-3.png"
              alt="Initial attempt at streamlined copy"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              I initially added a celebratory message to build momentum, but
              research discussions revealed a critical issue—this messaging gave
              the false impression that campaigns had already launched. This led
              to a complete rethink of our messaging strategy.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <h3 className={h3ClassName}>Headline and subhead copy decisions</h3>
            <div
              role="table"
              aria-label="Headline and subhead copy decisions"
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
                    <strong>Congrats! You&apos;re almost done.</strong> Your campaign has been published and will be reviewed by our team.
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Too vague about timeline and mixed messaging (congrats vs. &quot;almost done&quot;)
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Your campaign is published!</strong> Now let&apos;s track your conversions.
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Unclear about review process; users were confused about next steps
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Your ads will go live after a review</strong> All ads are checked to ensure they&apos;re safe and appropriate for everyone. This editorial and policy review should take 1–2 business days.
                  </div>
                  <div role="cell"><StatusBadge status="Final" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Clear expectations, transparent process, specific timeline
                  </div>
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Congrats! You&apos;re almost done.</strong> Your campaign has been published and will be reviewed by our team.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Too vague about timeline and mixed messaging (congrats vs. &quot;almost done&quot;)
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Your campaign is published!</strong> Now let&apos;s track your conversions.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Unclear about review process; users were confused about next steps
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Your ads will go live after a review</strong> All ads are checked to ensure they&apos;re safe and appropriate for everyone. This editorial and policy review should take 1–2 business days.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Clear expectations, transparent process, specific timeline
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              The final design uses clear, direct language to explain what
              advertisers should expect, building trust while considering the
              full journey of tasks they need to accomplish.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/measurement-setup/image-2.png"
              alt=""
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>
              Finding and aligning on the CTAs
            </h2>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <img
              src="/images/case-studies/measurement-setup/cm-5.png"
              alt="CTA variations from product and testing phases"
              loading="lazy"
              className={`${imageClassName} rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]`}
            />
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <p className={bodyClassName}>
              Leveraging prior research, I discovered that &ldquo;Set up&rdquo; and &ldquo;Get event snippet&rdquo; resonated strongly with advertisers. These action-oriented CTAs clearly communicated what users needed to do while avoiding technical jargon that might cause hesitation.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              This seemingly small decision had significant impact—clear CTAs reduced decision paralysis and helped advertisers move confidently through setup.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Working out the jargon</h2>
            <p className={bodyClassName}>
              While working on this experience, I kept one thing in mind: What
              did the user need to know to take action? Why did the user even
              care about taking action?
            </p>
            <p className={`${bodyClassName} mt-6`}>
              An important place this thought should be alleviated is in the
              directional copy in the tags and snippets. Without setting these
              up correctly, users wouldn&apos;t see results in their campaign.
              This approach—explaining the &ldquo;why&rdquo; alongside the
              &ldquo;what&rdquo;—helped advertisers understand not just what
              they were doing, but why it mattered for their business
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <h3 className={h3ClassName}>Tag copy decisions</h3>
            <div
              role="table"
              aria-label="Tag copy decisions"
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
                    <strong>Install your Google tag</strong> — The global site tag works in unison with another piece of code, an event snippet, to track your conversions. To streamline your experience with using this website code across products, you can use the global site tag to track your conversions. This tag should be installed on every page of your website. Learn more about tags
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Too wordy and repetitive; confusing explanation of relationship between global tag and event snippets
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Your tag</strong> — Works with your Google Tag to track conversions. Create your Google Tag first to get this code.
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Too brief and vague; inconsistent terminology (Google Tag vs Your Tag); unclear purpose
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Activate measurement with a Google tag</strong> — A Google tag allows you to measure activity on your website. You need to do this before individual event snippets can start measuring conversions.
                  </div>
                  <div role="cell"><StatusBadge status="Final" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Clear, concise explanation of purpose; establishes proper sequence (Google tag before event snippets); action-oriented language
                  </div>
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Install your Google tag</strong> — The global site tag works in unison with another piece of code, an event snippet, to track your conversions. To streamline your experience with using this website code across products, you can use the global site tag to track your conversions. This tag should be installed on every page of your website. Learn more about tags
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Too wordy and repetitive; confusing explanation of relationship between global tag and event snippets
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Your tag</strong> — Works with your Google Tag to track conversions. Create your Google Tag first to get this code.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Too brief and vague; inconsistent terminology (Google Tag vs Your Tag); unclear purpose
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Activate measurement with a Google tag</strong> — A Google tag allows you to measure activity on your website. You need to do this before individual event snippets can start measuring conversions.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Clear, concise explanation of purpose; establishes proper sequence (Google tag before event snippets); action-oriented language
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="816px">
            <h3 className={h3ClassName}>Event snippet copy decisions</h3>
            <div
              role="table"
              aria-label="Event snippet copy decisions"
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
                    <strong>Event tracking</strong> — Works with your Google Tag to track conversions. Create your Google Tag first to get this code.
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Too technical and assumes prior knowledge; unclear relationship between Google Tag and event snippets
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4 mb-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Install your event snippets</strong> — Adding a Google Ads event snippet ensures precise tracking of user actions, such as form submissions or purchases, by firing a JavaScript code when these events occur. This data is sent to Google Ads for conversion tracking, enabling you to attribute actions to campaigns, optimize bids, and use features like Smart Bidding.
                  </div>
                  <div role="cell"><StatusBadge status="Rejected" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Overly technical explanation that overwhelmed users; too much detail for initial setup step
                  </div>
                </div>
                <div role="row" className="grid grid-cols-[2fr_1fr_2fr] gap-4">
                  <div role="cell" className="text-xs leading-[15.6px]">
                    <strong>Measure each conversion with an event snippet</strong> — Event snippets measure and help optimize your campaign&apos;s performance based on your website conversion goals. You need to set up an event snippet for each conversion.
                  </div>
                  <div role="cell"><StatusBadge status="Final" /></div>
                  <div role="cell" className="text-xs leading-[15.6px]">
                    Strikes balance between clarity and completeness; explains purpose without technical jargon; actionable next step
                  </div>
                </div>
              </div>
              <div className="md:hidden space-y-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Event tracking</strong> — Works with your Google Tag to track conversions. Create your Google Tag first to get this code.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Too technical and assumes prior knowledge; unclear relationship between Google Tag and event snippets
                  </p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="mb-2"><StatusBadge status="Rejected" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Install your event snippets</strong> — Adding a Google Ads event snippet ensures precise tracking of user actions, such as form submissions or purchases, by firing a JavaScript code when these events occur. This data is sent to Google Ads for conversion tracking, enabling you to attribute actions to campaigns, optimize bids, and use features like Smart Bidding.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Overly technical explanation that overwhelmed users; too much detail for initial setup step
                  </p>
                </div>
                <div>
                  <div className="mb-2"><StatusBadge status="Final" /></div>
                  <p className="text-xs leading-[15.6px] mb-2">
                    <strong>Measure each conversion with an event snippet</strong> — Event snippets measure and help optimize your campaign&apos;s performance based on your website conversion goals. You need to set up an event snippet for each conversion.
                  </p>
                  <p className="text-xs leading-[15.6px] text-gray-600">
                    Strikes balance between clarity and completeness; explains purpose without technical jargon; actionable next step
                  </p>
                </div>
              </div>
            </div>
          </CaseStudyLayout>

          <CaseStudyLayout maxWidth="734px">
            <h2 className={caseStudyH2ClassName}>Learnings</h2>
            <p className={bodyClassName}>
              The experiment worked. More people actually completed the
              conversion setup, and they did it correctly. When you make
              something less confusing, people can actually use it. We
              significantly improved conversion tracking accuracy and increased
              successful setup completion rates.
            </p>
            <p className={`${bodyClassName} mt-6`}>
              This project reinforced several key insights:
            </p>
            <ul className={`${bodyClassName} list-disc pl-6 mt-4 space-y-2`}>
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
            <p className={`${bodyClassName} mt-6`}>
              Working with several different teams was tricky—everyone had
              opinions about what should be included. But keeping the focus on
              &apos;will this help someone who&apos;s never done this before?&apos;
              usually got us to the right answer.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );
}
