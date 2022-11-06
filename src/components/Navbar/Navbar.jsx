import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavContainer,
  Icon,
  MainHeading,
  NavLinks,
  StyledNav,
} from "../styles/Navbar.styled";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNavbar = () => {
    setNavToggle((prevNavToggle) => !prevNavToggle);
  };

  return (
    <StyledNav>
      <MainHeading>{`<aTe></ResTauranT>`}</MainHeading>
      <Icon onClick={toggleNavbar} />

      <NavContainer navToggle={navToggle}>
        <NavLinks to="/">Recipe</NavLinks>
        <NavLinks to="/">About</NavLinks>
        <NavLinks to="/">Github</NavLinks>
        <NavLinks to="/">Login/Logout</NavLinks>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
