import React from "react";
import { FaTrash } from "react-icons/fa";

const CardRecipe = ({ data, onClick, onClickAction, bookmark }) => {
  return (
    <div
      className="position-relative col-4 col-sm-6 my-3 mx-3"
      style={{ width: "auto", cursor: "pointer" }}
    >
      {bookmark && (
        <div
          onClick={onClickAction}
          className="d-flex align-items-center justify-content-center position-absolute end-0 rounded-circle"
          style={{
            cursor: "pointer",
            background: "#fff",
            width: "3rem",
            height: "3rem",
            margin: "1rem 2rem",
          }}
        >
          <FaTrash color="#F92222" size={25} />
        </div>
      )}
      <img
        onClick={onClick}
        src={data.photo || data.recipe.photo}
        style={{ objectFit: "cover", width: "23.75rem", height: "20rem" }}
        class="img rounded-5"
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
