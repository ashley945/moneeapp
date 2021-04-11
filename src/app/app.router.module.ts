import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'main', component: MainComponent, },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});

