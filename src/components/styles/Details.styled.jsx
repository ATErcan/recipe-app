import styled from "styled-components";

export const RecipeDetails = styled.section`
  background-color: #f2f2f2;
  padding: 0.5rem 1rem 2rem;
  min-height: calc(100vh - 56px);
`;

export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecipeImage = styled.img`
  position: relative;
  width: 80%;
  margin-top: 3rem;
  z-index: 1;
`;

export const RecipeInfo = styled.div`
  background-color: #f5f7fa;
  width: 75%;
  height: auto;
  position: relative;
  margin-top: -4rem;
  z-index: 2;
  padding: 1rem;
  font-family: Roboto, sans-serif;
`;

export const RecipeName = styled.h3`
  margin: 0 0 0.5rem;
  color: #ea7476;
`;

export const InfoTitles = styled.h5`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const InfoText = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  text-transform: capitalize;
`;

export const InfoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.3rem;
  list-style-type: none;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const OtherInfo = styled.div`
  background-color: #292d33;
  width: 90%;
  height: auto;
  position: relative;
  margin-top: -17rem;
  padding: 18rem 1rem 2rem;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
`;

export const IngTitle = styled.h4`
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-left: 0.7rem;
  line-height: 2rem;
  text-decoration: underline;
`;

export const Ingredients = styled.li`
  list-style-type: circle;
  margin-left: 0.7rem;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const OtherTitles = styled(InfoTitles)`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

export const OtherText = styled(InfoText)`
  font-size: 1rem;
  line-height: 1.4rem;
  &:nth-child(even) {
    color: #8fb2b9;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Source = styled.p`
  text-align: end;
  font-size: 1rem;
  font-style: normal;
`;

export const SourceUrl = styled.a`
  color: #fff;
  font-style: italic;
  font-weight: bold;
`;
