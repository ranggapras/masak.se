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
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
          <div className="col">
            <img src={Image1} class="img-thumbnail" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
