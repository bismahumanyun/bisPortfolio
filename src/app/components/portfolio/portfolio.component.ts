import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Customer-Facing Web Applications',
      description:
        'Designed and developed a customer-facing web applications using ASP.NET Core, Angular, and SQL Server.',
      //image: 'assets/images/project1.jpeg',
      technologies: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQL Server'],
      achievements: [
        'Optimized database queries and indexing strategies, improving system response time by 40%.',
        'Implemented CI/CD pipelines in Azure DevOps, reducing deployment time by 30%.',
        'Developed and maintained REST APIs, integrating third-party services.',
      ],
    },
    {
      title: 'Microservices Architecture',
      description:
        'Architected and implemented microservices using C# and ASP.NET Core, enhancing system modularity and scalability.',
      //image: 'assets/images/project2.jpg',
      technologies: ['C#', 'ASP.NET Core', 'Docker', 'Kubernetes'],
      achievements: [
        'Improved database response times by 35% through query optimization.',
        'Implemented Azure Information Protection policies, enhancing data security compliance.',
        'Led Agile development teams, ensuring timely delivery of high-quality software releases.',
      ],
    },
  ];
}