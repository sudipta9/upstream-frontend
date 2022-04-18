import React from "react";
import { Container, Header, Icon, SignIn } from "./styles/homeHeader";

const HomeHeader = ({ children, ...restProps }) => {
  return (
    <Header
      {...restProps}
      className="d-flex justify-content-start align-items-center"
    >
      {children}
    </Header>
  );
};

HomeHeader.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

HomeHeader.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}>{children}</Icon>;
};

HomeHeader.SignIn = ({ children, ...restProps }) => {
  return <SignIn {...restProps}>{children}</SignIn>;
};
export default HomeHeader;
