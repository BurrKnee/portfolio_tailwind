import { Project } from '../projects.models';

export const contentStrategyProject: Project = {
  title: 'Content Strategy',
  image: 'assets/img/portfolio/content-strategy/land-grant-goods.png',
  alt: 'Land Grant Goods brand materials',
  summary:
    'Land Grant Goods, a student-run company producing honey, jam, and tea at Michigan State, needed a content system that could survive leadership turnover and keep the website, product messaging, and social channels aligned. Working on a four-person UX team, I helped create a strategy guide that turned research into repeatable rules for content, governance, and site structure.',
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
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'Land Grant Goods is a student-run company at Michigan State University producing honey, jam, and tea. Because leadership was about to transition, the team needed more than a few design recommendations. They needed a system future members could actually run.',
          'The final deliverable was a long-form content strategy guide that documented how the brand should communicate, how the website should be organized, and how content decisions should be made over time.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'Content decisions were at risk of becoming inconsistent as new student leaders rotated in. Without shared standards, the website, social channels, and product messaging could drift, creating confusion for both customers and internal contributors.',
        ],
        bullets: [
          'The brand needed a clearer voice and tone across web and social content.',
          'Website navigation and page structure created confusion for users trying to find products and information.',
          'The organization needed documented workflows so content would remain usable after leadership changes.',
        ],
      },
      {
        title: 'Audience And Goals',
        icon: 'groups',
        paragraphs: [
          'The primary audience was the Michigan State community, especially students, staff, and alumni. A secondary audience included local Lansing-area businesses and community partners already connected to the brand.',
        ],
        bullets: [
          'Increase product sales by strengthening trust and brand awareness.',
          'Create more consistent messaging across the website and social media.',
          'Make product and company information easier to find and maintain.',
          'Build a durable framework that future team members could follow without guesswork.',
        ],
      },
      {
        title: 'Research And Inputs',
        icon: 'fact_check',
        paragraphs: [
          'The strategy was grounded in multiple inputs rather than preference alone. Recommendations were based on leadership interviews, user feedback from Michigan State students, and comparisons to similar companies selling tea, honey, and related products.',
        ],
        bullets: [
          'Stakeholder interviews clarified business priorities and operational realities.',
          'User feedback exposed pain points in navigation, labeling, and information architecture.',
          'Competitive review helped benchmark how similar brands handled product storytelling and trust-building content.',
        ],
      },
      {
        title: 'Process And Decisions',
        icon: 'route',
        bullets: [
          'Defined business goals, content objectives, and measurements so the team could evaluate whether content supported sales and engagement.',
          'Created website templates and sitemap recommendations to reduce redundancy and improve navigation clarity.',
          'Built a style guide covering typography, tone, imagery, and brand color usage to unify the visual and written experience.',
          'Outlined social media guidance for Instagram, Facebook, and Twitter with channel-specific posting expectations and tone.',
          'Documented governance, QA testing, usability testing, maintenance rhythms, and troubleshooting workflows so the system could be sustained.',
          'Included SEO and metadata guidance to improve discoverability and make product information easier to find through search.',
        ],
      },
      {
        title: 'Deliverables',
        icon: 'inventory_2',
        bullets: [
          'Strategy brief with audience definitions and business goals.',
          'Content objectives and measurement plan.',
          'Website sitemap and page template recommendations.',
          'Typography, voice, tone, and imagery style guide.',
          'Social media content strategy for major channels.',
          'Maintenance, QA, usability testing, governance, and SEO guidelines.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The project gave Land Grant Goods a practical source of truth for how content should be created, reviewed, and maintained. Instead of leaving the team with abstract recommendations, we delivered an operational guide that connected business goals to everyday content decisions.',
        ],
        bullets: [
          'Created continuity for future student teams during leadership transition.',
          'Reduced ambiguity around website structure, product messaging, and social content.',
          'Turned research findings into concrete templates, standards, and workflows the organization could apply immediately.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'This project reinforced that content strategy is not just copy guidance. At its best, it defines the rules, structures, and decision-making processes that let a brand stay coherent as people, priorities, and channels change.',
        ],
      },
    ],
  },
};
