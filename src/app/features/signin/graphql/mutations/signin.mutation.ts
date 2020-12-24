import { gql } from "apollo-angular";

export const SIGNIN_USER = gql`
  mutation SignIn($email_user: String!, $password_user: String!) {
    SignIn(email_user: $email_user, password_user: $password_user) {
      token
      user {
        name_user
        createdAt
      }
    }
  }
`