import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private signinService: SigninService, private fb: FormBuilder, private router: Router) {}

  public invalidCredentials: boolean = false;

  signInForm = this.fb.group({
    emailUser: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80), Validators.email]],
    passwordUser: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
  })

  onSubmit(){
    const userCredentials = this.signInForm.value;
    
    this.signinService.signIn(userCredentials.emailUser, userCredentials.passwordUser)
    .subscribe((response) => {
      localStorage.setItem('userToken', response.data.SignIn.token)
      this.invalidCredentials = false;
    }, (error) => {
      if(error.graphQLErrors[0].extensions.authenticated == false)
        this.invalidCredentials = true;
    })
  }
}
