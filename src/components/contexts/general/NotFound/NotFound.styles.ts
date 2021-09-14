import styled, { css } from 'styled-components';
import { Button as ButtonCore } from 'components/structure';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0e8ea;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  height: 100%;
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;
    border: 2px solid #333333;
    border-radius: 50%;
    color: #333333;
    text-align: center;
    font-family: ${theme.typography.family.primary};
    font-size: 40px;
    font-weight: 600;
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    color: #333333;
    font-size: 40px;
    margin: 10px;
  `}
`;

export const Button = styled(ButtonCore)`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    background-color: #333333;
    color: #fdfdfd;
  `}
`;
