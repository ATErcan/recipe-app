import { Container, NotFoundText } from "../styles/NotFound.styled";

const NotFound = () => {
  return (
    <Container>
      <NotFoundText>
        Looks like we don't have the recipe you are looking for.
      </NotFoundText>
    </Container>
  );
};

export default NotFound;
