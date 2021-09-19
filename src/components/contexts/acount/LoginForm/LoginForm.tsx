import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as CF from 'components/form';
import IoasysLogo from 'assets/images/ioasys/logo.png';
import * as S from './LoginForm.styles';
import { schema, defaultValues } from './LoginForm.validations';

export type LoginFormProps = {
  onSubmit: (event: FormProps) => void;
};

export type FormProps = {
  email: string;
  password: string;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    mode: 'onBlur',
    shouldFocusError: true,
  });

  const { errors } = formState;

  const errorMessage = useMemo(() => {
    const field = errors.email || errors.password;
    const message = field?.message || '';

    if (field?.type === 'responseApi') {
      return {
        message: 'Incorrect email and/or password.',
        hasError: !!field,
      };
    }

    return {
      message: message.charAt(0).toUpperCase() + message.slice(1),
      hasError: !!field,
    };
  }, [errors.email, errors.password]);

  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.HeadingContent>
            <S.Img src={IoasysLogo} alt="logo ioasys books" />{' '}
            <S.Heading>Books</S.Heading>
          </S.HeadingContent>
          <S.FormGroup>
            <CF.TextField
              type="text"
              name="email"
              ref={register}
              label="Email"
            />
            <S.BoxRelative>
              <CF.TextField
                type="password"
                name="password"
                ref={register}
                label="Password"
              />
              <S.ButtonLogin type="submit">Entrar</S.ButtonLogin>
            </S.BoxRelative>
          </S.FormGroup>
        </S.Form>
        <CF.Error
          leftAling="0%"
          topAling="250px"
          active={errorMessage.hasError}
          message={errorMessage.message}
        />
      </S.FormContainer>
    </S.Wrapper>
  );
};
