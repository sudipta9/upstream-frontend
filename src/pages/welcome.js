import React from "react";
import FaqContainer from "../container/faq";
import FooterContainer from "../container/footer";
import HeroContainer from "../container/hero";
import HomeHeaderContainer from "../container/homeHeader";
import StoryCardContainer from "../container/storyCard";

const Welcome = () => {
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

export default Welcome;
