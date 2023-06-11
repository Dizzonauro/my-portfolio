import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderBar,
  HeaderImg,
  ImageContent,
  HeaderPages,
  Pages,
  IconDarkMode,
  BarsContent,
} from "./styles";
import { useTheme } from "../../contexts/themeContext";
import cssLogo from "../../assets/imgs/cssLogo.png";
import htmlLogo from "../../assets/imgs/htmlLogo.png";
import javaScriptLogo from "../../assets/imgs/javaScriptLogo.png";
import reactLogo from "../../assets/imgs/reactLogo.png";
import typeScriptLogo from "../../assets/imgs/typeScriptLogo.png";

import { FaMoon, FaBars } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/index";

export default function Header() {
  const { toggleTheme, currentTheme } = useTheme();
  const [sideBar, setSideBar] = useState(null);

  const renderIconTheme = () => {
    if (currentTheme.mode === "dark") {
      return <LuSunMoon onClick={toggleTheme} />;
    } else {
      return <FaMoon onClick={toggleTheme} />;
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
          <Pages>
            <Link
              style={{
                color: currentTheme.colors.primary100,
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/"
            >
              Home
            </Link>
          </Pages>
          <Pages>
            <Link
              style={{
                color: currentTheme.colors.primary100,
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </Pages>
          <Pages>
            <Link
              style={{
                color: currentTheme.colors.primary100,
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/studies"
            >
              Personal Studies
            </Link>
          </Pages>
          <IconDarkMode>{renderIconTheme()}</IconDarkMode>
        </HeaderPages>
        {sideBar && (
          <Sidebar onClick={showSideBar} currentTheme={currentTheme} toggleTheme={toggleTheme} />
        )}
      </HeaderBar>
    </HeaderContainer>
  );
}
