import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary100};
  font-size: 1.3em;
  position: absolute;
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
  &:hover {
    cursor: pointer;
    &:hover {
      transition: ease-in-out;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
    }
  }
`;

export const HeaderPages = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary100};
`;

export const Pages = styled.div`
  font-weight: bold;
  &:hover {
    cursor: pointer;
    transition: ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
  }
`;

export const IconDarkMode = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
  color: ${({ theme }) => theme.colors.primary100};
  &:hover {
    cursor: pointer;
  }
`;
