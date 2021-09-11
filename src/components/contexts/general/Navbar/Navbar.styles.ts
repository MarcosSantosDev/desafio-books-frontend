import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    background-color: transparent;
  `}
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 100%;
`;

export const Img = styled.img`
  width: 104.04px;
  height: 36px;
`;

export const TextContent = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    color: #333333;
    font-size: 28px;
    line-height: 40px;
    font-weight: 300;
    margin-left: 16.6px;
  `}
`;

export const ContentActions = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 100%;

  & > #btn__logout {
    margin-left: 16px;
  }
`;

export const WelcomeUser = styled.p`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.typography.family.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #333333;

    @media (max-width: 600px) {
      display: none;
    }
  `}
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  border-radius: 50%;

  &:hover {
    background-color: rgba(51, 51, 51, 0.1);
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

export const LogoutIcon = styled.img`
  width: 16px;
  height: 16px;
`;
