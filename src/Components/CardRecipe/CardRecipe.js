import React from "react";
import Image1 from "../../Assets/macaroni.png";

const CardRecipe = ({ data }) => {
  return (
    <div
      className="position-relative col-4 my-3 mx-4"
      style={{ width: "auto" }}
    >
      <img src={Image1} class="img-thumbnail rounded" alt="..." />
      <h4
        className="position-absolute bottom-0 ms-4 mb-4"
        style={{ color: "white" }}
      >
        {data.title || data.recipe.title}
      </h4>
    </div>
  );
};

export default CardRecipe;
