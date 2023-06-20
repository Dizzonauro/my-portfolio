import { styled } from "styled-components";
import { breakpoints } from "../../utils/constants/breakpoints";
import { FaBars, FaHome, FaMoon, FaArrowRight, FaLaptopCode } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";

import { DefaultTheme } from "styled-components/dist/types";

const setBackground = (theme: DefaultTheme) => {
  const backgroundStyle = `linear-gradient(133deg, ${theme.colors.secondaryBackground} 37%, ${theme.colors.background} 100%)`;

  return backgroundStyle;
};

export const SideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  margin-top: 61px;
  color: ${({ theme }) => theme.colors.primary300};
  animation: falling 0.2s ease-in;
  border-top: 1px red;

  @media (max-width: ${breakpoints.sm}) {
    height: 100vh;
    width: 100vh;
    border: 1px solid green;
  }

  @media (min-width: ${breakpoints.md}) {
    height: 100vh;
    width: 100%;
    border: 1px solid black;
  }
  @media (max-width: ${breakpoints.md}) {
    height: 100vh;
    width: 100%;
    border: 1px solid black;
  }
  @media (min-width: ${breakpoints.lg}) {
    border: 1px solid yellow;
  }

  @keyframes falling {
    0% {
      transform: translateY(-40%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledUl = styled.ul`
  margin-top: 5rem;
  margin-left: 17px;
  color: ${({ theme }) => theme.colors.primary300};
`;
export const StyledLi = styled.li`
  color: ${({ theme }) => theme.colors.secondary100};
  display: flex;
  margin-top: 10px;
  list-style: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledFaHome = styled(FaHome)`
  color: ${({ theme }) => theme.colors.secondary100};
  padding-top: 7px;
  margin-right: 10px;
`;

export const FaIconsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary100};
  display: flex;
  position: absolute;
  right: 6px;
  margin-top: 12px;
`;

export const StyledFaArrowRight = styled(FaArrowRight)``;

export const StyledFaBars = styled(FaBars)`
  color: ${({ theme }) => theme.colors.secondary300};
  cursor: pointer;
`;

export const StyledFaMoon = styled(FaMoon)`
  color: #ebf0f8;
  width: 37px;
  height: 40px;
  padding: 2px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLuSunMoon = styled(LuSunMoon)`
  color: #ebf0f8;
  padding: 2px;
  width: 37px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledBsBriefcaseFill = styled(BsBriefcaseFill)`
  color: ${({ theme }) => theme.colors.secondary100};
  padding-top: 7px;
  margin-right: 10px;
`;

export const StyledFaLaptopCode = styled(FaLaptopCode)`
  color: ${({ theme }) => theme.colors.secondary100};
  padding-top: 7px;
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderSidebar = styled.div`
  background: ${({ theme }) => setBackground(theme)};
  position: fixed;
  width: 100%;
  height: 64px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 2px 1px 1px ${({ theme }) => theme.colors.secondaryBackground};
`;
