import styled from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 75%;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  padding: 1rem 0;
  justify-content: center;
  background-color: #f9f6f2;
  @media screen and (min-width: 576px) {
    grid-template-columns: 50%;
    padding: 2rem 0;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 40% 40%;
    gap: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 25% 25% 25%;
    gap: 1.5rem 2rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 300px);
    gap: 2rem 3rem;
  }
`;

export const DishCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 20px;
`;

export const DishImage = styled.img`
  align-self: center;
  width: 100%;
`;

export const DishName = styled.h4`
  font-size: 1.2rem;
  color: #bfa98b;
  text-transform: uppercase;
  margin: 1rem 0 0.1rem;
`;

export const CuisineUl = styled.ul`
  display: flex;
  column-gap: 0.5rem;
`;

export const Cuisine = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  margin-bottom: 1rem;
  color: #777;
`;

export const Chef = styled.p`
  margin-bottom: 0.5rem;
`;

export const DetailsBtn = styled.button`
  background-color: #bfa98b;
  border: none;
  align-self: flex-end;
  color: #fff;
  padding: 0.5rem 1.8rem;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    opacity: 0.8;
  }
`;
