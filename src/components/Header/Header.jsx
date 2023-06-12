import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderBar,
  HeaderImg,
  ImageContent,
  HeaderPages,
  Pages,
  IconDarkMode,
  BarsContent,
  StyledLuSunMoon,
  StyledFaMoon,
  StyledLink,
} from "./styles";
import { useTheme } from "../../contexts/themeContext";
import cssLogo from "../../assets/imgs/cssLogo.png";
import htmlLogo from "../../assets/imgs/htmlLogo.png";
import javaScriptLogo from "../../assets/imgs/javaScriptLogo.png";
import reactLogo from "../../assets/imgs/reactLogo.png";
import typeScriptLogo from "../../assets/imgs/typeScriptLogo.png";

import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/index";

export default function Header() {
  const { toggleTheme, currentTheme } = useTheme();
  const [sideBar, setSideBar] = useState(null);

  const renderIconTheme = () => {
    if (currentTheme.mode === "dark") {
      return <StyledLuSunMoon onClick={toggleTheme} />;
    } else {
      return <StyledFaMoon onClick={toggleTheme} />;
    }
  };

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <HeaderContainer>
      <HeaderBar>
        <HeaderImg>
          <ImageContent src={cssLogo} />
          <ImageContent src={htmlLogo} />
          <ImageContent src={javaScriptLogo} />
          <ImageContent src={reactLogo} />
          <ImageContent src={typeScriptLogo} />
        </HeaderImg>
        <BarsContent>
          <FaBars style={{ color: currentTheme.colors.secondary300 }} onClick={showSideBar} />
        </BarsContent>
        <HeaderPages>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/studies">Personal Studies</StyledLink>
          <IconDarkMode>{renderIconTheme()}</IconDarkMode>
        </HeaderPages>
        {sideBar && (
          <Sidebar onClick={showSideBar} currentTheme={currentTheme} toggleTheme={toggleTheme} />
        )}
      </HeaderBar>
    </HeaderContainer>
  );
}
