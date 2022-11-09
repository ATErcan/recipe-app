import Dishes from "./Dishes";
import { nanoid } from "nanoid";
import { CardContainer } from "../styles/Preview.styled";

const Preview = ({ recipe }) => {
  console.log(
    recipe.hits.map((food) => {
      return food.recipe.images.LARGE?.url;
    })
  );
  const dish = recipe.hits.map((food) => {
    return <Dishes key={nanoid()} food={food} />;
  });
  return <CardContainer>{dish}</CardContainer>;
};

export default Preview;
