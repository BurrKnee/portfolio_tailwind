import { Project } from '../projects.models';

export const jmbArchitectsProject: Project = {
  title: 'JMB Architects Redesign',
  image: 'assets/img/portfolio/jmb-website.png',
  alt: 'Screenshot of the JMB Architects redesign',
  summary:
    "JMB Architects had a dated website that no longer reflected the quality of the firm's work and made ongoing updates harder than they needed to be. I redesigned the site in Squarespace, using custom HTML and CSS where needed, so the client could manage content independently, especially project imagery and galleries.",
  stack: ['Squarespace', 'HTML', 'CSS', 'Figma', 'User testing'],
  links: [
    {
      icon: 'language',
      label: 'Visit live site',
      href: 'https://www.jmbarchitect.com',
    },
  ],
  caseStudy: {
    problem:
      'The previous site looked dated and made routine content updates too dependent on developer support.',
    solution: [
      'Reframed the information architecture around the pages prospective clients actually need first.',
      'Designed wireframes and high-fidelity mockups in Figma before moving into implementation.',
      'Used Squarespace with targeted HTML and CSS customization so the team could manage content after launch.',
    ],
    outcome: [
      'Delivered a more polished digital presence aligned with the firm brand.',
      'Made ongoing updates manageable for the client without a custom-code maintenance burden.',
      'The site generated multiple inquiries within two weeks and contributed to a new client win.',
    ],
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'JMB Architects needed a redesign that would modernize its online presence and better showcase the firm’s work. Because project imagery was a critical part of the site and needed regular updates, the solution had to improve both the visual design and the client’s ability to maintain the content after launch.',
          'I redesigned the site using Squarespace so the client could update text, swap images, and manage galleries without depending on a developer for every change.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'The existing website felt outdated and did not present the firm’s portfolio in a way that matched the quality of its architecture work. At the same time, the site needed to remain easy for the client to update, especially because galleries and project imagery were central to the experience.',
        ],
        bullets: [
          'The previous site looked dated and weakened the firm’s professional presentation.',
          'Project imagery and galleries needed frequent updates to stay current.',
          'The client needed a platform they could manage on their own instead of relying on ongoing developer support.',
        ],
      },
      {
        title: 'My Role',
        icon: 'person',
        bullets: [
          'Led the redesign of the JMB Architects website.',
          'Created wireframes and high-fidelity mockups in Figma to define the new structure and visual direction.',
          'Implemented the final site in Squarespace with custom HTML and CSS where needed.',
          'Made platform and design decisions around long-term client maintainability, not just launch-day polish.',
        ],
      },
      {
        title: 'Key Decisions',
        icon: 'route',
        bullets: [
          'Chose Squarespace as the implementation platform so the client could update content and galleries independently.',
          'Prioritized portfolio presentation and visual hierarchy so the architecture work could lead the experience.',
          'Used custom HTML and CSS selectively to improve the design without sacrificing CMS usability.',
          'Structured the site so routine content maintenance would be simple for a non-technical client.',
        ],
      },
      {
        title: 'Design Focus',
        icon: 'design_services',
        bullets: [
          'Modernized the visual language to replace the dated look and feel of the previous site.',
          'Improved the presentation of galleries and imagery so the work itself became the focal point.',
          'Created a cleaner, more professional digital presence aligned with the expectations of prospective architecture clients.',
        ],
      },
      {
        title: 'Deliverables',
        icon: 'inventory_2',
        bullets: [
          'Wireframes and high-fidelity mockups in Figma.',
          'A redesigned Squarespace website tailored to the client’s content needs.',
          'Custom HTML and CSS enhancements where the default platform needed refinement.',
          'A maintainable CMS setup for independent content and gallery updates.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The redesigned site gave JMB Architects a stronger online presence while also reducing future maintenance friction. Instead of shipping a polished site that would become difficult to maintain, the redesign balanced visual quality with practical ownership for the client.',
        ],
        bullets: [
          'Delivered a more current and credible presentation of the firm’s work.',
          'Made it easier for the client to update imagery and gallery content on their own.',
          'Generated multiple inquiries within two weeks of launch and contributed to a new client win.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'This project reinforced that the best platform choice is not always the most custom one. In this case, Squarespace was the right solution because it matched the client’s operational needs and made the website sustainable after handoff.',
        ],
      },
    ],
  },
};
