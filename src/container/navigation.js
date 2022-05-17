import React, { useState } from "react";
import { Navigation } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavigationContainer = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSearchBlock, setShowSearchBlock] = useState(false);

  const navigate = useNavigate();
  return (
    <Navigation.Container>
      <Navigation>
        <Navigation.Logo logo="/images/logo.png" />
        <Navigation.Contain show={showMobileNav}>
          <Navigation.Menu>
            <Navigation.MenuItem href="/">Home</Navigation.MenuItem>
            <Navigation.MenuItem href="/movies">Movies</Navigation.MenuItem>
            <Navigation.MenuItem href="/shows">TV Shows</Navigation.MenuItem>
            <Navigation.MenuItem href="/others">Others</Navigation.MenuItem>
          </Navigation.Menu>
        </Navigation.Contain>

        {/* navigation search field */}
        <Navigation.InfoBox>
          <Navigation.SearchBlock>
            <Navigation.SearchBlockIcon
              onClick={(e) => {
                e.preventDefault();
                setShowSearchBlock(!showSearchBlock);
              }}
            />
            <Navigation.SearchField show={showSearchBlock}>
              <Navigation.SearchLabel>
                <Navigation.SearchInput />
              </Navigation.SearchLabel>
              <Navigation.SearchButton />
            </Navigation.SearchField>
          </Navigation.SearchBlock>
          <Navigation.SignOutBtn
            onClick={(e) => {
              e.preventDefault();
              axios
                .get("http://127.0.0.1:5000/user/sign-out", {
                  withCredentials: true,
                })
                .then(() => {
                  navigate("/sign-in");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Sign Out
          </Navigation.SignOutBtn>
        </Navigation.InfoBox>

        {/* mobile nav toggler */}
        <Navigation.Toggler
          onClick={(e) => {
            e.preventDefault();
            // console.log("clicked");
            setShowMobileNav(!showMobileNav);
          }}
        />
      </Navigation>
    </Navigation.Container>
  );
};

export default NavigationContainer;
