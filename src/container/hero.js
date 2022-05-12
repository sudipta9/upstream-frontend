import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Hero } from "../components";

const HeroContainer = () => {
  const navigate = useNavigate();
  return (
    <Hero.Container>
      <Hero.BackGround />
      <Hero.Content>
        <Hero.Title>Unlimited movies, TV shows and more.</Hero.Title>
        <Hero.SubTitle>Watch anywhere & anytime</Hero.SubTitle>
        <Hero.SignUpForm onSubmit={() => console.log("Submitting")}>
          <Hero.SignUpFormTitle>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Hero.SignUpFormTitle>
          {/* <Hero.SignUpFormInputContainer>
            <Hero.SignUpFormInput type="email" placeholder="Email" />
          </Hero.SignUpFormInputContainer> */}
          <br />
          <Hero.SignUpFormButton
            onClick={(e) => {
              e.preventDefault();
              navigate("/sign-up");
            }}
          >
            Get Started
          </Hero.SignUpFormButton>
        </Hero.SignUpForm>

        <Hero.SignInText>
          Already have an account? Sign in <Link to="/sign-in">here</Link>
        </Hero.SignInText>
      </Hero.Content>
    </Hero.Container>
  );
};

export default HeroContainer;
