export interface ProjectLink {
  icon: string;
  label: string;
  href: string;
  iconSrc?: string;
  iconAlt?: string;
  badgeSrc?: string;
  badgeAlt?: string;
}

export interface ProjectCaseStudyImage {
  src: string;
  alt: string;
  label: string;
}

export interface ProjectCaseStudySection {
  title: string;
  icon: string;
  paragraphs?: string[];
  bullets?: string[];
  images?: ProjectCaseStudyImage[];
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string[];
  outcome: string[];
  sections?: ProjectCaseStudySection[];
}

export interface Project {
  title: string;
  image: string;
  alt: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  caseStudy: ProjectCaseStudy;
}
