import { gql } from "@apollo/client";

const getRecipeById = gql`
  query getRecipeList(where: {id: {_eq: "40eea265-3e4b-4ead-85ee-5227ecb84307"}}) {
    recipe {
      title
      photo
      description
    }
  }
`;

const updateRecipeById = gql`
update_recipe(where: {id: {_eq: "40eea265-3e4b-4ead-85ee-5227ecb84307"}}, _set: {title: "ayub tepung asam manis", photo: "asdzxc", description: "hehe"}) {
  returning {
    title
    photo
    description
  }
}
}
`;

export { getRecipeById, updateRecipeById };
