import { gql } from "apollo-angular";

export const GET_PRODUCTS = gql`
    query Products($limit: Float!, $offset: Float!) {
        products(limit: $limit, offset: $offset){
            id_product
            name_product
            price_product
            image_product
            categories {
                id_category
                name_category
            }
        }
    }
`

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query ProductsByCategory($categoryId: Float!, $limit: Float!, $offset: Float!) {
        productsByCategory(categoryId: $categoryId, limit: $limit, offset: $offset){
            id_product
            name_product
            price_product
            image_product
            categories {
                id_category
                name_category
            }
        }
    }
`

export const GET_PRODUCTS_BY_NAME = gql`
    query ProductsByName($productName: String!, $limit: Float!, $offset: Float!) {
        productsByName(productName: $productName, limit: $limit, offset: $offset){
            id_product
            name_product
            price_product
            image_product
            categories {
                id_category
                name_category
            }
        }
    }
`