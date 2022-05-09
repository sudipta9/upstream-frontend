import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Form, FormInput } from "../components";
import {
  userSelector,
  checkResetPasswordToken,
  resetPassword,
  clearState,
} from "../features/user/userSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get("token");
  const { isFetching, isSuccess, isError, errorMessage, passwordChangeMsg } =
    useSelector(userSelector);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const initialPasswordRender = useRef(true);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const initialConfirmPasswordRender = useRef(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  useEffect(() => {
    dispatch(checkResetPasswordToken({ token: token }));
  }, [dispatch, token]);

  const validatePassword = (password) => {
    const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password.match(validRegex) ? true : false;
  };
  useEffect(() => {
    if (isFetching) console.log("wait");
    if (isError) {
      setErrMessage(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
    }
    if (passwordChangeMsg) {
      navigate("/sign-in");
    }
  }, [
    dispatch,
    errorMessage,
    isError,
    isFetching,
    isSuccess,
    navigate,
    passwordChangeMsg,
  ]);

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

  return (
    <Form.Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(resetPassword({ token, password }));
        }}
      >
        <Form.Heading>RESET PASSWORD</Form.Heading>
        {errMessage ? (
          <>
            <Form.Text>{errMessage}</Form.Text>
            <Form.Text>
              To reset your password{" "}
              <Link to="/forget-password">click here</Link>
            </Form.Text>
          </>
        ) : (
          <>
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
                isPasswordValid && isConfirmPasswordValid ? false : true
              }
            >
              Register
            </Form.SubmitButton>
          </>
        )}
        Want to sign in? <Link to="/sign-in">click here</Link>
      </Form>
    </Form.Container>
  );
};

export default ResetPassword;
