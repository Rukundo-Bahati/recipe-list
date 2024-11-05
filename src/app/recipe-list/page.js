import RecipeList from "@/components/recipe-list";
import React from "react";

async function recipeList() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json(); // Ensure this is awaited
    return data?.recipes; // Return the recipes data
  } catch (err) {
    console.error("Failed to fetch recipes:", err);
    return []; // Return an empty array in case of an error
  }
}

const Recipes = async () => {
  const recipes = await recipeList(); 
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
