import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './TextField.styles';

export type TextFieldProps = {
  label?: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type, name, label, ...restProps }, ref) => (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.TextField type={type} ref={ref} id={name} name={name} {...restProps} />
    </S.Wrapper>
  ),
);
