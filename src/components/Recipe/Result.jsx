import { ClockLoader } from "react-spinners";
import { LoadContainer } from "../styles/Recipe.styled";
import Preview from "./Preview";

const Result = ({ recipes, status }) => {
  if (status.loading) {
    console.log("loading");
    return (
      <LoadContainer>
        <ClockLoader color="#00f" size={100} speedMultiplier={3} />
      </LoadContainer>
    );
  } else if (status.error) {
    console.log("error");
    return <p>error</p>;
  } else if (recipes?.length === 0) {
    console.log("no data");
    return <p>notFound</p>;
  } else if (recipes?.length > 0) {
    console.log("data");
    return <Preview recipes={recipes} />;
  }
};

export default Result;
