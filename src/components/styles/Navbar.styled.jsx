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
`;

export const MainHeading = styled.h2`
  font-size: 1.3rem;
  padding: 1rem;
`;

export const Icon = styled(GiHamburgerMenu)`
  padding-right: 1rem;
  font-size: 2.3rem;
  &:hover {
    opacity: 0.7;
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
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  background-color: #2a2a2a;
  padding: 0.4rem 0;
  text-indent: 1rem;
`;

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  background-color: #2a2a2a;
  padding: 0.4rem 0;
  text-indent: 1rem;
`;
