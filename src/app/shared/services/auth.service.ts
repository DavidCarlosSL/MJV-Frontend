import { Injectable } from '@angular/core';
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

  public signOut(){
    localStorage.removeItem("userToken");
    this.apollo.client.resetStore();
  }
}
