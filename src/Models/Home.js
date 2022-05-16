import { gql } from "@apollo/client";

const getRecipeList = gql`
  query getRecipeList {
    recipe {
      id
      photo
      title
    }
  }
`;

export { getRecipeList };
