import { styled } from "styled-components";
import { breakpoints } from "../../utils/constants/breakpoints";
import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DefaultTheme } from "styled-components/dist/types";

const setBackground = (theme: DefaultTheme) => {
  const backgroundStyle = `linear-gradient(133deg, ${theme.colors.secondaryBackground} 37%, ${theme.colors.background} 100%)`;

  return backgroundStyle;
};

export const HeaderContainer = styled.div`
  background: ${({ theme }) => setBackground(theme)};
  color: ${({ theme }) => theme.colors.primary100};
  font-size: 1.3em;
  position: fixed;
  left: 0;
  width: 100%;
  height: 4rem;
  max-height: 4rem;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 2px 1px 1px ${({ theme }) => theme.colors.primary300};
  font-size: 35px;
`;

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HeaderImg = styled.div`
  width: 50vw;
  margin-top: 10px;
  display: flex;
`;

export const ImageContent = styled.img`
  height: 42px;
  margin-left: 10px;
  padding: 2px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
    transform: scale(1.2);
    padding-bottom: 4px;
  }
`;

export const BarsContent = styled.div`
  display: none;
  height: 42px;
  padding: 2px;
  margin-top: 10px;
  margin-right: 5px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
    transform: scale(1.2);
    padding-bottom: 4px;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
  }
  @media (max-width: ${breakpoints.md}) {
    display: flex;
  }
  @media (max-width: ${breakpoints.lg}) {
    display: flex;
  }
  @media (max-width: ${breakpoints.xl}) {
    display: flex;
  }
  display: none;
`;

export const HeaderPages = styled.div`
  display: none;
  justify-content: space-between;
  margin-right: 60px;
  width: 50vw;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary100};

  @media (min-width: ${breakpoints.xl}) {
    display: flex;
    margin-top: 10px;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary100};
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const IconDarkMode = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary300};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
`;

export const StyledLuSunMoon = styled(LuSunMoon)`
  margin-top: 4px;
  color: #ebf0f8;
`;

export const StyledFaMoon = styled(FaMoon)`
  margin-top: 4px;
  color: #ebf0f8;
`;
