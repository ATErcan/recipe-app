import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { ImPointRight } from "react-icons/im";

export const RecipeSection = styled.section`
  min-height: calc(100vh -57px);
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 103px);
  }
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  @media screen and (min-width: 992px) {
    padding: 2rem 0;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding: 0.5rem 0;
`;

export const CookIcon = styled(GiCook)`
  font-size: 1.5rem;
  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

export const PointIcon = styled(ImPointRight)`
  font-size: 1.5rem;
  color: #1565c0;
`;

export const SearchContainer = styled(TitlesContainer)`
  flex-direction: column;
  row-gap: 0.7rem;
`;

export const CookText = styled.h2`
  font-size: 2rem;
  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const FindText = styled.h4`
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

export const Dropdown = styled.select`
  width: 220px;
  border: 1px solid #333;
  border-radius: 5px;
  outline: none;
  padding: 0.8rem 0.5rem;
  @media screen and (min-width: 992px) {
    width: 300px;
  }
`;

export const Options = styled.option`
  width: inherit;
`;

export const FoodInput = styled.input`
  width: 220px;
  border: 1px solid #333;
  border-radius: 5px;
  outline: none;
  padding: 0.8rem 0.5rem;
  @media screen and (min-width: 992px) {
    width: 300px;
  }
`;

export const FoodForm = styled.form``;

export const SearchBtn = styled.button`
  background-color: #00f;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
`;

export const LoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;
