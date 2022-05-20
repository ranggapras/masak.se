import { gql } from "@apollo/client";

const login = gql`
  query login($username: String!, $password: String!) {
    user(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      id
      name
      phoneNumber
      photo
    }
  }
`;
const register = gql`
  mutation register($object: user_insert_input!) {
    insert_user_one(object: $object) {
      id
      username
      name
      phoneNumber
      photo
    }
  }
`;
const getUserProfileById = gql`
  query getUserProfile($id: uuid!) {
    user(where: { id: { _eq: $id } }) {
      id
      username
      name
      phoneNumber
      photo
    }
  }
`;

const updateUserProfile = gql`
  mutation updateUserProfile(
    $id: uuid!
    $name: String
    $phoneNumber: String
    $photo: String
    $username: String
  ) {
    update_user(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        phoneNumber: $phoneNumber
        photo: $photo
        username: $username
      }
    ) {
      returning {
        name
        phoneNumber
        photo
      }
    }
  }
`;
export { login, register, getUserProfileById, updateUserProfile };
