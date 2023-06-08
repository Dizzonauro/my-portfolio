import { styled } from "styled-components";
export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary500};
  font-size: 1.3em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  max-height: 3rem;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 2px 1px 1px ${({ theme }) => theme.colors.primary300};
  font-size: 35px;
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

export const ImageContent = styled.img``;
