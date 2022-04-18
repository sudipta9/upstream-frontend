import { darken, lighten } from "polished";
import styled from "styled-components/macro";

export const Container = styled.div`
  &:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      ${(props) =>
        props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
    filter: blur(6px);
    background-size: cover !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    position: fixed;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export const FormContent = styled.form`
  padding: 30px 30px 50px 30px;
  background: #0a0e17;
  position: relative;
  z-index: 9;
  width: 100%;
  max-width: 500px;
  display: inline-block;
  text-align: left;

  a {
    text-decoration: none;
    color: #0583d2;
    font-weight: 400;
    padding: 5px;

    &:hover {
      color: #0583d2;
      text-decoration: underline;
    }

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
`;

export const Heading = styled.h1`
  border-bottom: 1px solid #182031;
  position: relative;
  margin: 0px 0 20px 0;
  padding: 0 0 10px 0;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  &:before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    display: inline-block;
    width: 100px;
    height: 3px;
    background-color: #0583d2;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 0;
  display: block;
  max-width: 150px;
  width: 100%;
  border: none;
  outline: none;
  margin: 20px 0;
  color: #fff;
  background: ${(props) => props.disabled ? lighten(0.3, "#0583d2" ) : "#0583d2" };
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  :hover{
    background: ${props => !props.disabled && darken(0.1, "#0583d2")};
  }
`;
