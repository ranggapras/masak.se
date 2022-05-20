import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import CardRecipe from "../../Components/CardRecipe/CardRecipe";
import {
  deleteBookmarkList,
  getBookmarkList,
  getRecipeByIdUser,
} from "../../Models/Bookmark";

const Bookmark = () => {
  const [cookies] = useCookies(["idUser"]);

  const { data: dataBookmark, refetch: refectBookmark } = useQuery(
    getBookmarkList,
    {
      variables: { id: cookies.idUser },
    }
  );
  const { data: dataRecipe, refetch: refectRecipe } = useQuery(
    getRecipeByIdUser,
    {
      variables: { id: cookies.idUser },
    }
  );
  const navigate = useNavigate();

  const [deleteBookmark] = useMutation(deleteBookmarkList, {
    refetchQueries: [getBookmarkList],
  });
  const doDelete = (id) => {
    deleteBookmark({ variables: { id: id } });
  };

  useEffect(() => {
    refectRecipe();
    refectBookmark();
  });

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
                onClickAction={() => doDelete(d.id)}
                bookmark={true}
                data={d}
                key={i}
                onClick={() =>
                  navigate(`/recipe/${d.idRecipe}`, { replace: true })
                }
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
                onClick={() =>
                  navigate(`/recipe/add?id=${d.id}`, { replace: true })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
