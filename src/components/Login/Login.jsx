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
  LoginSection,
  LoginText,
  LoginTitle,
  RecipeImage,
  SignUpLink,
} from "../styles/Login.styled";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { setLogin } = useContext(LoginContext);

  const handleLogin = (e) => {
    setLog((prevLog) => {
      return {
        ...prevLog,
        [e.target.name]: e.target.value,
      };
    });
  };

  const logIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(sessionStorage.getItem("users"));
    const isValid = (user) =>
      user.email === log.email && user.password === log.password;
    console.log(users);
    if (users && users.some(isValid)) {
      console.log("Login Successful");
      setLogin(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <LoginSection>
      <Form onSubmit={logIn}>
        <LoginDiv>
          <LoginTitle>Login</LoginTitle>
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
            onChange={handleLogin}
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
              onChange={handleLogin}
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
          type="submit"
          variant="contained"
          sx={{
            marginTop: "0.5rem",
            maxWidth: "120px",
            padding: "0.6rem 1rem",
          }}
        >
          Login
        </Button>
        <LoginText>
          Don't you have an account?{" "}
          <SignUpLink to="/signup">Sign up!</SignUpLink>
        </LoginText>
      </Form>
    </LoginSection>
  );
};

export default Login;
