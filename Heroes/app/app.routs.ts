import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
const routes: RouterConfig = [
  {
  path: 'dashboard',
component: DashboardComponent
path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  path: 'detail/:id',
 component: HeroDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
