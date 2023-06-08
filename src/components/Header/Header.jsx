import React from "react";
import { HeaderContainer, HeaderBar, HeaderImg, ImageContent } from "./styles";
import { useTheme } from "../../contexts/themeContext";

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderBar>
        <button onClick={toggleTheme}>diabo</button>
        <HeaderImg></HeaderImg>
      </HeaderBar>
    </HeaderContainer>
  );
}
