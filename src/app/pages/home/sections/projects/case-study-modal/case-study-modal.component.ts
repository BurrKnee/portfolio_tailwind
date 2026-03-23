import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Project } from '../projects.models';

@Component({
  selector: 'app-case-study-modal',
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.scss'],
  standalone: false,
})
export class CaseStudyModalComponent {
  private _project: Project | null = null;

  @Input()
  set project(value: Project | null) {
    this._project = value;
    this.isScrolled = false;
  }

  get project(): Project | null {
    return this._project;
  }

  @Output() close = new EventEmitter<void>();
  isScrolled = false;

  requestClose(): void {
    this.close.emit();
  }

  onPanelScroll(event: Event): void {
    const panel = event.target as HTMLElement;
    this.isScrolled = panel.scrollTop > 0;
  }
}
