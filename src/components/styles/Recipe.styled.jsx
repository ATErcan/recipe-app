import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { ImPointRight } from "react-icons/im";

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding: 0.5rem 0;
`;

export const CookIcon = styled(GiCook)`
  font-size: 1.5rem;
`;

export const PointIcon = styled(ImPointRight)`
  font-size: 1.5rem;
`;

export const SearchContainer = styled(TitlesContainer)`
  flex-direction: column;
  row-gap: 0.7rem;
`;

export const Dropdown = styled.select`
  width: 220px;
  border: 1px solid #333;
  border-radius: 5px;
  outline: none;
  padding: 0.8rem 0.5rem;
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
`;

export const FoodForm = styled.form`
  border: 1px solid #f00;
`;

export const SearchBtn = styled.button`
  background-color: #00f;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
`;
