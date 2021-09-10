import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    left: 13px;
    top: 8px;
    font-family: ${theme.typography.family.primary};
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
  `}
`;

export const TextField = styled.input`
  ${({ theme }) => css`
    color: #ffffff;
    background: rgba(0, 0, 0, 0.32);
    font-family: ${theme.typography.family.primary};
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 24px 14px 0 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 60px;
  `}
`;
