import styled from "styled-components";

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const ArrowsBtn = styled.button`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  background-color: #bfa98b;
  cursor: pointer;
  color: #fff;
  width: 7.5rem;
  padding: 0.8rem 0;
  border-radius: 15px;
  justify-content: center;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    opacity: 0.8;
  }
`;
