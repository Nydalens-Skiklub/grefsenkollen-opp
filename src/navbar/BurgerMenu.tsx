import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface StyledMenuProps {
  readonly isOpen: boolean;
}

const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.darkBackground};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1.75rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;
`;

interface BurgerMenuProps {
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <StyledMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledNavLink to="/entry">Påmelding</StyledNavLink>
      <StyledNavLink to="/course">Løypa</StyledNavLink>
      <StyledNavLink to="/info">Praktisk info</StyledNavLink>
      <StyledNavLink to="/results">Resultater</StyledNavLink>
      <StyledNavLink to="/sponsors">Sponsorer</StyledNavLink>
    </StyledMenu>
  );
};
