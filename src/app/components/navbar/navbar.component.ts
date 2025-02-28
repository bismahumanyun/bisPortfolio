import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <a class="navbar-brand" (click)="scrollTo('about')">Bisma Humanyun - Software Engineer</a>
        <ul class="navbar-links">
          <li><a (click)="scrollTo('about')">About</a></li>
          <li><a (click)="scrollTo('skills')">Skills</a></li>
          <li><a (click)="scrollTo('portfolio')">Portfolio</a></li>
          <li><a (click)="scrollTo('experience')">Experience</a></li>
          <li><a (click)="scrollTo('contact')">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}