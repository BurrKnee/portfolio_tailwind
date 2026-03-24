import { Project } from '../projects.models';

import { cityRedesignProject } from './city-redesign.project';
import { contentStrategyProject } from './content-strategy.project';
import { experienceDistilledProject } from './experience-distilled.project';
import { helixIqProject } from './helixiq.project';
import { jmbArchitectsProject } from './jmb-architects.project';
import { woprProject } from './wopr.project';

export const projects: Project[] = [
  jmbArchitectsProject,
  woprProject,
  experienceDistilledProject,
  helixIqProject,
  contentStrategyProject,
  cityRedesignProject,
];
