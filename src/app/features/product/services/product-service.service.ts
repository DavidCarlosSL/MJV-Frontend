import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCTS_BY_NAME } from '../graphql/queries/product.queries';

import { IProducts } from '../models/products.interface';
import { IProductByCategory } from '../models/productsByCategory.interface';
import { IProductsByName } from '../models/productsByName.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apollo: Apollo) {}

  public getAllProducts(limit: number, offset: number){
    return this.apollo.query<IProducts>({
      query: GET_PRODUCTS,
      variables: {
        limit,
        offset
      }
    })
  }

  public getProductsByCategory(categoryId: number, limit: number, offset: number){
    return this.apollo.query<IProductByCategory>({
      query: GET_PRODUCTS_BY_CATEGORY,
      variables: {
        categoryId,
        limit,
        offset
      }
    })
  }

  public getProductsByName(productName: string, limit: number, offset: number){
    return this.apollo.query<IProductsByName>({
      query: GET_PRODUCTS_BY_NAME,
      variables: {
        productName,
        limit,
        offset
      }
    })
  }
}
