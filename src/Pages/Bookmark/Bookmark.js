import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardRecipe from "../../Components/CardRecipe/CardRecipe";
import {
  deleteBookmarkList,
  getBookmarkList,
  getRecipeByIdUser,
} from "../../Models/Bookmark";

const Bookmark = () => {
  const { data: dataBookmark } = useQuery(getBookmarkList);
  const { data: dataRecipe } = useQuery(getRecipeByIdUser);
  const navigate = useNavigate();

  const [deleteBookmark] = useMutation(deleteBookmarkList, {
    refetchQueries: [getBookmarkList],
  });
  const doDelete = (id) => {
    deleteBookmark({ variables: { id: id } });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Bookmark</p>
      </div>
      <div className="container">
        <div className="flex-row d-flex row">
          {dataBookmark?.bookmark.map((d, i) => {
            return (
              <CardRecipe
                data={d}
                key={i}
                onClick={() => navigate(`/recipe/${d.id}`, { replace: true })}
              />
            );
          })}
        </div>
      </div>
      <div className="container">
        <p className="h1">Your Recipe</p>
      </div>
      <div className="container">
        <div className="flex-row d-flex row">
          {dataRecipe?.recipe.map((d, i) => {
            return (
              <CardRecipe
                data={d}
                key={i}
                onClick={() => navigate(`/recipe/${d.id}`, { replace: true })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
