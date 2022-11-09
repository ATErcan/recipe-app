import {
  Chef,
  Cuisine,
  DetailsBtn,
  DishCard,
  DishImage,
  DishName,
} from "../styles/Preview.styled";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Dishes = ({ food }) => {
  const navigate = useNavigate();

  const showDetails = () => {
    console.log(food._links.self.href.split("").slice(38));
    const linkArr = food._links.self.href.split("").slice(38);
    const indexOfQ = linkArr.indexOf("?");
    const link = linkArr.slice(0, indexOfQ).join("");
    navigate(`/recipe/${link}`, { state: food });
  };

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
      <DetailsBtn onClick={showDetails}>Details</DetailsBtn>
    </DishCard>
  );
};

export default Dishes;
