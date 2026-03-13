import { Project } from '../projects.models';

export const woprProject: Project = {
  title: 'WOPR',
  image: 'assets/img/portfolio/fti-wopr.png',
  alt: 'WOPR platform preview',
  summary:
    'WOPR is a next-generation, end-to-end wargaming platform that expands scale and collaboration across land, sea, air, space, cyber, and logistics. Built for mission-specific planning, training, and analysis, it delivers real-time insights with AI-assisted decision support, effects-based modeling, and customizable visualizations. Open, interoperable workflows enable cross-agency coordination, rapid iteration, and outcomes for leaders and operators.',
  stack: [
    'Product strategy',
    'UX design',
    'Data visualization',
    'AI-assisted workflows',
  ],
  links: [
    {
      icon: 'language',
      label: 'View project page',
      href: 'https://www.ftidefense.com/capabilities-wargaming',
    },
  ],
  caseStudy: {
    problem:
      'Mission planning and wargaming workflows often span disconnected tools, making collaboration, iteration, and decision support harder than they should be.',
    solution: [
      'Supported a platform direction centered on multi-domain operations instead of isolated planning views.',
      'Focused the experience on rapid scenario iteration, shared visibility, and configurable visual outputs for different stakeholders.',
      'Positioned AI-assisted analysis as a decision support layer inside the workflow rather than a separate tool.',
    ],
    outcome: [
      'Created a clearer product story around interoperable, end-to-end wargaming.',
      'Improved how the platform communicates scale, real-time analysis, and collaboration value to defense stakeholders.',
      'Established a stronger foundation for explaining a complex capability set in a usable, product-led way.',
    ],
  },
};
