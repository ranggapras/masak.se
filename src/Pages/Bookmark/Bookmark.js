import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import Image1 from "../../Assets/macaroni.png";
import {
  deleteBookmarkList,
  getBookmarkList,
  getRecipeByIdUser,
} from "../../Models/Bookmark";

const Bookmark = () => {
  const { data: dataBookmark } = useQuery(getBookmarkList);
  const { data: dataRecipe } = useQuery(getRecipeByIdUser);

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
        <div className="row">
          {dataBookmark?.bookmark.map((d, i) => {
            return (
              <div
                className="position-relative col-4 mt-3 mx-auto"
                style={{ width: "auto" }}
                key={i}
              >
                <img src={Image1} class="img-thumbnail rounded" alt="..." />
                <h4
                  className="position-absolute bottom-0 ms-4 mb-4"
                  style={{ color: "white" }}
                >
                  {d.recipe.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <p className="h1">Your Recipe</p>
      </div>
      <div className="container">
        <div className="row">
          {dataRecipe?.recipe.map((d, i) => {
            return (
              <div
                className="position-relative col-4 mt-3 mx-auto"
                style={{ width: "auto" }}
                key={i}
              >
                <img src={Image1} class="img-thumbnail rounded" alt="..." />
                <h4
                  className="position-absolute bottom-0 ms-4 mb-4"
                  style={{ color: "white" }}
                >
                  {d.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
