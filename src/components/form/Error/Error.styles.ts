import styled, { css } from 'styled-components';
import { ErrorProps } from './Error';

export const Wrapper = styled.div<ErrorProps>`
  ${({ leftAling, topAling, rightAling, bottomAling, active }) => css`
    position: absolute;
    left: ${leftAling};
    top: ${topAling};
    right: ${rightAling};
    bottom: ${bottomAling};
    opacity: ${active ? 1 : 0};
  `}
`;

export const ContentError = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 288px;
  width: max-content;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 10px;
  z-index: 2;
`;

export const ErrorArrow = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  left: 20px;
  top: -7px;
  background: rgba(255, 255, 255, 0.4);
  transform: rotate(134deg);
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 90% 90%, 0% 0%);
  clip-path: polygon(0 0, 0 100%, 100% 100%, 90% 90%, 0% 0%);
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
  `}
`;
