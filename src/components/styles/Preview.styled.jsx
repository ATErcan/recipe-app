import styled from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 75%;
  grid-template-rows: auto;
  row-gap: 1.5rem;
  padding: 1rem 0;
  justify-content: center;
  background-color: #f9f6f2;
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
`;
