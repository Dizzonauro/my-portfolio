import React from "react";
import {
  HeaderContainer,
  HeaderBar,
  HeaderImg,
  ImageContent,
  HeaderPages,
  Pages,
  IconDarkMode,
} from "./styles";
import { useTheme } from "../../contexts/themeContext";
import cssLogo from "../../assets/imgs/cssLogo.png";
import htmlLogo from "../../assets/imgs/htmlLogo.png";
import javaScriptLogo from "../../assets/imgs/javaScriptLogo.png";
import reactLogo from "../../assets/imgs/reactLogo.png";
import typeScriptLogo from "../../assets/imgs/typeScriptLogo.png";

import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleTheme, currentTheme } = useTheme();

  const renderIconTheme = () => {
    if (currentTheme.mode === "dark") {
      return <LuSunMoon onClick={toggleTheme} />;
    } else {
      return <FaMoon onClick={toggleTheme} />;
    }
  };

  return (
    <HeaderContainer>
      <HeaderBar>
        <HeaderImg>
          <ImageContent src={cssLogo} onClick={() => console.log("teste")} />
          <ImageContent src={htmlLogo} />
          <ImageContent src={javaScriptLogo} />
          <ImageContent src={reactLogo} />
          <ImageContent src={typeScriptLogo} />
        </HeaderImg>
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
      </HeaderBar>
    </HeaderContainer>
  );
}
