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
  query login($id: uuid!) {
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
  mutation updateUserProfile {
    update_user(
      where: { id: { _eq: "388c74f1-9e43-4c41-8a58-c4c00842f46b" } }
      _set: { name: "soheb v2", phoneNumber: 990909, photo: "asd" }
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
