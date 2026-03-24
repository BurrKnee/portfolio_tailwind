import { Project } from '../projects.models';

export const woprProject: Project = {
  title: 'WOPR',
  image: 'assets/img/portfolio/wopr/fti-wopr.png',
  alt: 'WOPR platform preview',
  summary:
    'WOPR is a next-generation wargaming platform for mission planning, simulation, analysis, and collaboration across multiple domains. I contributed to the frontend design and implementation, working with tools like Mapbox and Angular CDK to support real-time visualization, multi-window workflows, and communication tools for audit and analysis teams.',
  stack: [
    'Frontend design',
    'Angular',
    'Data visualization',
    'Mapbox',
    'Collaboration',
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
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'WOPR is an end-to-end wargaming platform built to support planning, execution, adjudication, analysis, and mission expansion across land, sea, air, space, cyber, and logistics. The product had to handle complex operational data while remaining usable for a broad mix of planners, adjudicators, analysts, and leaders.',
          'My work focused on frontend design and implementation, helping shape an interface that could support real-time data visualization, multiple concurrent working views, and collaboration patterns for teams working in fast-moving analysis environments.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'Wargaming platforms are inherently complex. Users need to monitor data, analyze effects, communicate with teammates, and shift between tactical and strategic views without losing context. That creates a difficult UX challenge: delivering depth without overwhelming the people using it during time-sensitive work.',
        ],
        bullets: [
          'The interface needed to support live operational data and rapid rendering updates.',
          'Different users needed different views of the same scenario, from maps to move analysis to communication tools.',
          'The product had to feel flexible enough for mission-specific workflows rather than forcing teams into a single rigid interface.',
        ],
      },
      {
        title: 'My Role',
        icon: 'person',
        bullets: [
          'Contributed to frontend design for key parts of the WOPR experience.',
          'Worked hands-on with libraries such as Mapbox and Angular CDK drag to support advanced interface behaviors.',
          'Helped implement multi-window interactions so teams could manage several views at once.',
          'Supported collaboration features including instant chat and a forum-style communication layer for audit teams.',
        ],
      },
      {
        title: 'Technical And UX Challenges',
        icon: 'construction',
        bullets: [
          'Integrated real-time data visualization and rendering into a workflow that still needed to feel readable and operationally useful.',
          'Used Mapbox to support spatial and mission-oriented views where geographic context mattered.',
          'Used Angular CDK drag to enable movable windowed interfaces and more flexible workspace behavior.',
          'Balanced dense information needs with an interface that could still be navigated under pressure.',
          'Designed for collaboration, not just individual analysis, so communication tools could sit alongside live scenario data.',
        ],
      },
      {
        title: 'Design And System Decisions',
        icon: 'route',
        bullets: [
          'Supported customizable visualizations so teams could view scenarios in ways that matched their mission objectives.',
          'Helped create an interface model where multiple windows and panels could coexist instead of forcing users through a single fixed flow.',
          'Designed around real-time analysis and fast insight generation rather than static reporting.',
          'Connected communication features with visualization workflows so audit and analysis teams could discuss findings in context.',
          'Contributed to a product experience that could serve both expert users and broader audiences without being technically gated.',
        ],
      },
      {
        title: 'Product Capabilities Supported',
        icon: 'monitoring',
        bullets: [
          'Real-time analysis, analytics, reporting, and visuals.',
          'Global capability maps and other mission-oriented visual layers.',
          'AI-assisted workflows for move analysis, summaries, and decision support.',
          'Cross-domain views spanning cyber, space, logistics, and other mission threads.',
          'Collaboration patterns for analysts, adjudicators, players, and leaders.',
        ],
      },
      {
        title: 'Product Visual',
        icon: 'image',
        paragraphs: [
          'This visual gives the case study a direct view of the platform and helps ground the interface discussion in the actual product.',
        ],
        images: [
          {
            src: 'assets/img/portfolio/wopr/fti-wopr.png',
            alt: 'WOPR platform visual.',
            label: 'WOPR interface',
          },
        ],
      },
      {
        title: 'Map View',
        icon: 'map',
        paragraphs: [
          'This map-focused view highlights the spatial side of the platform and the kind of mission-oriented visualization the interface needed to support.',
        ],
        images: [
          {
            src: 'assets/img/portfolio/wopr/fti-wopr-map.png',
            alt: 'WOPR map view.',
            label: 'WOPR map visualization',
          },
        ],
      },
      {
        title: 'Deliverables',
        icon: 'inventory_2',
        bullets: [
          'Frontend interface design contributions for live operational workflows.',
          'Implementation work involving Mapbox-based visualization and Angular CDK drag interactions.',
          'Multi-window workspace behavior for parallel analysis.',
          'Integrated chat and forum-like communication features for audit collaboration.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The work helped push WOPR toward a more flexible frontend experience that could support high-volume information, real-time rendering, and team collaboration inside a single platform. Instead of separating visualization, analysis, and communication into disconnected tools, the interface brought them closer together.',
        ],
        bullets: [
          'Improved support for complex, data-rich workflows in a live operational setting.',
          'Made it easier for teams to work across multiple views and communication modes at once.',
          'Strengthened the product’s ability to support both analysis depth and usability.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'This project pushed me to design beyond standard web layouts. It required learning specialized libraries, thinking in terms of operational workspaces instead of single pages, and building interfaces that could handle real-time information without losing clarity.',
        ],
      },
    ],
  },
};
