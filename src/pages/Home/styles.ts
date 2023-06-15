import { styled } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { breakpoints } from "../../utils/constants/breakpoints";
import sizes from "../../theme/sizes";

export const Container = styled.div`
  padding-top: 70px;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  color: white;
  @media (max-width: ${breakpoints.sm}) {
    display: inline-block;
  }
`;

export const FirstContainer = styled.div`
  display: inline;
  height: 50%;
  border: 1px solid red;
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const SecondaryContainer = styled.div`
  height: 50%;
  border: 1px solid red;
  display: inline;
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const StyledH1 = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 35px;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  display: flex;
  font-weight: bold;
  font-size: 32px;
  justify-content: center;
  margin-top: ${sizes.xl};
  margin-bottom: ${sizes.xl};
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  margin: ${sizes.xl};
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: ${sizes.md};
  background: ${({ theme }) => theme.colors.secondary100};

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 10px;
    border: 1px solid black;
  }
  @media (max-width: ${breakpoints.sm}) {
  }
  @media (max-width: ${breakpoints.lg}) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const ImageContent = styled.img`
  height: 50px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
    transform: scale(1.2);
    padding-bottom: 4px;
  }

  @media (max-width: ${breakpoints.sl}) {
    height: 38px;
  }
`;
