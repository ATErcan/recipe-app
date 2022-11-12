import styled from "styled-components";

export const RecipeDetails = styled.section`
  background-color: #f2f2f2;
  padding: 0.5rem 1rem 2rem;
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 103px);
  }
`;

export const Recipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292d33;
  width: 90%;
  height: auto;
  position: relative;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  padding: 0 1rem 2rem;
  @media screen and (min-width: 576px) {
    width: 70%;
    padding: 0 1.5rem 2rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    padding: 1rem;
    border-radius: 15px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 70rem;
    padding: 2rem 2rem 2rem 0;
  }
`;

export const RecipeImage = styled.img`
  position: relative;
  width: 80%;
  z-index: 1;
  margin-top: -5rem;
  @media screen and (min-width: 576px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    max-width: 250px;
    margin: 0;
    margin-left: -6rem;
  }
  @media screen and (min-width: 992px) {
    min-width: 400px;
  }
`;

export const RecipeInfo = styled.div`
  background-color: #f5f7fa;
  width: 75%;
  height: auto;
  position: relative;
  z-index: 2;
  padding: 1rem;
  font-family: Roboto, sans-serif;
  margin-top: -2.5rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    min-width: 250px;
    margin: 0;
    margin-left: -2.5rem;
    margin-right: 1rem;
  }
  @media screen and (min-width: 992px) {
    min-width: 300px;
    margin-left: -5rem;
  }
`;

export const RecipeName = styled.h3`
  margin: 0 0 0.5rem;
  color: #ea7476;
  @media screen and (min-width: 576px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const InfoTitles = styled.h5`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  color: #000;
  @media screen and (min-width: 576px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const InfoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.3rem;
  list-style-type: none;
`;

export const InfoText = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  text-transform: capitalize;
  color: #000;
  @media screen and (min-width: 576px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 0.9rem;
  }
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IngTitle = styled.h4`
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  margin-left: 0.7rem;
  line-height: 2rem;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const Ingredients = styled.li`
  list-style-type: circle;
  margin-left: 0.7rem;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const OtherTitles = styled(InfoTitles)`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

export const OtherText = styled(InfoText)`
  font-size: 1rem;
  line-height: 1.4rem;
  color: #fff;
  &:nth-child(even) {
    color: #8fb2b9;
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const Source = styled.p`
  text-align: end;
  font-size: 1rem;
  font-style: normal;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const SourceUrl = styled.a`
  color: #fff;
  font-style: italic;
  font-weight: bold;
`;
