import React from "react";
import {
  Background,
  Container,
  Content,
  ImageWrapper,
  SubTitle,
  Title,
  SignUpForm,
  SignUpFormTitle,
  SignUpFormInput,
  SignUpFormInputContainer,
  SignUpFormButton,
  SignInText,
} from "./styles/hero";

const Hero = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

Hero.Container = ({ children, ...restProps }) => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      {...restProps}
    >
      {children}
    </Container>
  );
};

Hero.BackGround = () => {
  return (
    <Background>
      <ImageWrapper>
        <img src="/images/misc/background.jpg" alt="" />
        <div></div>
      </ImageWrapper>
    </Background>
  );
};

Hero.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Hero.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Hero.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Hero.SignUpForm = ({ children, ...restProps }) => {
  return (
    <SignUpForm {...restProps} className="d-flex flex-column">
      {children}
    </SignUpForm>
  );
};

Hero.SignUpFormTitle = ({ children, ...restProps }) => {
  return <SignUpFormTitle {...restProps}>{children}</SignUpFormTitle>;
};

Hero.SignUpFormInputContainer = ({ children, ...restProps }) => {
  return (
    <SignUpFormInputContainer {...restProps}>
      {children}
    </SignUpFormInputContainer>
  );
};

Hero.SignUpFormInput = ({ children, ...restProps }) => {
  return <SignUpFormInput {...restProps}>{children}</SignUpFormInput>;
};

Hero.SignUpFormButton = ({ children, ...restProps }) => {
  return <SignUpFormButton {...restProps}>{children}</SignUpFormButton>;
};

Hero.SignInText = ({ children, ...restProps }) => {
  return <SignInText {...restProps}>{children}</SignInText>;
};

export default Hero;
