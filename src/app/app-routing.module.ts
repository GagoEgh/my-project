import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardeService } from './auth/auth-guarde.service';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'dashboard'},
  { path: 'auth', loadChildren: () => import('./auth/auth-module').then(e => e.AuthModule) },
  { path: 'dashboard',canActivate:[AuthGuardeService], loadChildren: () => import('./main/mein.module').then(e => e.MeinModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
