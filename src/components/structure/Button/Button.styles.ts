import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

type ButtonStyledProps = Pick<
  ButtonProps,
  'fullWidth' | 'outlinePrimary' | 'isRound'
>;

const buttonModificators = {
  primary: () => css`
    background-color: #ffffff;
    color: #b22e6f;
    padding: 0px 20px;
    border-radius: 20px;
  `,
  outlinePrimary: () => css`
    background-color: transparent;
    color: #333333;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
  `,
  fullWidth: () => css`
    min-width: 100%;
    width: 100%;
  `,
  round: () => css`
    border-radius: 50%;
    padding: 0;
    height: 40px;
    width: 40px;
  `,
};

export const Button = styled.button<ButtonStyledProps>`
  ${({ theme, fullWidth, outlinePrimary, isRound }) => css`
    font-family: ${theme.typography.family.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    width: fit-content;
    height: 36px;
    ${buttonModificators.primary()}
    ${fullWidth && buttonModificators.fullWidth()}
    ${outlinePrimary && buttonModificators.outlinePrimary()}
    ${isRound && buttonModificators.round()}
  `}
`;
