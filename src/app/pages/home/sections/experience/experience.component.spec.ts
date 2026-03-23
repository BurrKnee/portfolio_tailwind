import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeComponent } from 'src/app/shared/ui/badge/badge.component';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent, BadgeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the section heading and resume download link', () => {
    const heading = fixture.debugElement.query(By.css('h1'));
    const resumeLink = fixture.debugElement.query(By.css('a[download]'));

    expect(heading.nativeElement.textContent.trim()).toBe('Experience');
    expect(resumeLink.attributes['href']).toContain(
      'assets/files/Bernie-Belcher-Resume.pdf',
    );
    expect(resumeLink.attributes['download']).toBe('Bernie-Belcher-Resume');
    expect(resumeLink.nativeElement.textContent).toContain('Download Resume');
  });

  it('renders all timeline experience entries', () => {
    const items = fixture.debugElement.queryAll(By.css('ol > li'));
    const text = fixture.nativeElement.textContent;

    expect(items.length).toBe(4);
    expect(text).toContain('UX Developer');
    expect(text).toContain('Design Lead / Frontend Developer');
    expect(text).toContain('UX Designer');
    expect(text).toContain('User Experience Intern');
  });

  it('shows the current role as latest', () => {
    const latestBadge = fixture.debugElement.query(By.css('li:first-child h3 span'));

    expect(latestBadge.nativeElement.textContent.trim()).toBe('Latest');
  });

  it('renders the expected company names and date ranges', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('AgileSRC');
    expect(text).toContain('JMB Architects');
    expect(text).toContain('Lodge Lovers');
    expect(text).toContain('The Radisson');
    expect(text).toContain('Mar 2022 - Present');
    expect(text).toContain('Jan 2012 - May 2022');
  });

  it('renders badge components for skills across roles', () => {
    const badges = fixture.debugElement.queryAll(By.directive(BadgeComponent));
    const badgeText = badges.map((badge) =>
      badge.nativeElement.textContent.replace(/\s+/g, ' ').trim(),
    );

    expect(badges.length).toBe(10);
    expect(badgeText).toContain('Angular');
    expect(badgeText).toContain('FastAPI');
    expect(badgeText).toContain('Figma');
    expect(badgeText).toContain('User Research');
  });
});
