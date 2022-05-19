import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardRecipe from "../../Components/CardRecipe/CardRecipe";
import { getRecipeList } from "../../Models/Home";

const Home = () => {
  const { data } = useQuery(getRecipeList);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Popular Recipe</p>
      </div>
      <div className="container">
        <div className="flex-row d-flex row">
          {data?.recipe.map((d, i) => {
            return (
              <CardRecipe
                data={d}
                key={i}
                onClick={() => navigate(`/recipe/${d.id}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
