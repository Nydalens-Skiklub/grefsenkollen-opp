import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { BurgerMenu } from "./BurgerMenu";
import { Burger } from "./Burger";

import GrefsenkollenOppLogo from "../images/logos/grefsenkollen-opp-logo.svg";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

interface NavigationProps {
  readonly isOffTop: boolean;
}

const Navigation = styled.div<NavigationProps>`
  top: ${props => (props.isOffTop ? "0" : "2rem")};
  background-color: ${props =>
    props.isOffTop ? props.theme.colors.darkBackground : "none"};
  transition: all 0.2s ease;
  position: fixed;
  left: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    min-height: 4rem;
    display: flex;
    align-items: stretch;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 4rem;
  width: 100%;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;

  max-width: 768px;
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1216px) {
    max-width: 1152px;
  }
  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }
`;

const NavbarBrand = styled.div`
  margin-left: -0.75rem;
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  min-height: 4rem;

  @media screen and (max-width: 780px) {
    margin: 0 1rem;
  }
`;

const NavbarMenu = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }

  margin-right: -0.75rem;
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 0;

  > div {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

const NavbarItem = styled(NavLink)`
  border-bottom: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;

  font-size: 1.25em;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  text-decoration: none;

  &.active,
  &:hover {
    background-color: ${props => props.theme.colors.main};
  }

  &:only-child {
    background: none;
  }
`;

const BurgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }

  margin-right: -0.75rem;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 0;

  > div {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOffTop, setIsOffTop] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const currIsOffTop = currPos.y < -30;
      if (isOffTop !== currIsOffTop) setIsOffTop(currIsOffTop);
    },
    [isOffTop]
  );

  return (
    <Header>
      <Navigation
        role="navigation"
        aria-label="main-navigation"
        isOffTop={isOffTop}
      >
        <Container>
          <NavbarBrand>
            <NavbarItem to="/">
              <img src={GrefsenkollenOppLogo} alt="Logo" height="50" />
              <span>
                <strong>Grefsenkollen Opp</strong>
              </span>
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu>
            <div>
              <NavbarItem to="/entry">
                <span>Påmelding</span>
              </NavbarItem>
              <NavbarItem to="/course">
                <span>Løypa</span>
              </NavbarItem>
              <NavbarItem to="/info">
                <span>Praktisk info</span>
              </NavbarItem>
              <NavbarItem to="/results">
                <span>Resultater</span>
              </NavbarItem>
              <NavbarItem to="/sponsors">
                <span>Sponsorer</span>
              </NavbarItem>
            </div>
          </NavbarMenu>
          <BurgerMenuContainer>
            <div>
              <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </BurgerMenuContainer>
        </Container>
      </Navigation>
    </Header>
  );
};
