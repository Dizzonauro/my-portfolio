import React from "react";
import {
  FaIconsContainer,
  SideBar,
  StyledFaHome,
  StyledFaMoon,
  StyledLi,
  StyledLink,
  StyledLuSunMoon,
  StyledUl,
} from "./styles";

import { FaBars } from "react-icons/fa";

export default function Sidebar({ onClick, currentTheme, toggleTheme }: any) {
  return (
    <SideBar>
      <FaIconsContainer>
        <FaBars onClick={onClick} />

        {currentTheme.mode === "dark" ? (
          <StyledFaMoon onClick={toggleTheme} />
        ) : (
          <StyledLuSunMoon onClick={toggleTheme} />
        )}
      </FaIconsContainer>

      <StyledUl>
        <StyledLi>
          <StyledFaHome />
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/studies">Studies</StyledLink>
        </StyledLi>
      </StyledUl>
    </SideBar>
  );
}
