import {
  CaseStudyLayout,
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

export function ExpertScheduling() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-8 lg:py-12">
        <div className="space-y-6 mb-16 lg:mb-24">
          <CaseStudyLayout {...layout}>
            <h1 className={documentCaseStudyTitleClassName}>
              Streamlining schedule creation for tax pros
            </h1>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              <strong>Company:</strong> Intuit, Virtual Expert Platform
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
              alt="Future state concept for the scheduling tool"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/hero-group-3766.png"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Every year, Intuit onboards thousands of TurboTax Live experts as
              seasonal employees. Before they can start helping customers, they
              need to set up their base schedule—something both the experts and
              Intuit&apos;s staffing team depend on.
            </p>
            <p className={`${body} mt-4`}>
              A previous team had built a self-service tool, but it was
              overwhelming. Too much information, confusing instructions, and
              experts got stuck on what should have been straightforward.
            </p>
            <p className={`${body} mt-4`}>
              With a new tax season approaching, I led a content redesign of the
              scheduling tool. My goal: turn a frustrating hurdle into something
              that helped experts feel ready and confident about their new role.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Our design principles</h2>
            <ul className={`${list} mt-3 list-outside`}>
              <li>
                <strong>Give people information exactly when they need it</strong>
              </li>
              <li>
                <strong>Celebrate progress</strong>
              </li>
              <li>
                <strong>
                  Break big, complicated tasks into smaller pieces that
                  don&apos;t feel intimidating
                </strong>
              </li>
            </ul>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>The expert journey</h2>
            <p className={`${body} mt-3`}>
              Experts use the scheduling tool to set their weekly availability
              across a 12-week period before tax season ends, ensuring adequate
              coverage while respecting their availability.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Expert journey diagram"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/journey-image-293.png"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              After an initial walkthrough, experts schedule their hours week by
              week—completing all 12 weeks before moving forward. Each week has
              different hour requirements based on expected demand, making it
              tricky to navigate. Once complete, experts review their full
              schedule, make adjustments, and submit.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Laying the groundwork with a content audit</h2>
            <p className={`${body} mt-3`}>
              While my PM and interaction design partners dove into specific
              problems and screens, I stepped back to look at the bigger
              picture—what story were we telling experts throughout this entire
              experience?
            </p>
            <p className={`${body} mt-4`}>
              I put together an audit deck and asked teammates to weigh in.
              Going through everything with fresh eyes revealed many places
              where we could make the content work harder. Audit slides
              documented the base schedule creation workflow, compiled from
              product screenshots, interface strings, design files, and data.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Audit slides"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/group-632525.png"
              className={img}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Updating the first-time use experience</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Original onboarding instructions screen"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/onboarding-original.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The audit showed the onboarding screen had real problems. Beyond
              too many scheduling rules, the whole thing was a mess—no headings,
              no visual hierarchy, just a wall of text. We were asking experts
              to read and remember everything at once.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Redesigned instructions screen (first iteration)"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/02.jpg"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              My first try focused on clear headings and breaking up information
              into logical chunks. But I still had too much content.
            </p>
            <p className={`${body} mt-4`}>
              We put this version in front of experts, and they found it easier
              to scan and understand than the original—but we knew we could do
              better.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Refined onboarding instructions screen"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/onboarding-refined.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              After working with the visual design team, we got much more
              aggressive about cutting content to reduce overwhelming experts.
            </p>
            <p className={`${body} mt-4`}>
              Before launching, we made calls about what really needed to be on
              this screen. Working with stakeholders, we kept only the essentials
              and moved the rest to places where it would be more helpful—like
              right when experts actually need that information.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Future state concept for the scheduling tool"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/04.jpg"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              Even after launch, my visual design partner and I kept refining
              the experience. This concept shows where we think it could go
              next—tighter headline, clearer hierarchy, and help that shows up
              exactly when experts need it.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>Creating helpful error messages</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Error message comparison showing original version (left) and first iteration (right)"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/error-message-mockup.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The audit showed our error messages didn&apos;t help. They&apos;d
              tell experts something was wrong but not how to fix it. Like
              &ldquo;Your hours don&apos;t meet requirements&rdquo;—okay, but
              what requirements? What should I change?
            </p>
            <p className={`${body} mt-4`}>
              I pushed for a different approach: error messages should help
              people solve the problem, not just point it out.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Working spreadsheet documenting error message audit and revisions"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/06.jpg"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              I worked with engineering to map out every possible error and
              talked with product managers about what was technically possible.
              Going through this, I realized something important—many errors
              could be avoided completely with better guidance upfront.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="First iteration error message"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/error-first-iteration.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              For errors we couldn&apos;t prevent, we wrote messages that told
              experts exactly what to do. Each one starts with the action they
              need to take. But we wondered if that was enough.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Launched error message"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/error-launched.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              We know life happens—childcare falls through, someone gets sick,
              plans change. So we launched with messaging that acknowledged
              experts might need to skip a week and come back later. We wanted
              to be realistic about how people actually work while meeting our
              business needs.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <h2 className={h2}>In-product guidance</h2>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="Original weekly scheduling interface"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/scheduling-original.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>
              The original interface threw way too much information at experts
              all at once. A lot of it—especially the long introductory
              text—would work better in an email or during training, not when
              someone&apos;s actually scheduling hours.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <img
              alt="First iteration scheduling interface"
              loading="lazy"
              src="/images/case-studies/expert-scheduling/scheduling-first-iteration.png"
              className={imgShadow}
            />
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <p className={body}>We made some key changes to fix this:</p>
            <ul className={`${list} mt-3`}>
              <li>
                Swapped out cold &ldquo;minimum/maximum&rdquo; language for
                friendlier ranges
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
            <p className={`${body} mt-4`}>
              The final design focused on what experts really needed—their
              scheduled hours front and center—with help available when needed,
              but not in the way.
            </p>
          </CaseStudyLayout>

          <CaseStudyLayout {...layout}>
            <hr className="border-0 border-b border-[rgba(55,53,47,0.09)] my-6" />
            <h2 className={h2}>Learnings</h2>
            <p className={`${body} mt-3`}>
              It&apos;s hard to separate how much the content changes helped
              versus other design improvements, but the overall redesign
              definitely made things better. Now experts get:
            </p>
            <ul className={`${list} mt-3`}>
              <li>Clear guidance that tells them what to do</li>
              <li>
                Information in manageable chunks instead of all at once
              </li>
              <li>
                Error messages that help them fix problems instead of just
                pointing them out
              </li>
            </ul>
            <p className={`${body} mt-4`}>
              This project reminded me: good content design isn&apos;t about
              writing perfect copy. It&apos;s about understanding what people
              need well enough to know what to tell them, when to tell them,
              and—maybe most importantly—what to leave out.
            </p>
            <p className={`${body} mt-4`}>
              The team working on this now has a solid foundation to build from.
              The approach we took—keeping things clear, contextual, and
              empowering—is still guiding how the tool evolves.
            </p>
          </CaseStudyLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}
