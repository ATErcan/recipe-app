import styled from "styled-components";
import mobileNoPage from "../../images/mob-nopage.jpg";
import noPage from "../../images/noPage.jpg";

export const NoPageFound = styled.section`
  width: 100vw;
  height: calc(100vh - 57px);
  background-image: url(${mobileNoPage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 97px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 103px);
    background-image: url(${noPage});
  }
`;
