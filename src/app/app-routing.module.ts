import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: 'signin', loadChildren: () => import("./features/signin/signin.module").then(m => m.SigninModule)},
  {path: 'signup', loadChildren: () => import("./features/signup/signup.module").then(m => m.SignupModule)},
  {path: 'products', loadChildren: () => import("./features/product/product.module").then(m => m.ProductModule), canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
