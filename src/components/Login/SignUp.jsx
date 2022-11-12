import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  FlexCol,
  Form,
  LoginDiv,
  LoginLink,
  LoginSection,
  LoginText,
  LoginTitle,
  RecipeImage,
} from "../styles/Login.styled";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [, setSavedUsers] = useState(
    JSON.parse(sessionStorage.getItem("users")) || []
  );
  const { user, setUser, setFrom } = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSignUpValues = (e) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = {
      email: user.email,
      password: user.password,
    };

    setSavedUsers((prevSavedUsers) => {
      if (prevSavedUsers.length === 0) {
        sessionStorage.setItem("users", JSON.stringify([newUser]));
        return JSON.parse(sessionStorage.getItem("users"));
      } else {
        sessionStorage.setItem(
          "users",
          JSON.stringify([...prevSavedUsers, newUser])
        );
        return JSON.parse(sessionStorage.getItem("users"));
      }
    });
    alert("Sign Up Successfull");
    setUser({ email: "", password: "" });
    navigate("/login");
  };

  const goLogin = () => {
    setFrom(false);
    navigate("/login");
  };

  return (
    <LoginSection>
      <Form onSubmit={handleSignUp}>
        <LoginDiv>
          <LoginTitle>Sign Up</LoginTitle>
          <RecipeImage
            src="https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=1380&t=st=1667911537~exp=1667912137~hmac=fbc8326c488ea7886034fa18bbeba522c5a39b13729a150d152cdad1a23ddd97"
            alt="recipe"
          />
        </LoginDiv>
        <FlexCol>
          <TextField
            InputLabelProps={{ required: false }}
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            margin="normal"
            value={user.email || ""}
            onChange={handleSignUpValues}
            required
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              label="Password"
              onChange={handleSignUpValues}
              value={user.password || ""}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </FlexCol>

        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "0.5rem",
            maxWidth: "120px",
            padding: "0.6rem 1rem",
          }}
        >
          Sign Up
        </Button>
        <LoginText>
          Do you already have an account?{" "}
          <LoginLink onClick={goLogin} type="button">
            Login
          </LoginLink>
        </LoginText>
      </Form>
    </LoginSection>
  );
};

export default SignUp;
