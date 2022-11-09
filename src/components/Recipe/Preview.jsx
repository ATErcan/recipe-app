import Dishes from "./Dishes";
import { nanoid } from "nanoid";
import { CardContainer } from "../styles/Preview.styled";

const Preview = ({ recipe }) => {
  const dish = recipe.hits.map((food) => {
    return <Dishes key={nanoid()} food={food} />;
  });
  return <CardContainer>{dish}</CardContainer>;
};

export default Preview;
