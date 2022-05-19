import { gql } from "@apollo/client";

const getBookmarkList = gql`
  query getBookmarkList($id: uuid!) {
    bookmark(where: { idUser: { _eq: $id } }) {
      id
      idRecipe
      idUser
      recipe {
        photo
        id
        title
      }
    }
  }
`;
const getRecipeByIdUser = gql`
  query getRecipeByIdUser($id: uuid!) {
    recipe(where: { idUser: { _eq: $id } }) {
      id
      title
      photo
    }
  }
`;
const addBookmark = gql`
  mutation addBookmark($idRecipe: uuid!, $idUser: uuid!) {
    insert_bookmark(objects: { idRecipe: $idRecipe, idUser: $idUser }) {
      returning {
        id
        idRecipe
        idUser
      }
    }
  }
`;

const deleteBookmarkList = gql`
  mutation deleteBookmarkList($id: uuid!) {
    delete_bookmark_by_pk(id: $id) {
      id
      idRecipe
      idUser
    }
  }
`;

export { getBookmarkList, getRecipeByIdUser, addBookmark, deleteBookmarkList };
