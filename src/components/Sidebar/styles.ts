import { styled } from "styled-components";
import { breakpoints } from "../../utils/constants/breakpoints";
import { FaBars, FaHome, FaMoon, FaArrowRight, FaLaptopCode } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsBriefcaseFill } from "react-icons/bs";

export const SideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary300};
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 250px;
    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 250px;
      }
    }
  }
`;

export const StyledUl = styled.ul`
  margin-top: 40px;
  margin-left: 17px;
  color: ${({ theme }) => theme.colors.primary300};
  animation: falling 0.5s ease-in-out;

  @keyframes falling {
    0% {
      transform: translateY(-40%);
    }
    100% {
      transform: translateY(0);
    }
  }
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
  justify-content: space-between;
  margin-left: 15px;
  margin-top: 12px;
`;

export const StyledFaArrowRight = styled(FaArrowRight)``;

export const StyledFaBars = styled(FaBars)`
  color: ${({ theme }) => theme.colors.secondary300};
  cursor: pointer;
`;

export const StyledFaMoon = styled(FaMoon)`
  color: #5f9982;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLuSunMoon = styled(LuSunMoon)`
  color: #f4e196;
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
