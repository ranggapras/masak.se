import { useQuery } from "@apollo/client";
import React from "react";
import { useLocation } from "react-router-dom";
import { getRecipeById } from "../../Models/Recipe";

const Recipe = () => {
  const location = useLocation();
  const idRecipe = location.pathname.split("/")[2];
  const { data } = useQuery(getRecipeById, {
    variables: { id: idRecipe },
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex">
          <img
            className="img-thumbnail"
            style={{ height: "10rem" }}
            src={data?.recipe[0].photo}
            alt="..."
          />
          <div className="d-flex flex-column">
            <h1>{data?.recipe[0].title}</h1>
            <div className="d-flex flex-row">
              <img src={data?.recipe[0].user.photo} alt="..." />
              <div className="d-flex flex-column">
                <h3>{data?.recipe[0].user.name}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">{data?.recipe[0].description}</div>
      </div>
    </div>
  );
};

export default Recipe;
