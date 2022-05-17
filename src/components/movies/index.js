import React from "react";
import { Container, Row } from "react-bootstrap";

const Movies = ({ children, ...restProps }) => {
  return (
    <Row className="mt-3 flex-wrap" {...restProps}>
      {children}
    </Row>
  );
};

Movies.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Movies;
