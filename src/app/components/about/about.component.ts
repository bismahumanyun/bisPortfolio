import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h2 class="section-title">About Me</h2>
      <!-- Avatar and Bio -->
      <div class="bio-section">
        <div class="avatar-container">
          <img [src]="'assets/images/avatar.jpg'" alt="Developer Avatar" class="avatar" />
          <!--<img src="assets/images/avatar.jpg" alt="Developer Avatar" class="avatar" />-->
        </div>
        <p class="bio-text">
          Hi, I am <strong>Bisma Humanyun</strong>. 
          Software Developer with <strong>10+ years</strong> of experience designing, developing, and optimizing enterprise applications using <strong>.NET, C#, SQL Server,</strong> and modern web technologies. Proven ability to architect scalable microservices, enhance database performance, implement secure, high-performance APIs, and solve complex problems. Adept in <strong>Agile development, CI/CD pipelines,</strong> and cloud deployments on <strong>Azure</strong>. Passionate about mentoring teams, improving code quality, and delivering business-critical solutions.
        </p>
        <!--<p class="bio-text">{{ bio }}</p> -->
      </div>
      <!--<p class="bio-text">
        Software Developer with <strong>10+ years</strong> of experience designing, developing, and optimizing enterprise applications using <strong>.NET, C#, SQL Server,</strong> and modern web technologies. Proven ability to architect scalable microservices, enhance database performance, implement secure, high-performance APIs, and solve complex problems. Adept in <strong>Agile development, CI/CD pipelines,</strong> and cloud deployments on <strong>Azure</strong>. Passionate about mentoring teams, improving code quality, and delivering business-critical solutions.
      </p>-->
      <div class="stats">
        <div class="stat">
          <span class="stat-label">Years of Experience</span>
          <span class="stat-value">10+</span>
        </div>
        <div class="stat">
          <span class="stat-label">Projects Delivered</span>
          <span class="stat-value">50+</span>
        </div>
        <div class="stat">
          <span class="stat-label">Technologies Used</span>
          <span class="stat-value">15+</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent { }