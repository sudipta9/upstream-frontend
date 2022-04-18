import React from "react";
import { Container, FormContent, Heading, SubmitButton } from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return (
    <div className="container" style={{ paddingTop: "130px" }}>
      <div className="row">
        <div className="col-lg-12" style={{ textAlign: "center" }}>
          <FormContent {...restProps} noValidate>{children}</FormContent>
        </div>
      </div>
    </div>
  );
};

Form.Container = ({ children, ...restProps }) => {
  return (
    <Container {...restProps} className="position-relative pb-0">
      {children}
    </Container>
  );
};

Form.Heading = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Form.SubmitButton = ({ children, ...restProps }) => {
  return <SubmitButton {...restProps}>{children}</SubmitButton>;
};

export default Form;
