import { Project } from '../projects.models';

export const helixIqProject: Project = {
  title: 'HelixIQ',
  image: 'assets/img/portfolio/purple-hex.png',
  alt: 'HelixIQ brand mark',
  summary:
    'HelixIQ is a secure AI platform for sensitive industries that need modern AI without giving up deployment control, data ownership, or compliance posture. I led the product design and helped shape a reusable codebase that could support multiple clients through configurable themes and deployment variables.',
  stack: [
    'Product design',
    'Design systems',
    'Enterprise UX',
    'Reusable frontend architecture',
    'Regulated environments',
  ],
  links: [
    {
      icon: 'language',
      label: 'Visit product site',
      href: 'https://gethelixiq.ai/',
    },
  ],
  caseStudy: {
    problem:
      'Organizations in regulated environments need AI capabilities, but standard SaaS patterns create trust, compliance, and data-sovereignty concerns.',
    solution: [
      'Framed the product around private deployment, approved-source retrieval, and operational control.',
      'Simplified technical messaging so buyers could quickly understand where the platform fits and why it is safer.',
      'Connected security requirements to concrete workflow benefits instead of treating compliance as a separate sales argument.',
    ],
    outcome: [
      'Produced a more credible narrative for AI adoption in sensitive environments.',
      'Made the value proposition clearer for government, healthcare, and other regulated teams.',
      'Balanced innovation messaging with the operational realities buyers care about most.',
    ],
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'HelixIQ was positioned as secure AI for government, healthcare, defense, and other regulated environments where public AI tools introduce unacceptable risk. The product needed to explain technical safeguards clearly while still feeling credible and understandable to different kinds of buyers and users.',
          'I was responsible for designing the experience and helping create a codebase that could be reused across clients. The work had to support both clear product storytelling and flexible implementation across themes and deployment setups.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'Most AI products optimize for speed and convenience, but HelixIQ needed to win on control, security, and operational fit. The challenge was not just explaining secure AI. It was designing a product and marketing experience that made complex infrastructure, compliance, and deployment choices feel clear and trustworthy.',
        ],
        bullets: [
          'The platform served highly sensitive industries where vague messaging or generic SaaS patterns would undermine trust.',
          'The experience had to speak to both technical evaluators and non-technical decision-makers.',
          'The frontend needed to scale beyond one client, with reusable theming and deployment-specific variables built into the implementation.',
        ],
      },
      {
        title: 'Audience And Product Positioning',
        icon: 'groups',
        paragraphs: [
          'HelixIQ had to support multiple audiences with different evaluation criteria. Some visitors cared about compliance controls, deployment architecture, and auditability. Others needed to understand time savings, workflow relief, and day-to-day usability.',
        ],
        bullets: [
          'Technical audiences included IT leaders, security teams, architects, and engineering stakeholders.',
          'Non-technical audiences included managers, directors, frontline staff, and operational leaders.',
          'Core industries included government and defense, healthcare, and regulated enterprise teams.',
        ],
      },
      {
        title: 'My Role',
        icon: 'person',
        bullets: [
          'Led product and page design for the HelixIQ experience.',
          'Structured content so technical and non-technical visitors could each find the right level of detail.',
          'Helped shape a reusable code repository that could support multiple client themes and deployment variables.',
          'Translated security, compliance, and infrastructure concepts into a product experience that felt understandable and actionable.',
        ],
      },
      {
        title: 'Design And System Decisions',
        icon: 'route',
        bullets: [
          'Created clear pathways for technical and non-technical overviews so users could self-select the right evaluation flow.',
          'Emphasized deployment control, model flexibility, zero data escape, and auditability as core differentiators rather than buried technical details.',
          'Designed content hierarchy around high-stakes buyer questions such as where the platform runs, what data it can use, and how compliance is supported.',
          'Built the experience to communicate trust through structure, clarity, and consistency instead of hype-driven AI marketing patterns.',
          'Supported a reusable frontend architecture with configurable themes and deployment variables so the same repo could serve multiple clients without rebuilding from scratch.',
        ],
      },
      {
        title: 'Key Product Messaging',
        icon: 'campaign',
        bullets: [
          'HelixIQ runs inside the customer environment, including private cloud, self-managed, hybrid, and air-gapped deployments.',
          'The platform only uses approved internal materials such as manuals, SOPs, policies, and templates.',
          'Customers retain ownership of their data, infrastructure, and model choices.',
          'The experience supports compliance-focused environments with messaging around HIPAA, SOC 2, NIST 800-171, and ISO 27001 alignment.',
          'End users get a familiar conversational workflow while technical teams retain governance and visibility.',
        ],
      },
      {
        title: 'Deliverables',
        icon: 'inventory_2',
        bullets: [
          'Product page and information architecture for the HelixIQ offering.',
          'Technical and non-technical evaluation pathways.',
          'Messaging structure for security, deployment, compliance, and operational impact.',
          'Reusable repository patterns for theme customization and deployment-specific configuration.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The result was a product experience that positioned HelixIQ as a serious platform for regulated environments rather than a generic AI tool with added compliance language. The design clarified why the product was different, who it was for, and how it could be deployed without compromising control.',
        ],
        bullets: [
          'Created a clearer story for both technical and non-technical audiences.',
          'Made secure deployment, data sovereignty, and model flexibility more understandable at a glance.',
          'Established a reusable implementation foundation that can support multiple clients more efficiently.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'This project reinforced that enterprise AI design is not only about interface polish. It also requires shaping trust, reducing ambiguity, and building systems that are flexible enough to support different clients and deployment realities over time.',
        ],
      },
    ],
  },
};
