import axios from "axios";
import { useEffect, useState } from "react";
import {
  CookIcon,
  Dropdown,
  FoodForm,
  FoodInput,
  Options,
  PointIcon,
  SearchBtn,
  SearchContainer,
  TitlesContainer,
} from "../styles/Recipe.styled";

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("breakfast");
  const apiKey = "9c59ce7a6265f318af156fddcd89d92a";
  const apiId = "942fcac4";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiId}&app_key=${apiKey}&mealType=${meal}`;
  useEffect(() => {
    getData();
  }, []);
  console.log(recipe.hits);

  const getData = async () => {
    const { data } = await axios(url);
    setRecipe(data);
  };

  return (
    <>
      <TitlesContainer>
        <h1>Ready to Cook?</h1>
        <CookIcon />
      </TitlesContainer>

      <TitlesContainer>
        <PointIcon />
        <h4>Find Your Recipe</h4>
      </TitlesContainer>

      <FoodForm>
        <SearchContainer>
          <Dropdown>
            <Options value="">-Select Meal-</Options>
            <Options value="breakfast">Breakfast</Options>
            <Options value="lunch">Lunch</Options>
            <Options value="dinner">Dinner</Options>
            <Options value="snack">Snack</Options>
            <Options value="teatime">Teatime</Options>
          </Dropdown>

          <FoodInput placeholder="Search" />
          <SearchBtn>Search</SearchBtn>
        </SearchContainer>
      </FoodForm>
    </>
  );
};

export default Recipe;
