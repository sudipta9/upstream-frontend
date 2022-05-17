import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";
const items = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie",
  "Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Upstream",
];

const FooterContainer = () => {
  return (
    <Footer.Container>
      <Footer>
        <Footer.Title>
          Questions? Call <a href="tel:000-800-040-1843">000-800-040-1843</a>
        </Footer.Title>
        <Footer.List>
          {items.map((item, index) => (
            <Footer.ListLink key={index} href="#">
              {item}
            </Footer.ListLink>
          ))}
        </Footer.List>
        <Footer.CopyrightText>
          Build with 💙 by <Link to="/">upstream</Link>. All Rights Reserved.
        </Footer.CopyrightText>
      </Footer>
    </Footer.Container>
  );
};

export default FooterContainer;
