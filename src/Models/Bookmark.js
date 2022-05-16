import { gql } from "@apollo/client";

const getBookmarkList = gql`
  query getBookmarkList {
    bookmark(
      where: { idUser: { _eq: "e615324c-7077-4e95-b40f-a61ed49d847f" } }
    ) {
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
  query getRecipeByIdUser {
    recipe(where: { idUser: { _eq: "e615324c-7077-4e95-b40f-a61ed49d847f" } }) {
      id
      title
      photo
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

export { getBookmarkList,getRecipeByIdUser, deleteBookmarkList };
