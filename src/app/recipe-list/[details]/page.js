import RecipeDetailsItem from "@/components/recipe-details";

async function fetchDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipe/${currentRecipeId}`
    );
    const data = await apiResponse.json()
    return data
  } catch (err) {
    throw new Error(err);
  }
}

const RecipeDetails = async ({ params }) => {
  const getRecipeDetails = await fetchDetails(params?.details);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
};

export default RecipeDetails;
