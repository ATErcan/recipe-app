import styled from "styled-components";
import bgAbout from "../../images/bg-about.jpg";

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56px);
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 103px);
    background-image: url(${bgAbout});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    justify-content: flex-end;
    padding: 0 5%;
  }
  @media screen and (min-width: 992px) {
    padding: 0 10%;
  }
  @media screen and (min-width: 1400px) {
    padding: 0 15%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 400px;
  @media screen and (min-width: 1400px) {
    max-width: 500px;
  }
`;

export const Image = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 992px) {
    width: 250px;
  }
  @media screen and (min-width: 1400px) {
    width: 280px;
  }
`;

export const Name = styled.h3`
  font-size: 2rem;
  margin: 1rem auto;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 3rem;
  }
`;

export const Me = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.3rem;
  }
`;
