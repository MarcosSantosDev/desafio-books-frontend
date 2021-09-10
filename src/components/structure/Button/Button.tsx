import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export type ButtonProps = {
  fullWidth?: boolean;
  outlinePrimary?: boolean;
  isRound?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...restProps }: ButtonProps) => (
  <S.Button {...restProps}>{children}</S.Button>
);
