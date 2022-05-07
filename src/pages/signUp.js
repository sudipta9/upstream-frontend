import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormInput } from "../components";

const SignUp = () => {
  const navigate = useNavigate();

  const initialEmailRender = useRef(true);
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const initialPasswordRender = useRef(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const initialConfirmPasswordRender = useRef(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const validateEmail = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validRegex) ? true : false;
  };

  const validatePassword = (password) => {
    const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password.match(validRegex) ? true : false;
  };

  // check email
  useEffect(() => {
    //* Prevent checking form initial loading
    if (initialEmailRender.current) initialEmailRender.current = false;
    //* start checking form when value changed
    else {
      const validate = setTimeout(() => {
        if (!validateEmail(email)) {
          setEmailMessage("Please provide a valid email");
        } else {
          setIsEmailValid(true);
          setEmailMessage("");
        }
      }, 1000);

      return () => {
        clearTimeout(validate);
      };
    }
  }, [email]);

  // check password
  useEffect(() => {
    //* Prevent checking form initial loading
    if (initialConfirmPasswordRender.current)
      initialConfirmPasswordRender.current = false;
    //* start checking form when value changed
    else {
      const validate = setTimeout(() => {
        if (!validatePassword(password)) {
          setIsPasswordValid(false);
          setPasswordMessage("Please choose a strong password");
        } else {
          setIsPasswordValid(true);
          setPasswordMessage("");
        }
      }, 1000);

      return () => {
        clearTimeout(validate);
      };
    }
  }, [password]);

  // check confirm password
  useEffect(() => {
    //* Prevent checking form initial loading
    if (initialPasswordRender.current) initialPasswordRender.current = false;
    //* start checking form when value changed
    else {
      const validate = setTimeout(() => {
        if (password !== confirmPassword) {
          setIsConfirmPasswordValid(false);
          setConfirmPasswordMessage("Password does not match");
        } else {
          setIsConfirmPasswordValid(true);
          setConfirmPasswordMessage("");
        }
      }, 1000);

      return () => {
        clearTimeout(validate);
      };
    }
  }, [confirmPassword, password]);

  useEffect(() => {
    isEmailValid && isPasswordValid && isConfirmPasswordValid
      ? setDisabled(false)
      : setDisabled(true);
  }, [isConfirmPasswordValid, isEmailValid, isPasswordValid]);

  const signupAction = async (data) => {
    const res = await fetch("http://localhost:80");
    console.log(res);
  };
  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signupAction({
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          });
          navigate("./choose-plan");
        }}
      >
        <Form.Heading>Sign Up</Form.Heading>
        <FormInput.Container required>
          <FormInput.Label>Email Address</FormInput.Label>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && (
            <FormInput.Message>{emailMessage}</FormInput.Message>
          )}
        </FormInput.Container>
        <FormInput.Container required>
          <FormInput.Label>Password</FormInput.Label>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && (
            <FormInput.Message>{passwordMessage}</FormInput.Message>
          )}
        </FormInput.Container>
        <FormInput.Container required>
          <FormInput.Label>Repeat Password</FormInput.Label>
          <FormInput
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!isConfirmPasswordValid && (
            <FormInput.Message>{confirmPasswordMessage}</FormInput.Message>
          )}
        </FormInput.Container>
        <Form.SubmitButton type="submit" disabled={disabled}>
          Register
        </Form.SubmitButton>
        Already have an account? <Link to="/sign-in">Login Here</Link>
      </Form>
    </Form.Container>
  );
};

export default SignUp;
