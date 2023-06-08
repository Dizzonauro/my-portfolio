import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary100};
`;
