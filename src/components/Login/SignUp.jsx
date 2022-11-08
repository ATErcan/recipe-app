import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FlexCol,
  Form,
  LoginDiv,
  LoginSection,
  LoginText,
  LoginTitle,
  RecipeImage,
  SignUpLink,
} from "./Login.styled";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <LoginSection>
      <Form>
        <LoginDiv>
          <LoginTitle>Sign Up</LoginTitle>
          <RecipeImage
            src="https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=1380&t=st=1667911537~exp=1667912137~hmac=fbc8326c488ea7886034fa18bbeba522c5a39b13729a150d152cdad1a23ddd97"
            alt="recipe"
          />
        </LoginDiv>
        <FlexCol>
          <TextField
            type="email"
            label="Email"
            placeholder="Enter your email"
            margin="normal"
          />
          {/*       <TextField
        type="password"
        label="Password"
        placeholder="Enter your password"
    /> */}
          <OutlinedInput
            id="outlined-adornment-password"
            // type={values.showPassword ? "text" : "password"}
            // value={values.password}
            // onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  //   onClick={handleClickShowPassword}
                  //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {<VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FlexCol>

        <Button
          variant="contained"
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
          <SignUpLink to="/login">Login</SignUpLink>
        </LoginText>
      </Form>
    </LoginSection>
  );
};

export default SignUp;
