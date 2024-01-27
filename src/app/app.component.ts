import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/assets/data/particles';

// Required to be properly interpreted by TypeScript.
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Bernie_Belcher_Portfolio';

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('background-particles', ParticlesConfig, function() {});
  }
}
