import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeroComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the portfolio owner name in the hero heading', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h1'));

    expect(heading.nativeElement.textContent.trim()).toBe('BERNIE BELCHER');
  });

  it('renders the designer and developer title text', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('.loader'));
    const text = title.nativeElement.textContent.replace(/\s+/g, ' ').trim();

    expect(text).toContain('UX');
    expect(text).toContain('Designer/Developer');
  });

  it('renders one animated span per title character', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();

    const letters = fixture.debugElement.queryAll(By.css('.loader .m'));

    expect(letters.length).toBe(21);
  });
});
