import {
  Chef,
  Cuisine,
  CuisineUl,
  DetailsBtn,
  DishCard,
  DishImage,
  DishName,
} from "../styles/Preview.styled";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const Dishes = ({ food }) => {
  const navigate = useNavigate();
  const { setFrom } = useContext(LoginContext);

  const showDetails = () => {
    setFrom(true);
    const linkArr = food._links.self.href.split("").slice(38);
    const indexOfQ = linkArr.indexOf("?");
    const link = linkArr.slice(0, indexOfQ).join("");
    navigate(`/recipe/${link}`, { state: food });
  };

  return (
    <DishCard>
      <DishImage
        src={
          food.recipe.image ||
          food.recipe.images.LARGE?.url ||
          "https://cdn-icons-png.flaticon.com/512/467/467853.png"
        }
        alt={food.recipe.label}
      />
      <DishName>{food.recipe.label}</DishName>
      <CuisineUl>
        {food.recipe.cuisineType.map((rec) => {
          return <Cuisine key={nanoid()}>{rec}</Cuisine>;
        })}
      </CuisineUl>
      <Chef>
        <b>Chef:</b> {food.recipe.source}
      </Chef>
      <DetailsBtn onClick={showDetails}>Details</DetailsBtn>
    </DishCard>
  );
};

export default Dishes;
