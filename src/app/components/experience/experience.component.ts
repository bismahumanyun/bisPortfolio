import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-experience',
  template: `
    <div class="experience-container">
      <h2 class="section-title">Work Experience</h2>
      <div class="experience-grid">
        <div class="experience-card" *ngFor="let experience of experiences">
          <h3 class="experience-title">{{ experience.title }}</h3>
          <p class="experience-company">{{ experience.company }}</p>
          <p class="experience-duration">{{ experience.duration }}</p>
          <ul class="experience-details">
            <li *ngFor="let detail of experience.details">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Full Stack .NET Developer',
      company: 'Independent Contractor',
      duration: 'Sep 2022 - Sep 2024',
      details: [
        'Designed and developed customer-facing web applications using ASP.NET Core, Angular, TypeScript, and SQL Server.',
        'Optimized database queries and indexing strategies, improving system response time by 40%.',
        'Implemented CI/CD pipelines in Azure DevOps, reducing deployment time by 30%.',
        'Developed and maintained REST APIs, integrating third-party services.',
        'Led the adoption of test-driven development (TDD), increasing unit test coverage and reducing production defects.',
        'Mentored junior developers, conducting code reviews and technical training to improve team efficiency.',
      ],
    },
    {
      title: 'System Analyst',
      company: 'NETSOL Technologies',
      duration: 'Jan 2021 - Apr 2022',
      details: [
        'Developed microservices, web services, and APIs using C# and ASP.NET Core.',
        'Implemented Azure Information Protection policies, improving data security compliance.',
        'Optimized SQL queries, reducing database response times by 35%.',
        'Collaborated with business stakeholders to refine requirements and align development with business objectives.',
        'Worked in an Agile environment (SCRUM), actively participating in two-week sprints.',
      ],
    },
    {
      title: 'Principal Software Engineer',
      company: 'NETSOL Technologies',
      duration: 'Jan 2019 - Dec 2020',
      details: [
        'Architected and implemented PDF generation services, reducing document processing time by 65%.',
        'Developed and optimized database schemas, improving data retrieval performance by 45%.',
        'Integrated third-party APIs into CMS applications, enhancing system functionality and user experience.',
        'Led Agile development teams, ensuring timely delivery of high-quality software releases.',
        'Conducted extensive system integration, application development, and quality assurance.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'NETSOL Technologies',
      duration: 'Jan 2017 - Dec 2018',
      details: [
        'Automated workflows with .NET and C#, reducing manual effort by 25% and increasing productivity.',
        'Enhanced complex business logic and calculations, improving accuracy and performance.',
        'Implemented performance tuning techniques, optimizing SQL queries and reducing execution time by 50%.',
        'Collaborated with cross-functional teams, delivering enterprise-grade software solutions on schedule.',
        'Conducted preventative and corrective maintenance, identifying and resolving issues in existing software.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'NETSOL Technologies',
      duration: 'Oct 2013 - Dec 2016',
      details: [
        'Developed enterprise applications using C#, .NET, and SQL Server, supporting high-volume transactions.',
        'Improved system reliability and maintainability by refactoring legacy code and optimizing stored procedures.',
        'Supported user acceptance testing and production deployments, ensuring seamless go-live transitions.',
      ],
    },
  ];
}