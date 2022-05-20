import { gql } from "@apollo/client";

const getRecipeById = gql`
  query getRecipeById($id: uuid!) {
    recipe(where: { id: { _eq: $id } }) {
      title
      photo
      description
      user {
        name
        photo
      }
    }
  }
`;

const addRecipe = gql`
  mutation addRecipe($object: recipe_insert_input!) {
    insert_recipe_one(object: $object) {
      idUser
      title
      photo
      description
    }
  }
`;

const updateRecipeById = gql`
  mutation updateRecipeById {
    update_recipe(
      where: { id: { _eq: "40eea265-3e4b-4ead-85ee-5227ecb84307" } }
      _set: {
        title: "ayub tepung asam manis"
        photo: "asdzxc"
        description: "hehe"
      }
    ) {
      returning {
        title
        photo
        description
      }
    }
  }
`;

export { getRecipeById, addRecipe, updateRecipeById };
