import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Project } from '../projects.models';

@Component({
  selector: 'app-case-study-modal',
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.scss'],
  standalone: false,
})
export class CaseStudyModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  requestClose(): void {
    this.close.emit();
  }
}
