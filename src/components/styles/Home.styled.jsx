import styled from "styled-components";
import mobileBg from "../../images/mobile-bg-home.jpg";

export const HomeSection = styled.section`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 2rem 1.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const Title = styled.h1`
  font-size: 3rem;
  word-spacing: 100vw;
`;

export const Description = styled(TitleDiv)`
  margin-top: 1.5rem;
  min-width: 220px;
  max-width: 400px;
  height: auto;
  padding: 2rem 1rem;
`;

export const DescText = styled.p`
  font-size: 1.5rem;
`;
