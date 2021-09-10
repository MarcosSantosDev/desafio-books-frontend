import { FormEvent } from 'react';
import { TextField } from 'components/form';
import IoasysLogo from 'assets/images/ioasys/logo.png';
import * as S from './LoginForm.styles';

export type LoginFormProps = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({ handleSubmit }: LoginFormProps) => (
  <S.Wrapper>
    <S.FormContainer>
      <S.HeadingContent>
        <S.Img src={IoasysLogo} alt="Ioasys" />{' '}
        <S.TextContent>Books</S.TextContent>
      </S.HeadingContent>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <TextField
            type="email"
            name="email"
            required
            label="Email"
            autoComplete="off"
          />
          <S.BoxRelative>
            <TextField
              type="password"
              name="password"
              required
              label="Senha"
              autoComplete="off"
            />
            <S.ButtonLogin type="submit">Entrar</S.ButtonLogin>
          </S.BoxRelative>
        </S.FormGroup>
      </S.Form>
    </S.FormContainer>
  </S.Wrapper>
);
