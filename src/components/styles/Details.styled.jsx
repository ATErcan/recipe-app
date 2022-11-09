import styled from "styled-components";

export const RecipeDetails = styled.section`
  position: relative;
  z-index: -2;
  background-color: #f2f2f2;
  padding: 0.5rem 1rem 2rem;
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
`;

export const RecipeInfo = styled.div`
  background-color: #f5f7fa;
  width: 70%;
  height: auto;
  position: relative;
  margin-top: -4rem;
  z-index: 1;
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
  z-index: -1;
  padding-top: 18rem;
`;
