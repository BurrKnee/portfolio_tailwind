import { Project } from '../projects.models';

export const experienceDistilledProject: Project = {
  title: 'Experience Distilled',
  image: 'assets/img/portfolio/experience-distilled/experience-distilled.png',
  alt: 'Experience Distilled mobile app screens',
  summary:
    'Experience Distilled is a distillery calculator app that brings proofing, gauging, and conversion tools into one mobile workflow. I helped design and build it in Figma and React Native, turning industry-specific calculations into a practical app for day-to-day use and making common distillery tasks faster, clearer, and easier to handle in the field.',
  stack: [
    'React Native',
    'Figma',
    'Mobile app design',
    'Product design',
    'Calculator UX',
  ],
  links: [
    {
      icon: 'language',
      label: 'Visit website',
      href: 'https://www.expdistilled.com/',
    },
    {
      icon: 'phone_iphone',
      label: 'View on the App Store',
      href: 'https://apps.apple.com/us/app/experience-distilled/id6748838859',
      iconSrc: 'assets/svg/logo/apple-app-store.svg',
      iconAlt: 'Apple App Store icon',
      badgeSrc: 'assets/img/app-stores/app-store.png',
      badgeAlt: 'Download on the App Store',
    },
    {
      icon: 'android',
      label: 'View on Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.ExperienceDistilled.Mobile',
      iconSrc: 'assets/svg/logo/google-play.svg',
      iconAlt: 'Google Play icon',
      badgeSrc: 'assets/img/app-stores/google-play.png',
      badgeAlt: 'Get it on Google Play',
    },
  ],
  caseStudy: {
    problem:
      'Distillers often rely on printed TTB charts, manual conversions, or scattered tools for routine proofing and gauging work, which adds friction to time-sensitive operational tasks.',
    solution: [
      'Designed a mobile-first calculator experience around the proofing and conversion tasks distillers use most often.',
      'Used Figma to shape the flows and interface before implementation.',
      'Built the app in React Native so the product could ship across iOS and Android from one codebase.',
    ],
    outcome: [
      'Made distillery calculations faster and more accessible in the field.',
      'Created a tool that reinforces the broader Experience Distilled consulting brand.',
      'Turned complex reference-based workflows into a cleaner mobile product experience.',
    ],
    sections: [
      {
        title: 'Overview',
        icon: 'overview',
        paragraphs: [
          'Experience Distilled is a mobile app for distillers who need quick access to gauging, proofing, and conversion calculations without constantly referencing printed charts or manuals. The app brings distillery-focused tools into one place so users can handle common calculations on the spot.',
          'I helped design and create the app using Figma and React Native, translating specialized industry workflows into a mobile experience that felt direct, efficient, and usable in real working conditions.',
        ],
      },
      {
        title: 'Problem',
        icon: 'warning',
        paragraphs: [
          'The app needed to support a range of alcohol-industry calculations while staying simple enough for quick use in day-to-day operations. This was not a generic calculator problem. It required understanding the context in which distillers work and reducing the friction around tasks they perform repeatedly.',
        ],
        bullets: [
          'Distillers needed an easier alternative to looking up conversion charts in the TTB Gauging Manual.',
          'The product had to support many calculators without feeling cluttered or difficult to navigate.',
          'The app also needed to connect naturally to the Experience Distilled consulting business and industry credibility.',
        ],
      },
      {
        title: 'My Role',
        icon: 'person',
        bullets: [
          'Helped design the app experience in Figma.',
          'Helped build the app in React Native.',
          'Worked on turning specialized calculation workflows into a clearer mobile UX.',
          'Contributed to a product that supports both operational utility and brand trust.',
        ],
      },
      {
        title: 'Core Tools',
        icon: 'calculate',
        bullets: [
          'True Proof, Corrected Wine Gallons, and Proof Gallon Estimator.',
          'Proofing Up and Proofing Down workflows.',
          'Potential ABV and other unit conversion utilities.',
          'A broader set of distillery-focused calculators designed to replace manual lookups and speed up field decisions.',
        ],
      },
      {
        title: 'Product Direction',
        icon: 'route',
        bullets: [
          'Prioritized speed and clarity for frequent repeat tasks.',
          'Organized the experience around practical distillery workflows rather than generic calculator conventions.',
          'Designed for cross-platform delivery so the same product could reach users on both major mobile platforms.',
          'Connected the app to the company website and broader service offering as part of a larger business ecosystem.',
        ],
      },
      {
        title: 'App Screens',
        icon: 'image',
        paragraphs: [
          'These screens show how the app translated specialized distillery calculations into a mobile interface that stays focused, readable, and practical in use.',
        ],
        images: [
          {
            src: 'assets/img/portfolio/experience-distilled/6.9-1.jpg',
            alt: 'Experience Distilled app screen 1.',
            label: 'Screen 1',
          },
          {
            src: 'assets/img/portfolio/experience-distilled/6.9-2.jpg',
            alt: 'Experience Distilled app screen 2.',
            label: 'Screen 2',
          },
          {
            src: 'assets/img/portfolio/experience-distilled/6.9-3.jpg',
            alt: 'Experience Distilled app screen 3.',
            label: 'Screen 3',
          },
        ],
      },
      {
        title: 'Business Context',
        icon: 'groups',
        paragraphs: [
          'The app sits alongside Experience Distilled’s broader consulting work helping distilleries improve operations, supply chain performance, compliance, profitability, and strategic direction. That context mattered because the app was both a useful product and an extension of the team’s industry expertise.',
        ],
        bullets: [
          'The team positions itself around 35+ years of combined experience in the alcohol beverage industry.',
          'Its broader work includes process improvement, brand portfolio refinement, safety and compliance support, valuation, M&A-related services, and operational advising.',
          'The app gives distillers a direct utility while reinforcing the brand behind it.',
        ],
      },
      {
        title: 'Outcome',
        icon: 'trending_up',
        paragraphs: [
          'The result was a focused mobile app that made specialized calculations easier to access while strengthening the Experience Distilled brand. Instead of forcing users through a patchwork of references and manual conversions, the product brought essential tools into a faster and more approachable workflow.',
        ],
        bullets: [
          'Delivered a more convenient calculator experience for distillers.',
          'Supported both iOS and Android distribution from a shared React Native codebase.',
          'Combined niche industry utility with stronger product and business presentation.',
        ],
      },
      {
        title: 'Takeaway',
        icon: 'lightbulb',
        paragraphs: [
          'This project reinforced that strong mobile UX in specialized industries comes from fitting the user’s real operating context. The value was not novelty. It was making the right calculations easier, faster, and more reliable when people actually need them.',
        ],
      },
    ],
  },
};
