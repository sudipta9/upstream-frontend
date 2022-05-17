import React from "react";
import { Container } from "react-bootstrap";
import { WatchDescription } from "../components";

const WatchDescriptionContainer = (props) => {
  return (
    <Container className="mt-4" style={{ maxWidth: "1200px" }}>
      <WatchDescription.Title>{props.title}</WatchDescription.Title>
      <WatchDescription.Creator>{props.creator}</WatchDescription.Creator>
      <WatchDescription>{props.description}</WatchDescription>
    </Container>
  );
};

export default WatchDescriptionContainer;
