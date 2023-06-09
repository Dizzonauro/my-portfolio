import { styled } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const setBackground = (theme: DefaultTheme) => {
  const backgroundStyle = `radial-gradient(circle, ${theme.colors.secondary100} 40%, ${theme.colors.background} 100%, ${theme.colors.background})`;

  return backgroundStyle;
};

export const Container = styled.div`
  background: ${({ theme }) => setBackground(theme)};
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;
