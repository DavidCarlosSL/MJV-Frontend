import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from '../../services/product-service.service';
import { CategoryService } from '../../services/category.service';

import { IProduct } from '../../models/product.interface';
import { ICategory } from '../../models/category.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService, private authService: AuthService, private router: Router) {}

  public products: IProduct[] = [];
  public categories: ICategory[] = [];

  public limit: number = 10;
  public offset: number = 0;

  public selectedFilter: string;
  public selectedCategory: number = null;

  public searchedName: string = "";

  public currentPage: number = 1;

  public limitReached: boolean = false;

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  public getCategories(){
    this.categoryService.getAllCategories().subscribe((response) => {

      this.categories = response.data.categories;

    }, (error) => {

      if(this.authService.authenticationError(error))
        this.router.navigateByUrl('/')

    })
  }

  public getProducts(){
    this.selectedFilter = 'Categorias';
    this.selectedCategory = null;
    this.searchedName = "";

    this.productService.getAllProducts(this.limit, this.offset).subscribe((response) => {

      this.products = response.data.products;

      if(this.products.length == 0)
        this.limitReached = true;
      else
        this.limitReached = false;

    }, (error) => {

      if(this.authService.authenticationError(error))
        this.router.navigateByUrl('/')

    })
  }

  public getProductsByCategory(){
    this.productService.getProductsByCategory(+this.selectedCategory, this.limit, this.offset).subscribe((response) => {

      this.products = response.data.productsByCategory;

      if(this.products.length == 0)
        this.limitReached = true;
      else
        this.limitReached = false;

    }, (error) => {

      if(this.authService.authenticationError(error))
        this.router.navigateByUrl('/')

    })
  }

  public setCategory(categoryId: number, categoryName: string) {
    this.selectedCategory = categoryId;
    this.selectedFilter = categoryName;

    this.getProductsByCategory();
  }

  public getProductsByName(){
    this.productService.getProductsByName(this.searchedName, this.limit, this.offset).subscribe((response) => {
      
      this.products = response.data.productsByName;

      if(this.products.length == 0)
        this.limitReached = true;
      else
        this.limitReached = false;
        
    }, (error) => {

      if(this.authService.authenticationError(error))
        this.router.navigateByUrl('/')
        
    })
  }

  public nextPage(){
    this.limit += 10;
    this.offset += 10;
    this.currentPage += 1;

    if(this.selectedCategory != null)
      this.getProductsByCategory()
    else if(this.searchedName != "")
      this.getProductsByName()
    else
      this.getProducts();
  }

  public previousPage(){
    this.limit -= 10;
    this.offset -= 10;
    this.currentPage -= 1;

    if(this.selectedCategory != null)
      this.getProductsByCategory()
    else if(this.searchedName != "")
      this.getProductsByName()
    else
      this.getProducts();
  }
}
