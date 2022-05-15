import React from "react";
import Image1 from "../../Assets/macaroni.png";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Popular Recipe</p>
      </div>
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
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
                  Macaroni el salvador
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
