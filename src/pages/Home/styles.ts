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
  @media (min-width: ${breakpoints.sm}) {
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

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledH1 = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  width: 100%;
`;

export const StyledParagraphAboutMe = styled.p`
  text-align: center;
  font-size: 20px;
  margin: ${sizes.xl};
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  text-align: center;
  margin: ${sizes.xl};
  @media (min-width: ${breakpoints.md}) {
    width: 500px;
    order: 3;
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 700px;
    order: 3;
    border: 1px solid red;
    padding-top: 60px;
  }
  @media (min-width: ${breakpoints.xl}) {
    width: 900px;
    order: 3;
    padding-top: 70px;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  padding: ${sizes.md};
  background: ${({ theme }) => theme.colors.secondary100};

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 10px;
    border: 1px solid black;
    margin: 20px;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    display: flex;
    width: 7%;
    margin: 30px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    width: 60px;
    display: flex;
    flex-direction: column;
    order: 2;
    margin-right: 40px;
    margin-top: -20px;
    height: 300px;
  }
  @media (min-width: ${breakpoints.xl}) {
    width: 5%;
    display: flex;
    flex-direction: column;
    order: 2;
    margin-right: 40px;
    margin-bottom: 20px;
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

  @media (max-width: ${breakpoints.sm}) {
    height: 38px;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    height: 50px;
  }
`;
