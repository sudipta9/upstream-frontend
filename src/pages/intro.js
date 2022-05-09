import React, { useEffect } from "react";
import FaqContainer from "../container/faq";
import FooterContainer from "../container/footer";
import HeroContainer from "../container/hero";
import HomeHeaderContainer from "../container/homeHeader";
import StoryCardContainer from "../container/storyCard";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearState,
//   isUserAuthenticated,
//   userSelector,
// } from "../features/user/userSlice";
// import { useNavigate } from "react-router-dom";
const Intro = () => {
  return (
    <>
      <HomeHeaderContainer />
      <HeroContainer />
      <StoryCardContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Intro;
