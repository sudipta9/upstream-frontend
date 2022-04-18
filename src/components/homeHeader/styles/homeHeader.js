import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;
  background: transparent;

  @media (max-width: 480px) {
    height: 45px;
  }
`;

export const Header = styled.header`
  padding-top: 0.5rem;
  height: auto;
  margin: 0 3rem;

  @media (max-width: 768px) {
    margin: 0 45px;
  }

  @media (max-width: 480px) {
    margin: 0 5%;
  }
`;

export const Icon = styled.span`
  margin-right: auto;
  width: auto;
  height: 1.8rem;

  @media (max-width: 768px) {
    height: 1.3rem;
  }
  img {
    height: 100%;
  }
`;

export const SignIn = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: #0583d2;
  color: #fff;
`;
