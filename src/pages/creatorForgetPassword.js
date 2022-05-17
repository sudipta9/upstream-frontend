import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  creatorSelector,
  clearState,
  forgetPassword,
} from "../features/creators/creatorsSlice";
const CreatorForgetPassword = () => {
  const initialForgetPassRender = useRef(true);
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();
  const {
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    doneForgetPasswordMsg,
  } = useSelector(creatorSelector);

  const validateEmail = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validRegex) ? true : false;
  };

  useEffect(() => {
    //* Prevent checking form initial loading
    if (initialForgetPassRender.current)
      initialForgetPassRender.current = false;
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

  useEffect(() => {
    if (isError) {
      setErrMsg(errorMessage);
      dispatch(clearState());
    }
    if (isFetching) console.log("Wait");

    if (isSuccess) {
      setSuccessMsg(doneForgetPasswordMsg);
      dispatch(clearState());
    }
  }, [
    isError,
    isSuccess,
    isFetching,
    errorMessage,
    doneForgetPasswordMsg,
    dispatch,
  ]);

  const hostname = `${window.location.hostname}/reset-password`;
  return (
    <Form.Container backgroundImage="/images/misc/login-the-crown.jpg">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(forgetPassword({ email, domain: hostname }));
        }}
      >
        <Form.Heading>RECOVER PASSWORD</Form.Heading>
        {!successMsg ? (
          <>
            <Form.Text>
              Please enter your username or email address.
              <br />
              You will receive a link to create a new password via email.
            </Form.Text>
            {errMsg && <Form.ErrorMessage>{errMsg}</Form.ErrorMessage>}
            <FormInput.Container required>
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // placeholder="mail@domain.com"
              />
              {!isEmailValid && (
                <FormInput.Message>{emailMessage}</FormInput.Message>
              )}
            </FormInput.Container>
            <Form.SubmitButton
              type="submit"
              disabled={isEmailValid ? false : true}
            >
              Forget Password
            </Form.SubmitButton>
            Want to sign in as a creator?{" "}
            <Link to="/creator/sign-in">click here</Link>
          </>
        ) : (
          <>
            <Form.Text>{successMsg}</Form.Text>
            <Form.Text>
              Go back to <Link to="/creator/sign-in">Sign in</Link>
            </Form.Text>
          </>
        )}
      </Form>
    </Form.Container>
  );
};

export default CreatorForgetPassword;
