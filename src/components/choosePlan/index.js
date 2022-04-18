import React from "react";
import {
  Cards,
  Container,
  Heading,
  CardContainer,
  CardDetails,
  Feature,
  Button,
  SubHeading,
} from "./styles/choosePlan";

const ChoosePlan = () => {
  return <div>ChoosePlan</div>;
};

ChoosePlan.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

ChoosePlan.Heading = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};
ChoosePlan.SubHeading = ({ children, ...restProps }) => {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

ChoosePlan.Cards = ({ children, ...restProps }) => {
  return <Cards {...restProps}>{children}</Cards>;
};

ChoosePlan.CardContainer = ({ children, ...restProps }) => {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};

ChoosePlan.CardDetails = ({ children, ...restProps }) => {
  return <CardDetails {...restProps}>{children}</CardDetails>;
};

ChoosePlan.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

ChoosePlan.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default ChoosePlan;
