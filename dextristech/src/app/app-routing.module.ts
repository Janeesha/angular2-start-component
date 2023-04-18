import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { OurservicesComponent } from './pages/ourservices/ourservices.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'contact',component:ContactusComponent},
{path:'services',component:OurservicesComponent},
{path:'aboutus',component:AboutusComponent},
{path:'careers',component:CareersComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
