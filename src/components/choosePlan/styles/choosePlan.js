import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-top: 3rem;
  font-size: 3rem;
  text-align: center;
  color: #fff;
  font-weight: bolder;

  @media (max-width: 420px) {
    font-size: 1.7rem;
  }
`;

export const SubHeading = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: gray;
  text-align: center;
`;

export const Cards = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const CardContainer = styled.div`
  padding: 0 2rem;
  border-radius: 10px;

  &:first-child {
    background: linear-gradient(
      135deg,
      hsla(210, 90%, 70%, 1) 0%,
      hsla(212, 60%, 30%, 1) 100%
    );
  }

  &:nth-child(2) {
    background: linear-gradient(
      135deg,
      hsla(212, 90%, 70%, 1) 0%,
      hsla(221, 60%, 30%, 1) 100%
    );
  }

  &:last-child {
    background: linear-gradient(
      135deg,
      hsla(221, 47%, 65%, 1) 0%,
      hsla(220, 82%, 20%, 1) 100%
    );
  }
`;

export const CardDetails = styled.ul`
  margin: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

export const Feature = styled.li`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.8rem 0;
  &:first-child {
    /* padding-top: 0; */
    font-size: 1.5rem;
    padding-bottom: 0;
    font-weight: bold;
    border-bottom: 3px solid #fff;
  }
  &:nth-child(2) {
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const Button = styled.a`
  width: 100%;
  outline: none;
  text-decoration: none;
  text-align: center;
  border: none;
  padding: 0.5rem 0;
  color: #fff;
  border-radius: 5px;
  background: #040448;
  cursor: pointer;

  :hover {
    color: inherit;
    transform: scale(1.05);
  }
`;
