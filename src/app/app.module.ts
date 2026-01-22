import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/home/sections/hero/hero.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './pages/home/sections/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ExperienceComponent } from './pages/home/sections/experience/experience.component';
import { ProjectsComponent } from './pages/home/sections/projects/projects.component';

import { BadgeComponent } from './shared/ui/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    ExperienceComponent,
    ProjectsComponent,
    BadgeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
