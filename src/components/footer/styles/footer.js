import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1000px;
  position: relative;
  padding: 70px 45px;
  margin: 0 auto;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  min-width: 190px;
  width: 100%;
  margin-top: 0;
  padding-bottom: 20px;
  font-size: 1em;
  color: #757575;
  position: relative;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  a {
    text-decoration: none;
    color: #757575;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;

export const ListLinkContainer = styled.li`
  font-size: 13px;
  color: #757575;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 33%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

export const ListLinkText = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  color: #757575;
  width: 100%;
  text-align: center;
  margin: 0;

  a {
    text-decoration: none;
    color: #757575;
    &:hover {
      color: #757575;
      text-decoration: underline;
    }
  }
`;
