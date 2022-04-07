import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return <p className="error">Нет рецептов...</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Приготовить </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
