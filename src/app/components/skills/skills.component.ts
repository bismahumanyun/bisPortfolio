import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-skills',
  template: `
    <div class="skills-container">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category" *ngFor="let category of skillCategories">
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skills-list">
            <div class="skill" *ngFor="let skill of category.skills">
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-progress">
                <div class="progress-bar" [style.width.%]="skill.level"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C# .NET', level: 95 },
        { name: 'ASP.NET Core', level: 90 },
        { name: 'WCF', level: 85 },
        { name: 'MVC', level: 90 },
        { name: 'Java', level: 70 },
        { name: 'Poweruilder', level: 75 },
        { name: 'Python', level: 70 },
      ],
    },

    {
      title: 'UI Technologies',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 60 },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'SQL Server', level: 95 },
        { name: 'TSQL', level: 90 },
        { name: 'Stored Procedures', level: 92 },
        { name: 'Functios', level: 95 },
        { name: 'Views', level: 93 },
        { name: 'ADO.NET', level: 90 },
        { name: 'Entity Framework', level: 88 },
      ],
    },
    {
      title: 'Cloud Technologies',
      skills: [
        { name: 'Azure', level: 85 },
        { name: 'Aws', level: 35 },
      ],
    },
    {
      title: 'Version Control',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Azure Devops', level: 85 },
        { name: 'SVN', level: 90 },
        { name: 'TFS', level: 70 },
      ],
    },
    {
      title: 'Agile',
      skills: [
        { name: 'SCRUM', level: 95 },
        { name: 'Kaban', level: 85 },
        { name: 'SAFe', level: 80 },
      ],
    },
  ];
}