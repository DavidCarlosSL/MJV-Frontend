import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-product-navigation',
  templateUrl: './product-navigation.component.html',
  styleUrls: ['./product-navigation.component.css']
})
export class ProductNavigationComponent {

  constructor(private authService: AuthService, private router: Router) {}

  public signOut(){
    this.authService.signOut();
    this.router.navigateByUrl('');
  }
}
