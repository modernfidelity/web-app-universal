import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Events } from './events';
import { About } from './app.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'events', component: Events },
  { path: '**', redirectTo: 'home' }
];
