import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe'; //to search
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <a class="navbar-brand" (click)="scrollTo('about')">
          Bisma Humayun - Software Engineer
        </a>
        
        <!-- Search Input -->
        <input type="text" [(ngModel)]="searchQuery" placeholder="Search..." class="search-input" />

        <ul class="navbar-links">
          <li *ngFor="let link of navLinks | filter: searchQuery">
            <a (click)="scrollTo(link.id)">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchQuery: string = '';

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
