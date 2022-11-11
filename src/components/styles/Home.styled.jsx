import styled from "styled-components";
import mobileBg from "../../images/mobile-bg-home.jpg";
import bgHome from "../../images/bg-home.jpg";

export const HomeSection = styled.section`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 57px);
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  @media screen and (min-width: 576px) {
    background-image: url(${bgHome});
    height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 103px);
  }
  @media screen and (min-width: 992px) {
    padding: 0 5rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 12rem;
  }
`;

export const AlignContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export const TitleDiv = styled.div`
  max-width: 250px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    padding: 1.5rem 2rem;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  word-spacing: 100vw;
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

export const Description = styled(TitleDiv)`
  margin-top: 1.5rem;
  min-width: 220px;
  max-width: 400px;
  height: auto;
  padding: 2rem 1rem;
  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
  @media screen and (min-width: 992px) {
    max-width: 600px;
  }
`;

export const DescText = styled.p`
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
