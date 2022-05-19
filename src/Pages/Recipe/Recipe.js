import { useQuery, useMutation } from "@apollo/client";
import Button from "../../Elements/Button/Button";
import parse from "html-react-parser";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getRecipeById } from "../../Models/Recipe";
import { addBookmark } from "../../Models/Bookmark";

const Recipe = () => {
  const location = useLocation();
  const idRecipe = location.pathname.split("/")[2];
  const [cookies] = useCookies(["idUser"]);

  const { data, refetch } = useQuery(getRecipeById, {
    variables: { id: idRecipe },
  });

  useEffect(() => {
    refetch();
  });

  const [addBookmarkRecipe] = useMutation(addBookmark);

  const doBookmark = () => {
    addBookmarkRecipe({
      variables: { idRecipe: idRecipe, idUser: cookies.idUser },
    });
  };

  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div className="d-flex">
          <img
            className="rounded-5"
            style={{ height: "20rem", width: "20rem", objectFit: "cover" }}
            src={data?.recipe[0].photo}
            alt="..."
          />
          <div className="d-flex flex-column ms-5 mt-5">
            <h1>{data?.recipe[0].title}</h1>
            <div className="d-flex flex-row align-items-center mt-5">
              <img
                style={{ width: "5rem" }}
                src={data?.recipe[0].user.photo}
                alt="..."
              />
              <h5 className="ms-2">{data?.recipe[0].user.name}</h5>
            </div>
            <Button onClick={() => doBookmark()}>Bookmark</Button>
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          {data && parse(data.recipe[0].description)}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
