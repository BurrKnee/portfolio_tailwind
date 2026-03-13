import { Project } from '../projects.models';

export const contentStrategyProject: Project = {
  title: 'Content Strategy',
  image: 'assets/img/portfolio/land-grant-goods.png',
  alt: 'Land Grant Goods brand materials',
  summary:
    'Land Grant Goods, a student-run company producing honey, jam, and tea, needed a cohesive content strategy for promoting products and engaging with their audience. As part of a team of four UX designers, a comprehensive guide was created to ensure consistent messaging across all platforms. This document serves as a clear, accessible resource for current and future team members, streamlining communication and brand voice.',
  stack: ['Content strategy', 'UX research', 'Brand voice', 'Documentation'],
  links: [
    {
      icon: 'article',
      label: 'Open PDF case study',
      href: 'assets/files/Land-Grant-Goods.pdf',
    },
  ],
  caseStudy: {
    problem:
      'The team needed a repeatable content system so product promotion and brand voice would stay consistent as membership changed over time.',
    solution: [
      'Worked with a four-person UX team to define audience needs, messaging patterns, and content priorities.',
      'Documented brand voice guidance in a format that was practical for future student teams to use.',
      'Turned strategy into an accessible reference rather than a one-time presentation artifact.',
    ],
    outcome: [
      'Delivered a shared source of truth for messaging across channels.',
      'Reduced ambiguity for current and future contributors creating content.',
      'Created a strategy asset that supports continuity in a student-run organization.',
    ],
  },
};
