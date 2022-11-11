import axios from "axios";
import { useState } from "react";
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
import Result from "./Result";

const Recipe = () => {
  const [recipes, setRecipes] = useState(null);
  const [food, setFood] = useState({
    query: "",
    meal: "",
  });
  const apiKey = "9c59ce7a6265f318af156fddcd89d92a";
  const apiId = "942fcac4";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food.query}&app_id=${apiId}&app_key=${apiKey}&mealType=${food.meal}`;
  const [status, setStatus] = useState({
    loading: false,
    error: false,
  });

  const getData = async () => {
    setStatus((prevStatus) => {
      return {
        error: false,
        loading: true,
      };
    });
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      setStatus((prevStatus) => {
        return {
          ...prevStatus,
          error: true,
        };
      });
    } finally {
      setStatus((prevStatus) => {
        return {
          ...prevStatus,
          loading: false,
        };
      });
    }
  };

  const mealType = (e) => {
    setFood((prevFood) => {
      return {
        ...prevFood,
        meal: e.target.value,
      };
    });
  };

  const mealName = (e) => {
    setFood((prevFood) => {
      return {
        ...prevFood,
        query: e.target.value,
      };
    });
  };

  const searchMeal = (e) => {
    e.preventDefault();
    getData();
    setFood({ query: "", meal: "" });
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

      <FoodForm onSubmit={searchMeal}>
        <SearchContainer>
          <Dropdown value={food.meal} onChange={mealType} required>
            <Options value="" disabled>
              -Select Meal-
            </Options>
            <Options value="breakfast">Breakfast</Options>
            <Options value="lunch">Lunch</Options>
            <Options value="dinner">Dinner</Options>
            <Options value="snack">Snack</Options>
            <Options value="teatime">Teatime</Options>
          </Dropdown>

          <FoodInput
            placeholder="Search"
            onChange={mealName}
            value={food.query}
            required
          />
          <SearchBtn>Search</SearchBtn>
        </SearchContainer>
      </FoodForm>
      <Result recipes={recipes} status={status} />
    </>
  );
};

export default Recipe;
