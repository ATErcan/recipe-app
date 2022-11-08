import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import {
  NavContainer,
  Icon,
  MainHeading,
  NavLinks,
  StyledNav,
  GitHub,
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
        <NavLinks to="about">About</NavLinks>
        <GitHub href="https://github.com/ATErcan" target="_blank">
          Github
        </GitHub>
        <NavLinks to="login">{login ? "Logout" : "Login"}</NavLinks>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
