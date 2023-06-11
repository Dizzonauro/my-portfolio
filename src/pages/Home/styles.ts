import { styled } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export const Container = styled.div`
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
