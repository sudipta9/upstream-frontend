import React from "react";
import { Menu, Search } from "react-feather";
import { Link, NavLink } from "react-router-dom";
import {
  Contain,
  Container,
  Header,
  InfoBox,
  Logo,
  MenuContainer,
  MenuItem,
  SearchBlock,
  SearchBlockIcon,
  SearchButton,
  SearchField,
  SearchInput,
  SearchLabel,
  SignOutBtn,
  ToggleButton,
} from "./styles/Navigation";

const Navigation = ({ children, ...restProps }) => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navbar navbar-expand-lg navbar-light">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

Navigation.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Navigation.Logo = ({ logo, ...restProps }) => {
  return (
    <Link to="/" {...restProps} className="navbar-brand">
      <Logo src={logo} className="img-fluid" alt="streamlab-logo" />
    </Link>
  );
};

Navigation.Contain = ({ show, children, ...restProps }) => {
  return (
    <div
      className={`collapse navbar-collapse ${show ? "show" : undefined}`}
      id="navbarContent"
    >
      <Contain {...restProps}>{children}</Contain>
    </div>
  );
};

Navigation.Menu = ({ children, ...restProps }) => {
  return (
    <MenuContainer className="navbar-nav ml-auto" {...restProps}>
      {children}
    </MenuContainer>
  );
};

Navigation.MenuItem = ({ href, children, ...restProps }) => {
  return (
    <MenuItem {...restProps}>
      <NavLink
        to={href}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {children}
      </NavLink>
    </MenuItem>
  );
};

Navigation.Toggler = ({ children, ...restProps }) => {
  return (
    <ToggleButton
      className="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      {...restProps}
    >
      <Menu color="#fff" />
    </ToggleButton>
  );
};

Navigation.InfoBox = ({ children, ...restProps }) => {
  return <InfoBox {...restProps}>{children}</InfoBox>;
};

Navigation.SearchBlock = ({ children, ...restProps }) => {
  return <SearchBlock {...restProps}>{children}</SearchBlock>;
};

Navigation.SearchBlockIcon = ({ children, ...restProps }) => {
  return (
    <SearchBlockIcon href="#" {...restProps}>
      <Search />
    </SearchBlockIcon>
  );
};

Navigation.SearchField = ({ children, ...restProps }) => {
  return (
    <SearchField {...restProps}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {children}
      </form>
    </SearchField>
  );
};

Navigation.SearchLabel = ({ children, ...restProps }) => {
  return <SearchLabel {...restProps}>{children}</SearchLabel>;
};

Navigation.SearchInput = ({ children, ...restProps }) => {
  return <SearchInput {...restProps} />;
};

Navigation.SearchButton = ({ children, ...restProps }) => {
  return (
    <SearchButton {...restProps}>
      <Search />
    </SearchButton>
  );
};

Navigation.SignOutBtn = ({ children, ...restProps }) => {
  return <SignOutBtn {...restProps}>{children}</SignOutBtn>;
};

export default Navigation;
