import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(42, 42, 42, 0.9);
  color: #fff;
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 576px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (min-width: 768px) {
    padding: 1rem 3rem;
  }
  @media screen and (min-width: 992px) {
    justify-content: space-around;
    padding: 1rem 0;
  }
`;

export const MainHeading = styled.h2`
  font-size: 1.3rem;
  padding: 1rem;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 576px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Icon = styled(GiHamburgerMenu)`
  padding-right: 1rem;
  font-size: 2.3rem;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.1rem;
  width: 100%;
  max-height: ${({ navToggle }) => (navToggle ? "9rem" : "0rem")};
  overflow: hidden;
  transition: all linear 0.3s;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    width: auto;
    max-height: unset;
    overflow: visible;
  }
  @media screen and (min-width: 992px) {
    column-gap: 1rem;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  background-color: #2a2a2a;
  padding: 0.4rem 0;
  text-indent: 1rem;
  user-select: none;

  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
    background-color: inherit;
    transition: all ease-in-out 0.5s;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  background-color: #2a2a2a;
  padding: 0.4rem 0;
  text-indent: 1rem;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
    background-color: inherit;
    transition: all ease-in-out 0.5s;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
