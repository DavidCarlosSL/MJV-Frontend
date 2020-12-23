import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    SharedModule
  ]
})
export class SigninModule { }
