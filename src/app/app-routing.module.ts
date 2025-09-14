import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "education", component: EducationComponent},
  {path: "skills", component: SkillsComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "contact", component: ContactComponent},
  {path: "", redirectTo: "/about", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
