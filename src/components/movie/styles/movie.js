import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px;
  background: #182031;
  border-radius: 5px;
  text-decoration: none;
  text-transform: none;
  color: white;
  height: 100%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;
export const Title = styled.h3`
  margin-top: 10px;
  font-size: 1.3rem;
`;

export const Creator = styled.p`
  font-size: 1rem;
  color: gray;
`;

export const Summary = styled.p`
  font-size: 1rem;
  color: #fff;
  /* max-height: 80px; */
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis; */
`;
