import { useLocation, useParams } from "react-router-dom";
import {
  Flex,
  InfoContainer,
  InfoText,
  InfoTitles,
  InfoUl,
  Ingredients,
  IngTitle,
  OtherInfo,
  OtherText,
  OtherTitles,
  Recipe,
  RecipeDetails,
  RecipeImage,
  RecipeInfo,
  RecipeName,
  Source,
  SourceUrl,
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
    return <Ingredients key={nanoid()}>{ing}</Ingredients>;
  });

  const mealType = food.recipe.mealType.map((meal) => {
    return <InfoText key={nanoid()}>{meal}</InfoText>;
  });

  const cuisine = food.recipe.cuisineType.map((cuis) => {
    return <InfoText key={nanoid()}>{cuis}</InfoText>;
  });

  const dishType = food.recipe.dishType.map((dish) => {
    return <InfoText key={nanoid()}>{dish}</InfoText>;
  });

  const healthLabels = food.recipe.healthLabels.map((health) => {
    return <OtherText key={nanoid()}>{health}</OtherText>;
  });

  const cautions = food.recipe.cautions.map((caution) => {
    return <OtherText key={nanoid()}>{caution}</OtherText>;
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
          <IngTitle>Ingredients</IngTitle>
          <ul>{ingredients}</ul>
          <Flex>
            <OtherTitles>
              Calories:{" "}
              <OtherText>{Math.round(food.recipe.calories)}</OtherText>
            </OtherTitles>
          </Flex>
          <Flex>
            <OtherTitles>
              {<GiHealthPotion style={{ color: "#f00", fontSize: "1.5rem" }} />}{" "}
              Health Friendly:
              <InfoUl>{healthLabels}</InfoUl>
            </OtherTitles>
          </Flex>
          {food.recipe.cautions && (
            <Flex>
              <OtherTitles>
                {
                  <AiOutlineWarning
                    style={{ color: "#ffcc00", fontSize: "1.5rem" }}
                  />
                }{" "}
                Cautions:
                <InfoUl>{cautions}</InfoUl>
              </OtherTitles>
            </Flex>
          )}
          <Source>
            You can find more info{" "}
            <SourceUrl href={food.recipe.url} target="_blank">
              here
            </SourceUrl>
            .
          </Source>
        </OtherInfo>
      </Recipe>
    </RecipeDetails>
  );
};

export default Details;
