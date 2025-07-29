import { Routes } from '@angular/router';
import { LandingComponent } from '../Features/landing/landing.component';
import { WhyComponent } from '../Features/why/why.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'why', component: WhyComponent },
];
