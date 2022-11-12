import { ClockLoader } from "react-spinners";
import { LoadContainer } from "../styles/Recipe.styled";
import Preview from "./Preview";

const Result = ({ recipes, status }) => {
  if (status.loading) {
    return (
      <LoadContainer>
        <ClockLoader color="#00f" size={100} speedMultiplier={3} />
      </LoadContainer>
    );
  } else if (status.error) {
    return <p>error</p>;
  } else if (recipes?.length === 0) {
    return <p>notFound</p>;
  } else if (recipes?.length > 0) {
    return <Preview recipes={recipes} />;
  }
};

export default Result;
