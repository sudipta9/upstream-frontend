import React from "react";
import { Link } from "react-router-dom";
import { Form, FormInput } from "../components";

const SignInContainer = () => {
  return (
    <Form.Container backgroundImage="/images/misc/background.jpg">
      <Form
        onSubmit={(e) => {
          console.log("submitting form");
          e.preventDefault();
        }}
      >
        <Form.Heading>Sign In</Form.Heading>
        <FormInput.Container>
          <FormInput.Label>Email Address</FormInput.Label>
          <FormInput type="email" important />
        </FormInput.Container>
        <FormInput.Container>
          <FormInput.Label>Password</FormInput.Label>
          <FormInput type="password" important />
        </FormInput.Container>
        <Form.SubmitButton type="submit">Sign In</Form.SubmitButton>
        <Link to="/sign-up">Register</Link> |{" "}
        <Link to="/forgot-password">Forget Password?</Link>
      </Form>
    </Form.Container>
  );
};

export default SignInContainer;
