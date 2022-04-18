import React, { useState, useContext, createContext } from "react";
import { Plus } from "react-feather";
import { Container, Inner, ListContainer, ListItem, Title } from "./styles/faq";

const FaqContext = createContext();

const Faq = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Faq.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Faq.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Faq.ListContainer = ({ children, ...restProps }) => {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

const FaqListItem = ({ children, ...restProps }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <FaqContext.Provider value={{ isOpened, setIsOpened }}>
      <ListItem {...restProps}>{children}</ListItem>
    </FaqContext.Provider>
  );
};

const FaqQuestion = ({ children, ...restProps }) => {
  const { isOpened, setIsOpened } = useContext(FaqContext);
  return (
    <ListItem.Question
      onClick={() => {
        setIsOpened(!isOpened);
      }}
      opened={isOpened}
      // {...restProps}
    >
      {children}
      <Plus />
    </ListItem.Question>
  );
};

const FaqAnswer = ({ children, ...restProps }) => {
  const { isOpened } = useContext(FaqContext);
  return (
    <ListItem.Answer {...restProps} opened={isOpened}>
      <span>{children}</span>
    </ListItem.Answer>
  );
};

Faq.ListItem = FaqListItem;
Faq.Question = FaqQuestion;
Faq.Answer = FaqAnswer;

export default Faq;
