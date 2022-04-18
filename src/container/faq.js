import React from "react";
import { Faq } from "../components";
import faqs from "../fixtures/faqs.json";
const FaqContainer = () => {
  return (
    <Faq.Container>
      <Faq>
        <Faq.Title>Frequently Asked Questions</Faq.Title>
        <Faq.ListContainer>
          <Faq.ListItem>
            {/* <Faq.Question>question</Faq.Question>
            <Faq.Answer>Answer</Faq.Answer> */}
            {faqs.map((faq) => {
              return (
                <Faq.ListItem key={faq.id}>
                  <Faq.Question>{faq.header}</Faq.Question>
                  <Faq.Answer>{faq.body}</Faq.Answer>
                </Faq.ListItem>
              );
            })}
          </Faq.ListItem>
        </Faq.ListContainer>
      </Faq>
    </Faq.Container>
  );
};

export default FaqContainer;
