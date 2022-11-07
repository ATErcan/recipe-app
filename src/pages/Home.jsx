import {
  AlignContainer,
  Description,
  DescText,
  HomeSection,
  Title,
  TitleDiv,
} from "../components/styles/Home.styled";

const Home = () => {
  return (
    <HomeSection>
      <AlignContainer>
        <TitleDiv>
          <Title>The Best Recipes</Title>
        </TitleDiv>
      </AlignContainer>
      <AlignContainer justify="flex-end">
        <Description>
          <DescText>
            Tired of eating the same food every day? Want to try other flavors?
            Do not hesitate to innovate. Access the recipes of hundreds of
            flavors with one click. Join {`<aTe>`}Recipes and enrich your table.
          </DescText>
        </Description>
      </AlignContainer>
    </HomeSection>
  );
};

export default Home;
