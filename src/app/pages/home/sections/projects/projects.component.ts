import { Component } from '@angular/core';
import { projects } from './data';
import { Project } from './projects.models';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
})
export class ProjectsComponent {
  selectedProject: Project | null = null;

  projects = projects;

  openCaseStudy(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeCaseStudy(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  trackByProjectTitle(index: number, project: Project): string {
    return project.title;
  }
}
