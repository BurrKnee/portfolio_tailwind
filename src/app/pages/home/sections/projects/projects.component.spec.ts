import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CaseStudyModalComponent } from './case-study-modal/case-study-modal.component';
import { projects } from './data';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent, CaseStudyModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one project card per configured project', () => {
    const cards = fixture.debugElement.queryAll(By.css('.project'));

    expect(cards.length).toBe(projects.length);
    expect(cards[0].nativeElement.textContent).toContain(projects[0].title);
  });

  it('opens a case study and locks body scroll', () => {
    component.openCaseStudy(projects[0]);

    expect(component.selectedProject).toBe(projects[0]);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('closes a case study and restores body scroll', () => {
    component.openCaseStudy(projects[0]);

    component.closeCaseStudy();

    expect(component.selectedProject).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });

  it('opens the selected project when the read case study button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.case-study-toggle'));

    button.triggerEventHandler('click', {
      stopPropagation: jasmine.createSpy('stopPropagation'),
    });
    fixture.detectChanges();

    expect(component.selectedProject).toBe(projects[0]);
  });
});
