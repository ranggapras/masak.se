import { gql } from "@apollo/client";

const login = gql`
  query login {
    user(
      where: { username: { _eq: "udin.cyber48" }, password: { _eq: "123456" } }
    ) {
      id
      name
      phoneNumber
      photo
    }
  }
`;
const register = gql`
  mutation register {
    insert_user_one(
      object: {
        username: "sohebgb"
        name: "soheb"
        password: "123456"
        phoneNumber: "081133448"
        photo: ""
      }
    ) {
      id
      username
      name
      password
      phoneNumber
      photo
    }
  }
`;
const getUserProfileById = gql`
  query login {
    user(
      where: { id: { _eq: "$id" } }
    ) {
      id
      name
      phoneNumber
      photo
    }
  }
`;

const updateUserProfile = gql`
mutation updateUserProfile {
  update_user(where: {id: {_eq: "388c74f1-9e43-4c41-8a58-c4c00842f46b"}}, _set: {name: "soheb v2", phoneNumber: 990909, photo: "asd"}) {
    returning {
      name
      phoneNumber
      photo

    }
  }
}
`;
export { login, register,getUserProfileById,updateUserProfile };
