import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
