import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {
  return (
    <>
    {/* I added hello, to test*/}
    <h1>Hello Everyone</h1>
     {/* <RecipeImage /> */}
      {/* <RecipeName /> */}
      {/* <RateARecipe rating={4} /> */}
      <Button saveButton={false} />
      {/* <AuthorInfo /> */}
      {/* <IngredientList /> */}
    </>
  );
}
