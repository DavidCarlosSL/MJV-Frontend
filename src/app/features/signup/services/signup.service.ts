import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { SIGNUP_USER } from '../graphql/mutations/signup.mutatios';

import { IUser } from 'src/app/shared/models/user.interface';
import { ISignUp } from '../models/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apollo: Apollo) { }

  public signUp(newUserData: IUser) {
      return this.apollo.mutate<ISignUp>({
        mutation: SIGNUP_USER,
        variables: {
          data: newUserData
        }
      })
  }
}
