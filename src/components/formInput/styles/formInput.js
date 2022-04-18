import { css } from "styled-components";
import styled from "styled-components/macro";

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;

  ${props => props.required && css`
    ${Label}::after {
      position: absolute;
      top: 0;
      right: -10px;
      content: "*";
      /* padding-left: 5px; */
      color: red;
    }
  `}
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 10px;
  position:relative
`;

export const Input = styled.input`
  width: 100%;
  background-color: #182031;
  /* float: left; */
  font-size: 1.4rem;
  padding: 0 15px;
  height: 50px;
  line-height: 54px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: border 0.1s ease-out;
  caret-color: #fff;
  color: #fff;
  position: relative;
  &:hover,
  &:focus {
    border: 1px solid #0583d2;
  }
`;

export const Message = styled.p`
  width: 100%;
  padding-left: 10px;
  margin: 0;
  margin-top: 5px;
  font-weight: 300;
  font-size: 0.9rem;
  color: red;
`
