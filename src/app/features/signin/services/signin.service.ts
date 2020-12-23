import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { SIGNIN_USER } from '../graphql/mutations/signin.mutation';

import { IAuth } from '../models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private apollo: Apollo) { }

  public signIn(email_user: string, password_user: string){
    return this.apollo.mutate<IAuth>({
      mutation: SIGNIN_USER,
      variables: {
        email_user,
        password_user
      }
    })
  }
}
