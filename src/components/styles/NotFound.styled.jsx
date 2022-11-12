import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://img.freepik.com/free-vector/confused-business-character-making-important-decision_74855-20080.jpg?w=826&t=st=1668264778~exp=1668265378~hmac=42d5f47b5a3e079b0f910e4371ba9529ebe5c49bf2d822d909f0f7b73f10d546");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 220px;
  min-height: 220px;
  max-width: 300px;
  max-height: 300px;
  display: flex;
  margin: auto;
  align-items: flex-end;
  padding: 1rem 0.5rem;
  @media screen and (min-width: 768px) {
    max-width: 400px;
    height: 600px;
  }
  @media screen and (min-width: 992px) {
    width: 600px;
    height: 800px;
  }
`;

export const NotFoundText = styled.h3`
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
