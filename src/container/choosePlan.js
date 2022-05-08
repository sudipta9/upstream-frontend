import React from "react";
// import { useNavigate } from "react-router-dom";
import { ChoosePlan } from "../components";

const ChoosePlanContainer = () => {
  // const navigate = useNavigate();

  return (
    <ChoosePlan.Container>
      <ChoosePlan.Heading>Choose a plan</ChoosePlan.Heading>
      <ChoosePlan.SubHeading>All Payments are secured</ChoosePlan.SubHeading>
      <ChoosePlan.Cards>
        <ChoosePlan.CardContainer>
          <ChoosePlan.CardDetails>
            <ChoosePlan.Feature>Weekly</ChoosePlan.Feature>
            <ChoosePlan.Feature>₹ 49</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>
              <ChoosePlan.Button>Choose Plan</ChoosePlan.Button>
            </ChoosePlan.Feature>
          </ChoosePlan.CardDetails>
        </ChoosePlan.CardContainer>
        <ChoosePlan.CardContainer active>
          <ChoosePlan.CardDetails>
            <ChoosePlan.Feature>Monthly</ChoosePlan.Feature>
            <ChoosePlan.Feature>₹ 149</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>
              <ChoosePlan.Button href="https://paytm.me/a-7itPt">
                Choose Plan
              </ChoosePlan.Button>
            </ChoosePlan.Feature>
          </ChoosePlan.CardDetails>
        </ChoosePlan.CardContainer>
        <ChoosePlan.CardContainer>
          <ChoosePlan.CardDetails>
            <ChoosePlan.Feature>Yearly</ChoosePlan.Feature>
            <ChoosePlan.Feature>₹ 399</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>HD Streaming</ChoosePlan.Feature>
            <ChoosePlan.Feature>
              <ChoosePlan.Button>Choose Plan</ChoosePlan.Button>
            </ChoosePlan.Feature>
          </ChoosePlan.CardDetails>
        </ChoosePlan.CardContainer>
      </ChoosePlan.Cards>
    </ChoosePlan.Container>
  );
};

export default ChoosePlanContainer;
