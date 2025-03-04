import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main>
      <section id="about">
        <app-about></app-about>
      </section>
      <section id="skills">
        <app-skills></app-skills>
      </section>
      <section id="portfolio">
        <app-portfolio></app-portfolio>
      </section>
      <section id="experience">
        <app-experience></app-experience>
      </section>
      <section id="contact">
        <app-contact
          [contactEmail]="contactEmail"
          (formSubmitted)="onFormSubmitted($event)"
        ></app-contact>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contactEmail = 'bismahumanyun@gmail.com'; // Input data for ContactComponent

  // Handle form submission event
  onFormSubmitted(formData: { name: string; email: string; message: string }) {
    console.log('Form Data Received in Parent:', formData);
    alert(`Message sent successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  }
}