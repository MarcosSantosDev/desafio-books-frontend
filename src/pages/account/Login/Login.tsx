import { Helmet } from 'react-helmet-async';
import { LoginForm, FormProps } from 'components/contexts/acount';

export const Login = () => {
  const handleSubmit = (formData: FormProps) => {
    console.log(formData);
  };

  return (
    <>
      <Helmet title="Login - Ioasys books" />
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
