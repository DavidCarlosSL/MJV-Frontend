import { gql } from "apollo-angular";

export const GET_CATEGORIES = gql`
    query Categories {
        categories {
            id_category
            name_category
        }
    }
`