import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AboutComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the about section heading and intro copy', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h1'));
    const content = fixture.nativeElement.textContent;

    expect(heading.nativeElement.textContent.trim()).toBe('About');
    expect(content).toContain('Creative and detail-driven professional');
    expect(content).toContain('data-driven insights');
  });

  it('renders the memoji image', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('.memoji img'));

    expect(image.attributes['src']).toContain('assets/img/memoji.png');
    expect(image.attributes['alt']).toBe('memoji');
  });

  it('renders the expected developer skill links', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();

    const links = fixture.debugElement.queryAll(By.css('.dev-logos a'));
    const labels = links.map((link) =>
      link.nativeElement.textContent.replace(/\s+/g, ' ').trim()
    );

    expect(links.length).toBe(12);
    expect(labels).toContain('HTML5');
    expect(labels).toContain('Angular');
    expect(labels).toContain('Docker');
  });

  it('renders external links with safe target and rel attributes', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();

    const firstLink = fixture.debugElement.query(By.css('.dev-logos a'));

    expect(firstLink.attributes['target']).toBe('_blank');
    expect(firstLink.attributes['rel']).toBe('noopener noreferrer');
  });
});
