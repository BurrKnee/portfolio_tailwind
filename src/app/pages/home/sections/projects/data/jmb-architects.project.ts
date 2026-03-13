import { Project } from '../projects.models';

export const jmbArchitectsProject: Project = {
  title: 'JMB Architects Redesign',
  image: 'assets/img/portfolio/jmb-website.png',
  alt: 'Screenshot of the JMB Architects redesign',
  summary:
    "JMB Architects' website was redesigned, replacing an outdated platform with a Squarespace site enhanced by custom HTML and CSS. This allowed the client to easily update content without relying on a developer. The process included wireframing, high-fidelity mockups in Figma, and user testing. Within two weeks of launch, the new site generated multiple inquiries and secured a new client.",
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
  },
};
