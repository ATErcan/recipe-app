import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSection = styled.section`
  padding: 2rem 1.5rem;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const SignUpLink = styled(Link)`
  color: #000;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
