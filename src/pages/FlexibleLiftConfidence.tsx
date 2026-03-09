import React, { useEffect } from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE = 'Flexible lift confidence — Kyle Stewart';

export function FlexibleLiftConfidence() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => { document.title = 'Kyle Stewart — Portfolio'; };
  }, []);

  const CaptionText = ({ children }: { children: React.ReactNode }) => (
    <div className="font-mono text-gray-700 text-xs font-normal leading-[19.2px] not-italic">
      {children}
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EFF0F3] text-[#1a1a1a] text-xs font-sans leading-[19.2px]">
      <Header variant="case-study" />
      <main id="main-content" className="flex-1 py-10 lg:py-20">
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-[140px]">
        {/* Hero Title */}
        <CaseStudyLayout maxWidth="734px">
          <h1 className="font-sans text-gray-700 text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[72px] tracking-[-0.02em]">
            Flexible lift confidence
          </h1>
        </CaseStudyLayout>
        {/* Hero Image */}
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              The launched update to brand lift results includes a new metric
              called "Certainty of Lift," which indicates the likelihood that
              their campaigns generated lift.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688181680e5f8491648c19c1_Variant4.png"
            alt="Flexible lift confidence hero"
            loading="lazy"
            className="w-full h-auto rounded-[20px] border-[3px] border-black/5 p-5 bg-white"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        {/* Intro Body Text */}
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg font-normal leading-relaxed md:leading-[28.8px]">
            Brand lift campaigns on Google Ads rarely achieved statistical
            significance, leaving advertisers with vague insights like "Your
            campaign drove an increase in awareness." We proposed lowering the
            statistical threshold and displaying confidence levels directly in
            the product—giving advertisers transparency about result reliability
            while making more campaigns actionable.
            <br />
            <br />I lead the content design and messaging to make this complex
            statistical concept accessible to both novices and experts. The
            updates significantly improved customer satisfaction scores and
            renewed engagement with brand lift campaigns.
          </p>
        </CaseStudyLayout>
        {/* Metadata Grid */}
        <CaseStudyLayout maxWidth="734px">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 border-t border-b border-[rgba(26,26,26,0.25)] py-5">
            <div>
              <p className="text-[rgba(5,37,55,0.95)] text-sm leading-5 p-5 font-sans">
                <strong>
                  Role
                  <br />
                </strong>
                Content Designer
              </p>
            </div>
            <div>
              <p className="text-[rgba(5,37,55,0.95)] text-sm leading-5 p-5 font-sans">
                <strong>
                  Team
                  <br />
                </strong>
                UX Designers, Product Managers, Software Engineers, and Program
                Managers
              </p>
            </div>
            <div>
              <p className="text-[rgba(5,37,55,0.95)] text-sm leading-5 p-5 font-sans">
                <strong>
                  Company
                  <br />
                </strong>
                Google, Google Ads
              </p>
            </div>
          </div>
        </CaseStudyLayout>
        {/* Design principles card */}
        <CaseStudyLayout maxWidth="816px">
          <div className="bg-white w-full border-[3px] border-black/[0.08] rounded-lg p-4 md:p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]">
            <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-4 md:mb-5">
              Our design principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                Make statistics human by translating terminology into clear,
                trustworthy language
              </div>
              <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                Put information where it belongs
              </div>
              <div className="font-sans text-base font-semibold leading-[25.6px] text-[#1a1a1a]">
                Validate language choices through research rather than following
                others
              </div>
            </div>
          </div>
        </CaseStudyLayout>
        {/* Users Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Serving two important but distinct users
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px] mb-6">
            Our research identified two distinct user groups within the brand
            marketer audience, each with different needs and capabilities.
            Understanding both user types was essential for creating inclusive
            content.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="font-mono text-gray-700 text-xs font-normal leading-[19.2px] p-2.5 bg-white/50 rounded-lg">
              <strong>
                Stats expert
                <br />
                <br />
              </strong>
              - Works as a brand marketer or data scientist.
              <br />
              - Took advanced math or statistics courses.
              <br />
              - Interprets data and results with confidence.
              <br />- Serves as the team's go-to resource for understanding
              statistical implications.
            </div>
            <div className="font-mono text-gray-700 text-xs font-normal leading-[19.2px] p-2.5 bg-white/50 rounded-lg">
              <strong>
                Stats novice
                <br />
                <br />
              </strong>
              - Works as a brand marketer
              <br />
              - Has limited recent statistics experienceRelies on data science
              colleagues for interpretation
              <br />- Benefits from simplified explanations and educational
              resources
            </div>
          </div>
        </CaseStudyLayout>
        {/* Literature Review Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Conducting a literature review
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            I began by examining existing research and documentation to
            understand previous approaches and establish context. The literature
            review encompassed past research studies, brand guidelines, naming
            conventions, educational materials, and empirical studies.
            Literature review revealed valuable patterns but no definitive
            naming solutions.
          </p>
        </CaseStudyLayout>
        {/* Exploring Options Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Exploring the different options for a name
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            The team had explored several naming options before my involvement.
            After conducting the literature review and consulting design
            guidelines, I proposed "certainty of lift," though stakeholders
            initially expressed skepticism about this terminology.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              Our potential names emerged from cross-functional collaboration.
              Content, engineering, product management, design, and data science
              contributed to the list.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6881844e3a9d10b784a2a349_Group%20632545.png"
            alt="Naming options"
            loading="lazy"
            className="w-full h-auto rounded-lg border-[3px] border-black/5 p-5 bg-white"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            To move beyond subjective preferences, I developed a structured
            evaluation framework. Each option was assessed against established
            guidelines, user needs, and plain language principles, ensuring our
            decision would be grounded in objective criteria rather than
            personal opinions.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              Systematic analysis helped evaluate options against multiple
              criteria: Google's voice and tone and naming guidelines, a SWOT
              analysis, and plain language assessment.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688143b094c3af844ffe3765_Screenshot%202025-07-22%20at%2017.31.15.png"
            alt="Evaluation framework"
            loading="lazy"
            className="w-full h-auto rounded-lg border-[3px] border-black/5 p-5 bg-white"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            The analysis narrowed our options to two candidates: "statistical
            significance" (favored by data science stakeholders) and "certainty
            of lift detection" (aligned with content standards). User research
            would determine the final choice.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              Certainty of lift detection and statistical significance ended up
              being two working options.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818476617985a84c13098b_Group%20632560.png"
            alt="Two finalists"
            loading="lazy"
            className="w-full h-auto rounded-lg border-[3px] border-black/5 p-5 bg-white"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        {/* Testing Through Research Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Testing through research
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px] mb-6">
            Effective feature names should be self-explanatory. While tooltips
            and help documentation provide support, the primary terminology
            should communicate clearly without additional explanation.
          </p>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            I partnered with UX researchers to design a study comparing both
            terminology options. Participants viewed identical interfaces with
            different terminology, then explained their understanding of the
            metrics and their implications for campaign decisions.
            <br />
            <br />
            The drafted research study ensured the in-product content would be
            thoroughly validated and that both user groups understood the metric
            and metric group without needing to reference tooltips or additional
            educational information.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              The participants were divided into two groups: one would see
              "statistical significance" and the other would see "Certainty of
              lift detection," and both groups would be asked to explain what
              the term means to them.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818476617985a84c13098b_Group%20632560.png"
            alt="Research groups"
            loading="lazy"
            className="w-full h-auto rounded-lg"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            Results strongly favored "certainty of lift detection" across all
            user segments. Notably, even statistically sophisticated users found
            "statistical significance" ambiguous in this context. We further
            simplified it to "certainty of lift" based on these findings.
          </p>
        </CaseStudyLayout>
        {/* Research Comparison Grid */}
        <CaseStudyLayout maxWidth="816px">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-white rounded-lg border-[3px] border-black/5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]">
            <div>
              <img
                src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688184bc30b0f8ce8074082f_Group%20130.png"
                alt="Statistical significance"
                loading="lazy"
                className="w-full h-auto rounded-lg mb-4" />

              <div className="font-mono text-gray-700 text-xs font-normal leading-[19.2px] p-2.5">
                <strong>
                  Statistical significance
                  <br />
                </strong>
                - More stats savvy users preferred this because they use this
                language today
                <br />
                - Less stats savvy users preferred this because it seemed more
                technical and exact
                <br />
                - More universal term, specific to stats
                <br />- Most users could not explain how it's calculated
              </div>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/688184c03a9d10b784a2cbef_Group%20131.png"
                alt="Certainty of lift detection"
                loading="lazy"
                className="w-full h-auto rounded-lg mb-4" />

              <div className="font-mono text-gray-700 text-xs font-normal leading-[19.2px] p-2.5">
                <strong>
                  Certainty of lift detection
                  <br />‍
                </strong>
                - More specific term to lift
                <br />
                - Users deduced the meaning by using context clues
                <br />
                - Lift detection means they got lift, and certainty is how
                accurate the results are
                <br />- Both more and less stats savvy users preferred this
                because it was easier to understand and explain to others
              </div>
            </div>
          </div>
        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            We launched this experience to a cohort of 50 advertisers. Prior to
            the launch, the team wanted to validate the experience's usability
            and confirm users correctly comprehended the new metric. Before a
            market release, our research partners conducted a quantitative study
            to measure and validate key user perceptions. The survey included
            questions to specifically confirm that this initial cohort
            interpreted the new metric as we intended. This provided the
            data-backed signal we needed to de-risk the launch.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              Out of 132 respondents, 15 participants selected the incorrect
              question. While this indicated an opportunity to improve our
              educational content, the survey confirmed that the metric naming
              was effective.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/689630b9f0bf361d7890dbae_Frame%20632571.png"
            alt="Survey results"
            loading="lazy"
            className="w-full h-auto rounded-lg p-3 bg-white border-[3px] border-black/5"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        {/* Creating an easy-to-read page Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Creating an easy-to-read page
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            With validated terminology, I focused on designing the complete user
            experience. The goal was to make statistical results both
            comprehensible and actionable for decision-making.
            <br />
            <br />I explored approaches that combined metric definitions with
            contextual guidance based on confidence levels, moving beyond simple
            percentage displays to provide meaningful interpretation.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              A few iterations of the headline and subhead copy for the Star
              tag.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818aa94a83be540f37746d_Group%20632542.png"
            alt="Star tag iterations"
            loading="lazy"
            className="w-full h-auto rounded-lg"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            Research revealed two primary use cases: some advertisers required
            statistical validation for major decisions, while others sought
            directional insights for ongoing optimization. Our content strategy
            needed to accommodate both scenarios effectively.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="816px">
          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/6881851135f6c4b57b87c444_Group%20632550.png"
            alt="Use case comparison"
            loading="lazy"
            className="w-full h-auto rounded-lg"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        <CaseStudyLayout maxWidth="734px">
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            To align stakeholders on tooltip language, I developed two
            versions—one using plain language and another with technical
            terminology. Demonstrating that the accessible version maintained
            accuracy while improving comprehension secured stakeholder approval.
          </p>
        </CaseStudyLayout>
        <CaseStudyLayout
          maxWidth="816px"
          caption={
          <CaptionText>
              Balanced clarity with accuracy to ensure both technical and
              non-technical users could understand and trust the results.
            </CaptionText>
          }>

          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/68818accbf7f140bd554d796_Group%20632544.png"
            alt="Tooltip versions"
            loading="lazy"
            className="w-full h-auto rounded-lg"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px -2px'
            }} />

        </CaseStudyLayout>
        {/* Learnings Section */}
        <CaseStudyLayout maxWidth="734px">
          <h2 className="font-sans text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6">
            Learnings
          </h2>
          <p className="font-sans text-gray-700 text-lg leading-[28.8px]">
            The project delivered measurable improvements: over 50% of users
            found brand lift campaigns easy to use, and 90% understood
            "Certainty of lift."
            <br />
            <br />
            Key learnings: Complex concepts don't require complex
            language—simple terminology that resonates with users can maintain
            technical accuracy while bridging knowledge gaps. Showing results
            below traditional significance thresholds proved valuable, with 70%
            of users preferring directional insights over no information. Most
            importantly, user research revealed that terminology seeming
            "oversimplified" to internal stakeholders was optimal for actual
            users—validating evidence-based content decisions over intuition.
          </p>
        </CaseStudyLayout>
        </div>
      </main>
      <Footer variant="case-study" />
    </div>
  );

}