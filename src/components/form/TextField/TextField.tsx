import { forwardRef, InputHTMLAttributes } from 'react';
import * as CF from 'components/form';
import * as S from './TextField.styles';

export type TextFieldProps = {
  label?: string;
  type?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type, name, label, error, ...restProps }, ref) => (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.TextField type={type} ref={ref} id={name} name={name} {...restProps} />
      <CF.Error
        leftAling="0px"
        topAling="132%"
        active={!!error}
        message={error}
      />
    </S.Wrapper>
  ),
);
