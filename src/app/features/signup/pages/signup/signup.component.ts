import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  constructor(private signupService: SignupService, private fb: FormBuilder, private router: Router) {}

  public emailInUse: boolean = false;

  signUpForm = this.fb.group({
    nameUser: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    emailUser: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80), Validators.email]],
    passwordUser: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
  })

  onSubmit(){
    let userData = this.signUpForm.value;
    const {nameUser, emailUser, passwordUser} = userData;

    this.signupService.signUp({name_user: nameUser, email_user: emailUser, password_user: passwordUser})
    .subscribe((response) => {
      this.emailInUse = false;
      this.router.navigateByUrl('signin');
    }, (error) => {
      if(error.graphQLErrors[0].extensions.emailInUse == true)
        this.emailInUse = true;
    })
  }
}
