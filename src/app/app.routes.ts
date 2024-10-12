import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ProposalComponent } from './proposal/proposal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a login como predeterminado
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'proposal', component: ProposalComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'login' } // Cualquier otra ruta que no exista redirige al login
];
