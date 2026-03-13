export interface ProjectLink {
  icon: string;
  label: string;
  href: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string[];
  outcome: string[];
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
