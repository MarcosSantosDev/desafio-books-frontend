import * as S from './Error.styles';

export type ErrorProps = {
  message?: string;
  leftAling?: string;
  topAling?: string;
  rightAling?: string;
  bottomAling?: string;
  active?: boolean;
};

export const Error = ({ message, ...restProps }: ErrorProps) => (
  <S.Wrapper {...restProps}>
    <S.ContentError>
      <S.ErrorArrow />
      <S.ErrorMessage>{message}</S.ErrorMessage>
    </S.ContentError>
  </S.Wrapper>
);
