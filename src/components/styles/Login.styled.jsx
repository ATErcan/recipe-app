import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSection = styled.section`
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 103px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 2rem 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: auto;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    padding: 2rem;
    width: 500px;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LoginTitle = styled.h3`
  font-size: 2rem;
`;

export const RecipeImage = styled.img`
  width: 120px;
`;

export const LoginText = styled.p`
  font-size: 1rem;
`;

export const SignUpLink = styled(Link)`
  color: #000;
  &:hover {
    opacity: 0.7;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginLink = styled.button`
  background-color: #fff;
  text-decoration: underline;
  border: none;
  color: #000;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
