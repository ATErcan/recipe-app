import {
  Chef,
  Cuisine,
  DetailsBtn,
  DishCard,
  DishImage,
  DishName,
} from "../styles/Preview.styled";
import { nanoid } from "nanoid";

const Dishes = ({ food }) => {
  return (
    <DishCard>
      <DishImage
        src={
          food.recipe.images.LARGE?.url ||
          "https://cdn-icons-png.flaticon.com/512/467/467853.png"
        }
      />
      <DishName>{food.recipe.label}</DishName>
      <ul>
        {food.recipe.cuisineType.map((rec) => {
          return <Cuisine key={nanoid()}>{rec}</Cuisine>;
        })}
      </ul>
      <Chef>Chef: {food.recipe.source}</Chef>
      <DetailsBtn>Details</DetailsBtn>
    </DishCard>
  );
};

export default Dishes;
