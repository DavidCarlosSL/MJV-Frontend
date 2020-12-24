import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductComponent } from './pages/product/product.component';
import { ProductNavigationComponent } from './components/product-navigation/product-navigation.component';

@NgModule({
  declarations: [ProductComponent, ProductNavigationComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductModule { }
