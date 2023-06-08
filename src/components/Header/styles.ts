import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => {
    console.log(theme);
    return theme.colors.backgroundColor;
  }};

  color: ${({ theme }) => theme.colors.primary500};
  font-size: 1.3em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderImg = styled.div`
  width: 50%;
  height: full;
`;
