import React from "react";
import styled from "styled-components/macro";

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  .chain {
    position: relative;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .chains {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #0583d2;
    position: absolute;
    border-radius: 50%;
    /* box-shadow: 0 0 5px #0583d2; */
  }
  .chains:nth-child(1) {
    left: -10px;
    animation: picky 1s infinite linear;
  }

  .chains:nth-child(2) {
    animation: picky 1s infinite 0.33s linear;
  }
  .chains:nth-child(3) {
    left: 10px;
    animation: picky 1s infinite 0.66s linear;
  }
  .chains:nth-child(4) {
    left: 20px;
    animation: picky 1s infinite linear;
  }

  @keyframes picky {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="chain">
        <div className="chains"></div>
        <div className="chains"></div>
        <div className="chains"></div>
        <div className="chains"></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
