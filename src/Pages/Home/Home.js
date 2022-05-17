import { useQuery } from "@apollo/client";
import React from "react";
import Image1 from "../../Assets/macaroni.png";
import CardRecipe from "../../Components/CardRecipe/CardRecipe";
import { getRecipeList } from "../../Models/Home";

const Home = () => {
  const { data } = useQuery(getRecipeList);

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Popular Recipe</p>
      </div>
      <div className="container">
        <div className="flex-row d-flex">
          {data?.recipe.map((d, i) => {
            return <CardRecipe data={d} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
