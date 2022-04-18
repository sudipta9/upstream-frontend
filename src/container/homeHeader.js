import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader } from "../components";

const HomeHeaderContainer = () => {
  const navigate = useNavigate();
  return (
    <HomeHeader.Container>
      <HomeHeader>
        <HomeHeader.Icon>
          <img src="/images/logo.png" alt="Logo" />
        </HomeHeader.Icon>
        <HomeHeader.SignIn
          onClick={(e) => {
            e.preventDefault();
            navigate("/sign-in");
          }}
        >
          Sign In
        </HomeHeader.SignIn>
      </HomeHeader>
    </HomeHeader.Container>
  );
};

export default HomeHeaderContainer;
