import { gql } from "apollo-angular";

export const SIGNUP_USER = gql`
  mutation SignUp($data: AddUserInput!) {
    SignUp(data: $data) {
      createdAt
    }
  }
`