import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Project } from '../projects.models';
import { CaseStudyModalComponent } from './case-study-modal.component';

describe('CaseStudyModalComponent', () => {
  let component: CaseStudyModalComponent;
  let fixture: ComponentFixture<CaseStudyModalComponent>;

  const projectWithSections: Project = {
    title: 'Structured Project',
    image: 'assets/img/example.png',
    alt: 'Example project',
    summary: 'A project with section-based case study content.',
    stack: ['UX'],
    links: [
      {
        icon: 'article',
        label: 'Read more',
        href: '/example',
      },
    ],
    caseStudy: {
      problem: 'Legacy problem',
      solution: ['Legacy solution'],
      outcome: ['Legacy outcome'],
      sections: [
        {
          title: 'Overview',
          icon: 'overview',
          paragraphs: ['Overview paragraph'],
        },
        {
          title: 'Outcome',
          icon: 'trending_up',
          bullets: ['Impact point'],
        },
      ],
    },
  };

  const projectWithoutSections: Project = {
    title: 'Fallback Project',
    image: 'assets/img/example.png',
    alt: 'Fallback project',
    summary: 'A project using the legacy case study format.',
    stack: ['Research'],
    links: [],
    caseStudy: {
      problem: 'Fallback problem',
      solution: ['Fallback solution'],
      outcome: ['Fallback impact'],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseStudyModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyModalComponent);
    component = fixture.componentInstance;
  });

  it('does not render the dialog when no project is provided', () => {
    component.project = null;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[role="dialog"]'))).toBeNull();
  });

  it('renders section-based case study content when sections are provided', () => {
    component.project = projectWithSections;
    fixture.detectChanges();

    const sections = fixture.debugElement.queryAll(
      By.css('.case-study-section')
    );
    const links = fixture.debugElement.queryAll(
      By.css('.case-study-modal__link')
    );
    const text = fixture.nativeElement.textContent;

    expect(sections.length).toBe(2);
    expect(links.length).toBe(1);
    expect(text).toContain('Overview');
    expect(text).toContain('Overview paragraph');
    expect(text).toContain('Impact point');
    expect(text).not.toContain('Challenge');
  });

  it('renders the fallback challenge, approach, and impact sections when no sections are provided', () => {
    component.project = projectWithoutSections;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Challenge');
    expect(text).toContain('Approach');
    expect(text).toContain('Impact');
    expect(text).toContain('Fallback problem');
    expect(text).toContain('Fallback solution');
    expect(text).toContain('Fallback impact');
  });

  it('emits close when the close button is clicked', () => {
    component.project = projectWithSections;
    fixture.detectChanges();
    spyOn(component.close, 'emit');

    const closeButton = fixture.debugElement.query(
      By.css('.case-study-modal__close')
    );
    closeButton.triggerEventHandler('click', new MouseEvent('click'));

    expect(component.close.emit).toHaveBeenCalled();
  });

  it('emits close when the backdrop is clicked', () => {
    component.project = projectWithSections;
    fixture.detectChanges();
    spyOn(component.close, 'emit');

    const backdrop = fixture.debugElement.query(By.css('.case-study-modal'));
    backdrop.triggerEventHandler('click', new MouseEvent('click'));

    expect(component.close.emit).toHaveBeenCalled();
  });

  it('does not emit close when the panel is clicked', () => {
    component.project = projectWithSections;
    fixture.detectChanges();
    spyOn(component.close, 'emit');

    const stopPropagation = jasmine.createSpy('stopPropagation');
    const panel = fixture.debugElement.query(
      By.css('.case-study-modal__panel')
    );
    panel.triggerEventHandler('click', { stopPropagation });

    expect(stopPropagation).toHaveBeenCalled();
    expect(component.close.emit).not.toHaveBeenCalled();
  });

  it('renders project links with their href attributes', () => {
    component.project = projectWithSections;
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('.case-study-modal__link'));

    expect(link.attributes['href']).toBe('/example');
    expect(link.nativeElement.textContent).toContain('Read more');
  });

  it('adds the sticky header shadow after the panel is scrolled', () => {
    component.project = projectWithSections;
    fixture.detectChanges();

    const panel = fixture.debugElement.query(
      By.css('.case-study-modal__panel')
    );
    const header = fixture.debugElement.query(
      By.css('.case-study-modal__header')
    );

    panel.triggerEventHandler('scroll', {
      target: { scrollTop: 24 },
    });
    fixture.detectChanges();

    expect(header.nativeElement.classList).toContain(
      'case-study-modal__header--scrolled'
    );
  });
});
