import React from "react";
import { Container, Input, Label, Message, Textarea } from "./styles/formInput";

const FormInput = ({ value, ...restProps }) => {
  return <Input {...restProps} value={value} />;
};

FormInput.Textarea = ({ children, ...restProps }) => {
  return <Textarea {...restProps}>{children}</Textarea>;
};

FormInput.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

FormInput.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

FormInput.Message = ({ children, ...restProps }) => {
  return <Message {...restProps}>{children}</Message>;
};
export default FormInput;
