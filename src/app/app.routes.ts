import { Routes } from '@angular/router';
import { VoitureListComponent } from './components/voiture-list/voiture-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
  { path: 'voitures', component: VoitureListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/voitures', pathMatch: 'full' }
];