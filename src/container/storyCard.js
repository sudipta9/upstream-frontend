import React from "react";
import { StoryCard } from "../components";
import items from "../fixtures/StoryCardItems.json";
const StoryCardContainer = () => {
  return (
    <StoryCard.Container>
      {items.map((item) => (
        <StoryCard key={item.id} direction={item.direction}>
          <StoryCard.Content>
            <StoryCard.Title>{item.title}</StoryCard.Title>
            <StoryCard.SubTitle>{item.subTitle}</StoryCard.SubTitle>
          </StoryCard.Content>
          <StoryCard.Content>
            <StoryCard.Image src={item.image} alt={item.alt} />
          </StoryCard.Content>
        </StoryCard>
      ))}
    </StoryCard.Container>
  );
};

export default StoryCardContainer;
