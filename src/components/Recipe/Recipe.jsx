import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CookIcon,
  CookText,
  Dropdown,
  FindText,
  FoodForm,
  FoodInput,
  Options,
  PointIcon,
  RecipeContainer,
  RecipeSection,
  SearchBtn,
  SearchContainer,
  TitlesContainer,
} from "../styles/Recipe.styled";
import Arrows from "./Arrows";
import Result from "./Result";

const Recipe = () => {
  const [apiData, setApiData] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [firstPage, setFirstPage] = useState("");
  const [newSearch, setNewSearch] = useState(false);
  const [pages, setPages] = useState({
    urlArray: [],
    page: 0,
    first: true,
  });
  const [food, setFood] = useState({
    query: "",
    meal: "",
  });
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiId = process.env.REACT_APP_API_ID;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food.query}&app_id=${apiId}&app_key=${apiKey}&mealType=${food.meal}`;
  const [status, setStatus] = useState({
    loading: false,
    error: false,
  });

  useEffect(() => {
    setPages((prevPages) => ({ ...prevPages, page: 0, urlArray: [url] }));
    setNewSearch(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food]);

  useEffect(() => {
    if (!pages.first && !newSearch) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages.page]);

  const getData = async () => {
    setStatus((prevStatus) => {
      return {
        error: false,
        loading: true,
      };
    });

    try {
      const { data } = await axios(pages.urlArray[pages.page]);
      setRecipes(data.hits);
      setApiData(data);
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
    setFirstPage(url);
    setFood({ query: "", meal: "" });
  };

  return (
    <RecipeSection>
      <RecipeContainer>
        <TitlesContainer>
          <CookText>Ready to Cook?</CookText>
          <CookIcon />
        </TitlesContainer>

        <TitlesContainer>
          <PointIcon />
          <FindText>Find Your Recipe</FindText>
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
      </RecipeContainer>
      {recipes?.length > 0 && (
        <Arrows
          apiData={apiData}
          pages={pages}
          setPages={setPages}
          firstPage={firstPage}
          setNewSearch={setNewSearch}
        />
      )}
      <Result recipes={recipes} status={status} />
      {recipes?.length > 0 && (
        <Arrows
          apiData={apiData}
          pages={pages}
          setPages={setPages}
          firstPage={firstPage}
          setNewSearch={setNewSearch}
        />
      )}
    </RecipeSection>
  );
};

export default Recipe;
