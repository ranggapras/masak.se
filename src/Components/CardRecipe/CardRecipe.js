import React from "react";

const CardRecipe = ({ data, onClick }) => {
  return (
    <div
      className="position-relative col-4 col-sm-6 my-3 mx-3"
      style={{ width: "auto", cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={data.photo || data.recipe.photo}
        class="img-thumbnail rounded"
        alt="..."
      />
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
