import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/wave.gif";

const Nav = styled.nav`
  z-index: 100;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  background: transparent;
  transition: 0.7s;

  &.active {
    background: #27211f;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i`
  display: none;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 26px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 14px;
    right: 25px;
    transform: scale(4.5);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar({ toggle }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav className={navbar ? "active" : ""}>
      <Logo to="/">SHEA UBALDO</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Me
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
