import React from "react";
import { useLocation } from "react-router-dom";

const Recipe = () => {
  const location = useLocation();
  return <div>Recipe {location.pathname.split("/")[2]}</div>;
};

export default Recipe;
