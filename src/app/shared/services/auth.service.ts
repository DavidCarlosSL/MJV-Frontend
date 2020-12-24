import { Injectable } from '@angular/core';
import { ApolloError } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) {}

  public isAuthenticated(): boolean {
    const userToken = localStorage.getItem('userToken')
    if(!userToken) return false;
    else return true;
  }

  public authenticationError(error: ApolloError): boolean{
    const errorMessage = error.graphQLErrors[0];
    if(errorMessage.extensions.code === "UNAUTHENTICATED" || errorMessage.message === "Authorization token not provided."){
      this.signOut();
      return true;
    }else
      return false;
  }

  public signOut(){
    localStorage.removeItem("userToken");
    this.apollo.client.resetStore();
  }
}
