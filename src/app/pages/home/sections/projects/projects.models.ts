export interface ProjectLink {
  icon: string;
  label: string;
  href: string;
}

export interface ProjectCaseStudySection {
  title: string;
  icon: string;
  paragraphs?: string[];
  bullets?: string[];
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
