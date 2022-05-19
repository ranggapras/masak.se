import { gql } from "@apollo/client";

const getRecipeList = gql`
  query getRecipeList($title: String) {
    recipe(where: { title: { _like: $title } }) {
      id
      photo
      title
    }
  }
`;

export { getRecipeList };
