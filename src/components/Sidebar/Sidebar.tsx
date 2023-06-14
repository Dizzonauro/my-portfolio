import React from "react";
import {
  FaIconsContainer,
  HeaderSidebar,
  SideBar,
  StyledBsBriefcaseFill,
  StyledFaBars,
  StyledFaHome,
  StyledFaLaptopCode,
  StyledFaMoon,
  StyledLi,
  StyledLink,
  StyledLuSunMoon,
  StyledUl,
} from "./styles";

export default function Sidebar({ currentTheme, toggleTheme }: any) {
  return (
    <SideBar>
      <HeaderSidebar>
        <FaIconsContainer>
          {currentTheme.mode === "dark" ? (
            <StyledLuSunMoon onClick={toggleTheme} />
          ) : (
            <StyledFaMoon onClick={toggleTheme} />
          )}
        </FaIconsContainer>
      </HeaderSidebar>

      <StyledUl>
        <StyledLi>
          <StyledFaHome />
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledBsBriefcaseFill />
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledFaLaptopCode />
          <StyledLink to="/studies">Studies</StyledLink>
        </StyledLi>
      </StyledUl>
    </SideBar>
  );
}
