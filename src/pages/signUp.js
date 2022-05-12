import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  userSignUp,
  userSelector,
  clearState,
} from "../features/user/userSlice";
import isUserAuthenticated from "../helper/userAuthentication";

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
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

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
    if (isUserAuthenticated()) navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isError) {
      // console.log(errorMessage);
      setErrorMsg(errorMessage);
      dispatch(clearState());
    }
    if (isFetching) console.log("Wait");

    if (isSuccess) {
      // dispatch(clearState());
      // console.log("success");
      navigate("/choose-plan");
    }
  }, [dispatch, errorMessage, isError, isFetching, isSuccess, navigate]);

  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userSignUp({ email, password }));
        }}
      >
        <Form.Heading>Sign Up</Form.Heading>
        {errorMsg && <Form.ErrorMessage>{errorMsg}</Form.ErrorMessage>}
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
        <Form.SubmitButton
          type="submit"
          disabled={
            isEmailValid && isPasswordValid && isConfirmPasswordValid
              ? false
              : true
          }
        >
          Register
        </Form.SubmitButton>
        Already have an account? <Link to="/sign-in">Login Here</Link>
      </Form>
    </Form.Container>
  );
};

export default SignUp;
