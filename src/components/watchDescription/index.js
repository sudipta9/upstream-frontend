import React from "react";
import { Creator, Description, Title } from "./styles/watchDescription";

const WatchDescription = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>;
};

WatchDescription.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

WatchDescription.Creator = ({ children, ...restProps }) => {
  return <Creator {...restProps}>{children}</Creator>;
};

export default WatchDescription;
