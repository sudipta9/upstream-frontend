import styled from "styled-components/macro";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  background: transparent;
  z-index: 99;
  padding: 0;
  box-shadow: none;
  background-color: #182031;
  /* border-bottom: 1px solid rgba(10, 14, 23, 0.4); */
  backdrop-filter: blur(3px);
  @media (max-width: 1023px) {
    .navbar-collapse {
      width: 100%;
      position: absolute;
      left: 0;
      top: 100%;
      /* background: #0a0e17; */
      background: #182031;
      box-shadow: 0px 5px 15px 0px rgb(0 33 85 / 10%);
      max-height: 330px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
`;

export const Header = styled.div`
  min-height: 70px;
  .navbar {
    padding: 0;
  }
  a.navbar-brand {
    line-height: 70px;
    background: transparent;
    padding: 0;
    position: relative;
    border-radius: 0;
  }
`;

export const Logo = styled.img`
  height: 25px;

  @media (max-width: 576px) {
    height: 20px;
  }
`;

export const Contain = styled.div`
  display: inline-block;
  width: 100%;
`;

export const MenuContainer = styled.ul`
  float: right;
  @media (max-width: 1023px) {
    float: left;
    width: 100%;
    display: inline-block;
  }
`;

export const MenuItem = styled.li`
  line-height: 70px;
  position: relative;
  display: inline-block;
  /* float: left; */
  margin-right: 30px;
  color: #fff;
  font-weight: 400;
  a {
    color: #fff;
    text-decoration: none;
    text-transform: none;
    transition: color 0.2s ease-out;
    &:hover,
    &.active {
      color: #0583d2;
    }
  }
  @media (max-width: 1023px) {
    float: left;
    width: 100%;
    display: inline-block;
    /* line-height: normal; */
    padding: 0 30px;
    position: relative;
  }
`;

export const ToggleButton = styled.button`
  color: white;
  outline: none !important;
  background: #0583d2;
  &:focus {
    box-shadow: none;
  }
`;

export const InfoBox = styled.div`
  margin: 0 0 0 30px;
  display: flex;
  color: #fff;
  align-items: center;
  @media (max-width: 1023px) {
    margin-left: auto;
  }

  @media (max-width: 1365px) {
    margin: 0 0 0 15px;
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  margin: 0 30px 0 0;
`;

export const SearchBlockIcon = styled.a`
  color: #fff;
  font-size: 16px;
  width: 18px;
  display: inline-block;
`;

export const SearchField = styled.div`
  position: absolute;
  top: 50px;
  right: -30px;
  width: 300px;
  padding: 15px;
  z-index: 999;
  display: ${(props) => (props.show ? "block" : "none")};
  background: #182031;
  border-radius: 5px;
`;

export const SearchLabel = styled.label`
  width: 100%;
  margin-bottom: 0;
  float: left;
  width: 100%;
`;

export const SearchInput = styled.input`
  background: #0a0e17;
  border: 2px solid #0a0e17;
  color: white;
  outline: none;
  padding: 7px;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  border: none;
  padding: 0;
  position: absolute;
  text-align: center;
  background: #0583d2;
  color: #fff !important;
  line-height: 45px;
  height: 45px;
  width: 45px;
  top: 50%;
  right: -10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
`;

export const SignOutBtn = styled.button`
  border: none;
  outline: none;
  padding: 5px 10px;
  background: #0583d2;
  color: #fff;
  border-radius: 5px;
`;
