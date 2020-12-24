import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { GET_CATEGORIES } from '../graphql/queries/category.queries';

import { ICategories } from '../models/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apollo: Apollo) {}

  public getAllCategories() {
    return this.apollo.query<ICategories>({
      query: GET_CATEGORIES
    })
  }
}
