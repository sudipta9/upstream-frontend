import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 5px;
  }
`;

export const Inner = styled.div`
  font-size: 1.625rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin: 1.25em auto;
  max-width: 815px;
  padding: 0;
  text-align: left;
`;

export const ListItem = styled.div`
  width: 100%;
  margin: 10px auto;
`;

ListItem.Question = styled.button`
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  width: 100%;
  border: 0;
  text-align: left;
  background: #303030;
  color: #fff;
  margin-bottom: 1px;
  svg {
    position: absolute;
    right: 1.2em;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.25s ease-in-out;
  }
  /* &.opened svg {
    transform: translateY(-50%) rotate(45deg);
  } */

  ${({ opened }) =>
    opened &&
    `svg {
      transform: translateY(-50%) rotate(45deg);
    `}
`;

ListItem.Answer = styled.div`
  display: ${({ opened }) => (opened ? "block" : "none")};
  overflow: hidden;
  max-height: 1200px;
  padding: 1.2em;
  background: #303030;
  transition: display 0.25s ease-in-out;
`;
