import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to section when target element exists', () => {
    const scrollIntoView = jasmine.createSpy('scrollIntoView');
    const target = { scrollIntoView } as unknown as HTMLElement;
    spyOn(document, 'getElementById').and.returnValue(target);

    component.scrollToSection('section-about');

    expect(document.getElementById).toHaveBeenCalledWith('section-about');
    expect(scrollIntoView).toHaveBeenCalledOnceWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should do nothing when target element does not exist', () => {
    spyOn(document, 'getElementById').and.returnValue(null);

    expect(() => component.scrollToSection('missing-section')).not.toThrow();
    expect(document.getElementById).toHaveBeenCalledWith('missing-section');
  });
});
