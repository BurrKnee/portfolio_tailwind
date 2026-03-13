import { Project } from '../projects.models';

export const cityRedesignProject: Project = {
  title: 'City Redesign',
  image: 'assets/img/portfolio/city-mockup.png',
  alt: 'City website redesign mockup',
  summary:
    "A redesign of Lansing, Michigan's city website aimed to improve its usability. The site, used for tasks like paying tickets and applying for permits, was difficult to navigate. The redesign involved analyzing other city websites, developing user flows, and creating wireframes and a style guide. Extensive research was conducted to ensure a more user-friendly experience.",
  stack: ['Civic UX', 'User flows', 'Wireframing', 'Style guide'],
  links: [
    {
      icon: 'article',
      label: 'Open PDF case study',
      href: 'assets/files/Lansing-Redesign.pdf',
    },
  ],
  caseStudy: {
    problem:
      'Residents needed to complete practical service tasks, but the city site made high-intent actions difficult to find and navigate.',
    solution: [
      'Benchmarked other municipal sites to identify stronger patterns for service discovery and navigation.',
      'Mapped user flows around common tasks such as permit applications and ticket payments.',
      'Developed wireframes and a style guide to support a clearer, more approachable civic experience.',
    ],
    outcome: [
      'Produced a redesign concept grounded in service usability instead of department structure.',
      'Clarified key journeys for residents trying to complete time-sensitive tasks.',
      'Created a stronger foundation for future city-site improvements through documented UX direction.',
    ],
  },
};
