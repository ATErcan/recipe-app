import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" style={{ textDecoration: "none" }}>
        <MainHeading>{`<aTe></Recipes>`}</MainHeading>
      </Link>
      <Icon onClick={toggleNavbar} />

      <NavContainer navToggle={navToggle}>
        <NavLinks to="recipe">Recipe</NavLinks>
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
