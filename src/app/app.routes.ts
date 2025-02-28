/*import { Routes } from '@angular/router';

export const routes: Routes = [];
*/

import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'contact', component: ContactComponent },

];