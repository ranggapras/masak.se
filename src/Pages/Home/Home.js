import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CardRecipe from "../../Components/CardRecipe/CardRecipe";
import { getRecipeList } from "../../Models/Home";
import { allRecipe } from "./slicer";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { recipe } = useSelector((s) => s.recipe);

  const query = new URLSearchParams(location.search);
  const search = query.get("search");
  const { data } = useQuery(getRecipeList, {
    variables: { title: `%${search || ""}%` },
  });

  useEffect(() => {
    data?.recipe && dispatch(allRecipe(data?.recipe));
  }, [data, dispatch]);

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="h1">Recipe</p>
      </div>
      <div className="container">
        <div className="flex-row d-flex row">
          {recipe?.map((d, i) => {
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
