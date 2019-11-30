import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

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
  background-color: ${props => (props.isOffTop ? "#181818" : "none")};
  transition: all 0.2s ease;
  position: fixed;
  left: 0;
  right: 0;

  @media screen and (min-width: 1024px) {
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
  @media screen and (min-width: 1024px) {
    margin-left: -0.75rem;
    display: flex;
    align-items: stretch;
    flex-shrink: 0;
    min-height: 4rem;
  }
`;

const NavbarMenu = styled.div`
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

const NavbarItem = styled.a`
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
`;

export const Navbar: React.FC = () => {
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
            <NavbarItem href="https://nydalen.idrett.no/orientering/">
              <img
                src="http://www.nydalslopet.one/wp-content/uploads/2015/08/nydalens_sk_emblem.png"
                alt="Nydalens Skiklub"
                width="112"
                height="28"
              />
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu>
            <div>
              <NavbarItem>
                <span>Påmelding</span>
              </NavbarItem>
              <NavbarItem>
                <span>Løypa</span>
              </NavbarItem>
              <NavbarItem>
                <span>Praktisk info</span>
              </NavbarItem>
              <NavbarItem>
                <span>Resultater</span>
              </NavbarItem>
              <NavbarItem>
                <span>Sponsorer</span>
              </NavbarItem>
            </div>
          </NavbarMenu>
        </Container>
      </Navigation>
    </Header>
  );
};
