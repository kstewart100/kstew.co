import React, { useEffect } from 'react';
import { CaseStudyLayout, caseStudyH2ClassName } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE = 'Expert scheduling — Kyle Stewart';

export function ExpertScheduling() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => { document.title = 'Kyle Stewart — Portfolio'; };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EFF0F3]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-10 lg:py-20">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
          {/* Title */}
          <CaseStudyLayout maxWidth="734px">
            <h1 className="font-sans text-gray-700 text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
              Expert scheduling
            </h1>
          </CaseStudyLayout>
          {/* Hero Image */}
          <CaseStudyLayout maxWidth="816px" caption="Future state concept for the scheduling tool.">
            <img
              alt="Future state concept for the scheduling tool"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/61dc9476de20fee46b908c56_Group%203766.png"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]" />

          </CaseStudyLayout>
          {/* Introduction */}
          <CaseStudyLayout maxWidth="734px">
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Every year, Intuit onboards thousands of TurboTax Live experts as
              seasonal employees. Before they can start helping customers, they
              need to set up their base schedule—something both the experts and
              Intuit's staffing team depend on.
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              A previous team had built a self-service tool, but it was
              overwhelming. Too much information, confusing instructions, and
              experts got stuck on what should have been straightforward.
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              With a new tax season approaching, I led a content redesign of the
              scheduling tool. My goal: turn a frustrating hurdle into something
              that helped experts feel ready and confident about their new role.
            </p>
          </CaseStudyLayout>
          {/* Metadata */}
          <CaseStudyLayout maxWidth="734px">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 border-t border-b border-[rgba(26,26,26,0.25)] py-5">
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block">Role</strong>
                Content Designer
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block">Team</strong>
                Intuit, Virtual Expert Platform
              </div>
              <div className="text-[rgba(5,37,55,0.95)] text-sm leading-5 font-sans">
                <strong className="font-bold block">Timeline</strong>
                May 2020 to June 2021
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
                <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a] text-left">
                  Give people information exactly when they need it
                </div>
                <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a] text-left">
                  Celebrate progress
                </div>
                <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a] text-left">
                  Break big, complicated tasks into smaller pieces that don't feel
                  intimidating
                </div>
              </div>
            </div>
          </CaseStudyLayout>
          {/* Section: The expert journey */}
          <CaseStudyLayout>
            <h2 className={caseStudyH2ClassName}>
              The expert journey
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Experts use the scheduling tool to set their weekly availability
              across a 12-week period before tax season ends, ensuring adequate
              coverage while respecting their availability.
            </p>
          </CaseStudyLayout>
          {/* Journey diagram */}
          <CaseStudyLayout maxWidth="816px">
            <img
              alt="Expert journey diagram"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6849d1c8f215334c1dbe8850_image%20293.png"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              After an initial walkthrough, experts schedule their hours week by
              week—completing all 12 weeks before moving forward. Each week has
              different hour requirements based on expected demand, making it
              tricky to navigate. Once complete, experts review their full
              schedule, make adjustments, and submit.
            </p>
          </CaseStudyLayout>
          {/* Section: Laying the groundwork */}
          <CaseStudyLayout>
            <h2 className={caseStudyH2ClassName}>
              Laying the groundwork with a content audit
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              While my PM and interaction design partners dove into specific
              problems and screens, I stepped back to look at the bigger
              picture—what story were we telling experts throughout this entire
              experience?
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              I put together an audit deck and asked teammates to weigh in.
              Going through everything with fresh eyes revealed many places
              where we could make the content work harder.
            </p>
          </CaseStudyLayout>
          {/* Audit image */}
          <CaseStudyLayout maxWidth="816px" caption="Audit slides documenting the base schedule creation workflow, compiled from product screenshots, interface strings, design files, and data.">
            <img
              width="900"
              height="750"
              alt="Audit slides"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/685c69fcd3e7d190e1cc64b7_Group%20632525.png"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          {/* Section: Updating the first-time use experience + original instructions image */}
          <CaseStudyLayout maxWidth="816px" caption="Original instructions screen before redesign.">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Updating the first-time use experience
              </h2>
            </div>
            <img
              width="900"
              height="750"
              alt="Original instructions screen"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216ed0e2d6b0a03e0034_1.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              The audit showed the onboarding screen had real problems. Beyond
              too many scheduling rules, the whole thing was a mess—no headings,
              no visual hierarchy, just a wall of text. We were asking experts
              to read and remember everything at once.
            </p>
          </CaseStudyLayout>
          {/* Redesigned image */}
          <CaseStudyLayout maxWidth="816px" caption="Redesigned instructions screen (first iteration) featuring clear headings and logical information grouping.">
            <img
              width="750"
              height="900"
              alt="Redesigned instructions screen"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216f5cdf024d95c73309_2.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              My first try focused on clear headings and breaking up information
              into logical chunks. But I still had too much content.
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              We put this version in front of experts, and they found it easier
              to scan and understand than the original—but we knew we could do
              better.
            </p>
          </CaseStudyLayout>
          {/* Refined image */}
          <CaseStudyLayout maxWidth="816px" caption="Refined instructions screen with reduced content to minimize information overload.">
            <img
              width="750"
              height="900"
              alt="Refined instructions screen"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fcb26781c3b1f456f_3.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              After working with the visual design team, we got much more
              aggressive about cutting content to reduce overwhelming experts.
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              Before launching, we made calls about what really needed to be on
              this screen. Working with stakeholders, we kept only the
              essentials and moved the rest to places where it would be more
              helpful—like right when experts actually need that information.
            </p>
          </CaseStudyLayout>
          {/* Future state image */}
          <CaseStudyLayout maxWidth="816px" caption="Future state concept for the scheduling tool.">
            <img
              width="750"
              height="900"
              alt="Future state concept"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fa511c087c37be18b_4.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              Even after launch, my visual design partner and I kept refining
              the experience. This concept shows where we think it could go
              next—tighter headline, clearer hierarchy, and help that shows up
              exactly when experts need it.
            </p>
          </CaseStudyLayout>
          {/* Section: Creating helpful error messages + error comparison image */}
          <CaseStudyLayout maxWidth="816px" caption="Error message comparison showing original version (left) and first iteration (right).">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                Creating helpful error messages
              </h2>
            </div>
            <img
              alt="Error message comparison"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/684270edaa3779ba22dffa79_Error%20message%20mockup.png"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              The audit showed our error messages didn't help. They'd tell
              experts something was wrong but not how to fix it. Like "Your
              hours don't meet requirements"—okay, but what requirements? What
              should I change?
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              I pushed for a different approach: error messages should help
              people solve the problem, not just point it out.
            </p>
          </CaseStudyLayout>
          {/* Error audit spreadsheet image */}
          <CaseStudyLayout maxWidth="816px" caption="Working spreadsheet documenting error message audit and revisions.">
            <img
              width="750"
              height="900"
              alt="Error message audit spreadsheet"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831217011c7f20effc31522_6.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              I worked with engineering to map out every possible error and
              talked with product managers about what was technically possible.
              Going through this, I realized something important—many errors
              could be avoided completely with better guidance upfront.
            </p>
          </CaseStudyLayout>
          {/* First iteration error image */}
          <CaseStudyLayout maxWidth="816px" caption="First iteration of the redesigned error message with directive information.">
            <img
              width="750"
              height="900"
              alt="First iteration error message"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216f781e6d4d23cda26d_7.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              For errors we couldn't prevent, we wrote messages that told
              experts exactly what to do. Each one starts with the action they
              need to take. But we wondered if that was enough.
            </p>
          </CaseStudyLayout>
          {/* Launched error image */}
          <CaseStudyLayout maxWidth="816px" caption="Launched error message that accounts for unseen use cases while providing schedule approval guidance.">
            <img
              width="750"
              height="900"
              alt="Launched error message"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831216fd0e2d6b0a03e0078_8.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              We know life happens—childcare falls through, someone gets sick,
              plans change. So we launched with messaging that acknowledged
              experts might need to skip a week and come back later. We wanted
              to be realistic about how people actually work while meeting our
              business needs.
            </p>
          </CaseStudyLayout>
          {/* Section: In-product guidance + original weekly image */}
          <CaseStudyLayout maxWidth="816px" caption="Original weekly scheduling interface.">
            <div className="max-w-[734px]">
              <h2 className={caseStudyH2ClassName}>
                In-product guidance
              </h2>
            </div>
            <img
              width="900"
              height="750"
              alt="Original weekly scheduling interface"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/683121705ac228a8e8197fd6_10.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]"
            />
          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              The original interface threw way too much information at experts
              all at once. A lot of it—especially the long introductory
              text—would work better in an email or during training, not when
              someone's actually scheduling hours.
            </p>
          </CaseStudyLayout>
          {/* First iteration scheduling image */}
          <CaseStudyLayout maxWidth="816px" caption="First iteration with requirements content moved from instructions screen to scheduling interface.">
            <img
              width="750"
              height="900"
              alt="First iteration scheduling interface"
              loading="lazy"
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6831217081fbd522db08325c_9.jpg"
              className="w-full max-w-full block object-contain bg-white border-[3px] border-black/5 p-4 md:p-5 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]" />

          </CaseStudyLayout>
          <CaseStudyLayout>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              We made some key changes to fix this:
            </p>
            <ul className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] list-disc pl-6 mt-4 space-y-2">
              <li>
                Swapped out cold "minimum/maximum" language for friendlier
                ranges
              </li>
              <li>
                Broke down complicated requirements into scannable, actionable
                chunks
              </li>
              <li>
                Moved important information to places where it made more sense
                to experts
              </li>
            </ul>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              The final design focused on what experts really needed—their
              scheduled hours front and center—with help available when needed,
              but not in the way.
            </p>
          </CaseStudyLayout>
          {/* Section: Learnings */}
          <CaseStudyLayout>
            <h2 className={caseStudyH2ClassName}>
              Learnings
            </h2>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
              It's hard to separate how much the content changes helped versus
              other design improvements, but the overall redesign definitely
              made things better. Now experts get:
            </p>
            <ul className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] list-disc pl-6 mt-4 space-y-2">
              <li>Clear guidance that tells them what to do</li>
              <li>Information in manageable chunks instead of all at once</li>
              <li>
                Error messages that help them fix problems instead of just
                pointing them out
              </li>
            </ul>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              This project reminded me: good content design isn't about writing
              perfect copy. It's about understanding what people need well
              enough to know what to tell them, when to tell them, and—maybe
              most importantly—what to leave out.
            </p>
            <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px] mt-6">
              The team working on this now has a solid foundation to build from.
              The approach we took—keeping things clear, contextual, and
              empowering—is still guiding how the tool evolves.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>);

}