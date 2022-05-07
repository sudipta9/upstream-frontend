import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, FormInput } from "../components";

const SignInContainer = () => {
  const initialEmailRender = useRef(true);
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const initialPasswordRender = useRef(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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
    if (initialPasswordRender.current) initialPasswordRender.current = false;
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

  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form>
        <Form.Heading>Sign In</Form.Heading>
        <FormInput.Container required>
          <FormInput.Label>Email Address</FormInput.Label>
          <FormInput
            type="email"
            name="email"
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && (
            <FormInput.Message>{passwordMessage}</FormInput.Message>
          )}
        </FormInput.Container>
        <Form.SubmitButton type="submit">Sign In</Form.SubmitButton>
        <Link to="/sign-up">Register</Link> |{" "}
        <Link to="/forgot-password">Forget Password?</Link>
      </Form>
    </Form.Container>
  );
};

export default SignInContainer;
