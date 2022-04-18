import React from "react";
import {
  Container,
  CopyrightText,
  List,
  ListLinkContainer,
  ListLinkText,
  Title,
  Wrapper,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Footer.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

Footer.ListLink = ({ children, href, ...restProps }) => {
  return (
    <ListLinkContainer {...restProps}>
      <ListLinkText href={href}>{children}</ListLinkText>
    </ListLinkContainer>
  );
};

Footer.CopyrightText = ({ children, ...restProps }) => {
  return <CopyrightText {...restProps}>{children}</CopyrightText>;
};

export default Footer;
