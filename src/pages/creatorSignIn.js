import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  creatorSignIn,
  creatorSelector,
  clearState,
} from "../features/creators/creatorsSlice";
import isUserAuthenticated from "../helper/userAuthentication";

const CreatorSignIn = () => {
  const initialEmailRender = useRef(true);
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const initialPasswordRender = useRef(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage, role } =
    useSelector(creatorSelector);

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

  useEffect(() => {
    if (isUserAuthenticated()) navigate("/creator");
  }, [navigate]);

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      setErrorMsg(errorMessage);
      dispatch(clearState());
    }
    if (isFetching) console.log("Wait");
    if (isSuccess) {
      if (role === "creator") navigate("/creator");
      else setErrorMsg("This is not an Creator account");
    }
  }, [isError, isSuccess, isFetching, dispatch, errorMessage, navigate, role]);

  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(creatorSignIn({ email, password }));
        }}
      >
        <Form.Heading>Creator Sign In</Form.Heading>
        {errorMsg && <Form.ErrorMessage>{errorMsg}</Form.ErrorMessage>}
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
        <Form.SubmitButton
          type="submit"
          disabled={isEmailValid && isPasswordValid ? false : true}
        >
          Sign In
        </Form.SubmitButton>
        <Link to="/creator/forget-password">Forget Password?</Link>
      </Form>
    </Form.Container>
  );
};

export default CreatorSignIn;
