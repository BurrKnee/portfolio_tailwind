import { Project } from '../projects.models';

export const cityRedesignProject: Project = {
  title: 'City Redesign',
  image: 'assets/img/portfolio/city-mockup.png',
  alt: 'City website redesign mockup',
  summary:
    "This project rethought Lansing, Michigan's city website around resident tasks instead of internal government structure. Using scenario-based UX research, competitor analysis, user flows, wireframes, and a style guide, the redesign focused on making common civic actions like paying tickets, finding jobs, reporting issues, and locating events easier to complete.",
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
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'The Lansing city website supported important public tasks, but the experience often made residents work too hard to complete them. This redesign focused on everyday actions people actually come to a city site to do, from paying tickets to finding local events.',
          'The project included landscape analysis, scenario-based research, user flows, a style guide, and wireframes that reframed the site around clearer service pathways.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'Municipal websites carry high-intent traffic. People are not browsing casually. They are usually trying to solve a problem quickly. When critical services are buried, mislabeled, or split across inconsistent screens, trust drops and task completion suffers.',
        ],
        bullets: [
          'Key service journeys such as permits and ticket payment were not always straightforward.',
          'Important information was fragmented across pages and, in some cases, led to dead ends or confusing handoffs.',
          'The experience did not feel equally usable across desktop and mobile contexts.',
        ],
      },
      {
        title: 'Audience And Use Cases',
        icon: 'groups',
        paragraphs: [
          'The redesign was framed around realistic resident scenarios rather than generic personas. That kept the work focused on why people visit a city site and what success looks like in each flow.',
        ],
        bullets: [
          'A parent trying to get a burn permit encountered broken or confusing application paths.',
          'A college student wanted to discover events happening in the city on a specific date.',
          'A working professional needed to pay a parking ticket with minimal friction.',
          'A job seeker looked for local employment opportunities through the city site.',
          'A resident wanted to report a pothole quickly from a mobile device and understand what happened next.',
        ],
      },
      {
        title: 'Research And Inputs',
        icon: 'fact_check',
        paragraphs: [
          'The case study materials point to several core research inputs: a landscape analysis of other city websites, scenario walkthroughs for common tasks, and supporting user-flow work. Together, these helped identify where the existing Lansing experience was succeeding and where it broke down.',
        ],
        bullets: [
          'Reviewed official city websites to compare service discovery, navigation, and civic information patterns.',
          'Mapped realistic task-based scenarios to reveal friction points and dead ends.',
          'Used those scenarios to guide user flows and wireframe priorities.',
        ],
      },
      {
        title: 'Key Findings',
        icon: 'search_insights',
        bullets: [
          'Search and direct task entry were important, especially for users arriving with one clear goal.',
          'Residents benefited when high-priority actions such as bill payment and issue reporting were surfaced early.',
          'Mobile usability mattered because several scenarios began on a phone.',
          'Task confidence dropped when users hit broken links, unclear labels, or uncertainty about next steps.',
          'Systems that gave users clear feedback felt more trustworthy and usable.',
        ],
      },
      {
        title: 'Process And Decisions',
        icon: 'route',
        bullets: [
          'Benchmarked other municipal sites to understand stronger civic UX patterns.',
          'Built scenarios around concrete resident needs rather than abstract departmental categories.',
          'Mapped user flows for common city tasks to identify friction and missing transitions.',
          'Created wireframes that prioritized quick task completion, clearer navigation, and easier scanning.',
          'Developed a style guide to make the redesign feel more consistent, readable, and approachable.',
        ],
      },
      {
        title: 'Deliverables',
        icon: 'inventory_2',
        bullets: [
          'Landscape analysis of comparable city websites.',
          'Scenario-based task walkthroughs.',
          'User flows for common service journeys.',
          'Wireframes for redesigned pages and pathways.',
          'A visual style guide to support consistency across the system.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The redesign produced a clearer civic UX direction centered on resident intent. Instead of reflecting the city’s internal structure, the concept emphasized direct access to services, better task continuity, and a more approachable interface.',
        ],
        bullets: [
          'Made the strongest user journeys easier to understand and navigate.',
          'Created a framework for improving both usability and trust in city services.',
          'Demonstrated how civic websites can be designed around resident needs, not just organizational complexity.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'Civic UX is often judged at moments of urgency. This project reinforced that clarity, feedback, and task-first navigation matter even more when users are dealing with permits, tickets, jobs, or neighborhood issues.',
        ],
      },
    ],
  },
};
