import { Injectable } from '@angular/core';
import { PORTFOLIO_DATA, EXPERIENCE_DATA, SKILLS_DATA } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class DataService {
    getPortfolioItems() {
        return PORTFOLIO_DATA;
    }

    getExperienceItems() {
        return EXPERIENCE_DATA;
    }

    getSkills() {
        return SKILLS_DATA;
    }
}