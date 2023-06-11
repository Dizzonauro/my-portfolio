import { styled } from "styled-components";
import { breakpoints } from "../../utils/constants/breakpoints";
import { FaHome, FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";

export const SideBar = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-right: 32px;
    cursor: pointer;
  }

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
  margin-left: 12px;
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
  justify-content: space-between;
  margin-left: 15px;
  margin-top: 12px;
`;

export const StyledFaMoon = styled(FaMoon)`
  color: ${({ theme }) => theme.colors.secondary300};
`;

export const StyledLuSunMoon = styled(LuSunMoon)`
  color: ${({ theme }) => theme.colors.secondary300};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
