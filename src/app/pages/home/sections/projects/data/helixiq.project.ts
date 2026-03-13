import { Project } from '../projects.models';

export const helixIqProject: Project = {
  title: 'HelixIQ',
  image: 'assets/img/portfolio/purple-hex.png',
  alt: 'HelixIQ brand mark',
  summary:
    'Secure AI for sensitive industries, built to run inside your environment with full data control. HelixIQ uses only approved internal content to deliver compliant, accurate answers and faster workflows across government, healthcare, and regulated enterprise teams. Air-gapped and private cloud friendly, it supports modern AI without sacrificing sovereignty or security.',
  stack: [
    'AI product messaging',
    'Enterprise UX',
    'Security positioning',
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
  },
};
