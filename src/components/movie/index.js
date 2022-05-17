import React from "react";
import { Col } from "react-bootstrap";
import { Container, Creator, Summary, Thumbnail, Title } from "./styles/movie";

const Movie = ({ children, ...restProps }) => {
  return (
    <Col sm md="4" lg="3" className="g-3" {...restProps}>
      <Container className="d-flex flex-column">{children}</Container>
    </Col>
  );
};

Movie.Thumbnail = ({ children, ...restProps }) => {
  return <Thumbnail {...restProps} />;
};

Movie.Title = ({ children, ...restProps }) => {
  return <Title>{children}</Title>;
};

Movie.Creator = ({ children, ...restProps }) => {
  return <Creator>{children}</Creator>;
};

Movie.Summary = ({ children, ...restProps }) => {
  return <Summary>{children}</Summary>;
};

export default Movie;
