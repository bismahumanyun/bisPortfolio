import { PortfolioItem, ExperienceItem, Skill } from '../../app/models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        title: 'Space Invader Game',
        description: 'Retro arcade-style game built with Three.js',
        image: 'assets/images/space-invader.jpg'
    },

];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        company: 'Game Dev Studio',
        role: 'Lead Developer',
        duration: '2020-2022',
        description: 'Developed core gameplay mechanics for AAA titles'
    },

];

export const SKILLS_DATA: Skill[] = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 90 },

];