import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
  height: 90vh;
`;

export const Background = styled.div`
  z-index: 0;
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  div {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 10%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 4rem;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  max-width: 640px;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SignUpForm = styled.form``;
export const SignUpFormTitle = styled.h3`
  max-width: 500px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.3rem;
  color: gray;
  /* padding: 0 10%; */

  @media (max-width: 480px) {
    /* padding: 0 5%; */
    font-size: 1rem;
  }
`;

export const SignUpFormInputContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 640px;
  margin: 1rem auto;
`;

export const SignUpFormInput = styled.input`
  max-width: 500px;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  outline: none;
  border: none;
  border-radius: 2px;

  @media screen and (max-width: 740px) {
    height: 40px;
  }
`;

export const SignUpFormButton = styled.button`
  margin: 0 auto;
  background-color: #0583d2;
  width: 100%;
  max-width: 200px;
  border: none;
  border-radius: 2px;
  outline: none;
  text-align: center;
  padding: 10px 0;
  font-weight: 400;
  color: #fff;
`;

export const SignInText = styled.p`
  font-size: 1.2rem;
  max-width: 640px;
  width: 100%;
  margin: 1rem auto;

  a {
    text-decoration: none;
    color: #0583d2;

    &:hover {
      color: #0583d2;
      text-decoration: underline;
    }
  }
`;
