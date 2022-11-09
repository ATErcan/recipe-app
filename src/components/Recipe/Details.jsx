import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { state: food } = useLocation();
  const { id } = useParams();

  return (
    <>
      <div>
        <h3>{food.recipe.label}</h3>
        <ul>
          <li>Ingredients</li>
          <li>Ingredients1</li>
          <li>Ingredients2</li>
          <li>Ingredients3</li>
        </ul>
        <img src={food.recipe.image} alt="" />
      </div>
    </>
  );
};

export default Details;
