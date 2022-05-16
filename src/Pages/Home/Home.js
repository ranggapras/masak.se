import { useQuery } from "@apollo/client";
import React from "react";
import Image1 from "../../Assets/macaroni.png";
import { getRecipeList } from "../../Models/Home";

const Home = () => {
  const { data } = useQuery(getRecipeList);

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Popular Recipe</p>
      </div>
      <div className="container">
        <div className="row">
          {data?.recipe.map((d, i) => {
            return (
              <div
                className="position-relative col-4 mt-3 mx-auto"
                style={{ width: "auto" }}
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

export default Home;
