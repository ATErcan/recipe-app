import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import {
  NavContainer,
  Icon,
  MainHeading,
  NavLinks,
  StyledNav,
} from "../styles/Navbar.styled";

const Navbar = () => {
  const { login, setLogin } = useContext(LoginContext);
  const [navToggle, setNavToggle] = useState(false);

  const toggleNavbar = () => {
    setNavToggle((prevNavToggle) => !prevNavToggle);
  };

  return (
    <StyledNav>
      <MainHeading>{`<aTe></Recipes>`}</MainHeading>
      <Icon onClick={toggleNavbar} />

      <NavContainer navToggle={navToggle}>
        <NavLinks to="/">Recipe</NavLinks>
        <NavLinks to="/">About</NavLinks>
        <NavLinks to="/">Github</NavLinks>
        <NavLinks to="/login">{login ? "Logout" : "Login"}</NavLinks>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
