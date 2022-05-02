import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormInput } from "../components";

const SignInContainer = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
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
        </FormInput.Container>
        <FormInput.Container required>
          <FormInput.Label>Password</FormInput.Label>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput.Container>
        <Form.SubmitButton type="submit">Sign In</Form.SubmitButton>
        <Link to="/sign-up">Register</Link> |{" "}
        <Link to="/forgot-password">Forget Password?</Link>
      </Form>
    </Form.Container>
  );
};

export default SignInContainer;
