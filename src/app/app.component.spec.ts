import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ParticlesConfig } from 'src/assets/data/particles';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bernie_Belcher_Portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bernie_Belcher_Portfolio');
  });

  it('should call invokeParticles on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const invokeParticlesSpy = spyOn(app, 'invokeParticles');

    app.ngOnInit();

    expect(invokeParticlesSpy).toHaveBeenCalled();
  });

  it('should call particlesJS when available', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const particlesSpy = jasmine.createSpy('particlesJS');
    (globalThis as { particlesJS?: unknown }).particlesJS = particlesSpy;

    app.invokeParticles();

    expect(particlesSpy).toHaveBeenCalled();
    const args = particlesSpy.calls.mostRecent().args;
    expect(args[0]).toBe('background-particles');
    expect(args[1]).toEqual(ParticlesConfig);
    expect(typeof args[2]).toBe('function');

    delete (globalThis as { particlesJS?: unknown }).particlesJS;
  });

  it('should not throw if particlesJS is unavailable', () => {
    delete (globalThis as { particlesJS?: unknown }).particlesJS;

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(() => app.invokeParticles()).not.toThrow();
  });
});
