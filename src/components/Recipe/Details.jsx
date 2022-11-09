import { useLocation, useParams } from "react-router-dom";
import {
  Flex,
  InfoContainer,
  InfoText,
  InfoTitles,
  InfoUl,
  OtherInfo,
  Recipe,
  RecipeDetails,
  RecipeImage,
  RecipeInfo,
  RecipeName,
} from "../styles/Details.styled";
import { nanoid } from "nanoid";
import { SiCodechef } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { FcAlarmClock } from "react-icons/fc";
import { GiHealthPotion } from "react-icons/gi";
import { AiOutlineWarning } from "react-icons/ai";

const Details = () => {
  const { state: food } = useLocation();
  const { id } = useParams();

  const ingredients = food.recipe.ingredientLines.map((ing) => {
    return <li>{ing}</li>;
  });

  const mealType = food.recipe.mealType.map((meal) => {
    return <InfoText>{meal}</InfoText>;
  });

  const cuisine = food.recipe.cuisineType.map((cuis) => {
    return <InfoText>{cuis}</InfoText>;
  });

  const dishType = food.recipe.dishType.map((dish) => {
    return <InfoText>{dish}</InfoText>;
  });

  return (
    <RecipeDetails>
      <Recipe>
        <RecipeImage src={food.recipe.image} alt={food.recipe.label} />
        <RecipeInfo>
          <RecipeName>{food.recipe.label}</RecipeName>
          <InfoContainer>
            <Flex>
              <InfoTitles>
                {<FcAlarmClock style={{ fontSize: "1.2rem" }} />} Meal Type:
                {<InfoUl>{mealType}</InfoUl>}
              </InfoTitles>
            </Flex>
            <Flex>
              <Flex>
                <InfoTitles>
                  {
                    <GiForkKnifeSpoon
                      style={{ fontSize: "1.2rem", color: "#888" }}
                    />
                  }{" "}
                  Cuisine: {<InfoUl>{cuisine}</InfoUl>}
                </InfoTitles>
              </Flex>
            </Flex>
            <Flex>
              <InfoTitles>
                {<BiDish style={{ fontSize: "1.2rem" }} />} Dish Type:{" "}
                {<InfoUl>{dishType}</InfoUl>}
              </InfoTitles>
            </Flex>
            <Flex>
              <InfoTitles>
                {
                  <SiCodechef
                    style={{ fontSize: "1.2rem", color: "#964B00" }}
                  />
                }{" "}
                Chef:{" "}
              </InfoTitles>
              <InfoText>{food.recipe.source}</InfoText>
            </Flex>
          </InfoContainer>
        </RecipeInfo>
        <OtherInfo>
          <ul>{ingredients}</ul>
          <h5>Calories: {Math.round(food.recipe.calories)}</h5>
          <h5>{<GiHealthPotion />} Health Friendly: </h5>
          <h5>{<AiOutlineWarning />} Cautions: </h5>
        </OtherInfo>
      </Recipe>
    </RecipeDetails>
  );
};

export default Details;
