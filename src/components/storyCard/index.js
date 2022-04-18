import React from "react";
import {
  Container,
  Content,
  Image,
  Inner,
  Outer,
  SubTitle,
  Title,
} from "./styles/storyCard";

const StoryCard = ({ children, direction = "row", ...restProps }) => {
  return (
    <Outer className="container-fluid d-flex">
      <Inner className="container-fluid d-flex m-auto" direction={direction}>
        {children}
      </Inner>
    </Outer>
  );
};

StoryCard.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

StoryCard.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

StoryCard.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
StoryCard.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

StoryCard.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

export default StoryCard;
