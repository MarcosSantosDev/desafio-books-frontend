import { Helmet } from 'react-helmet-async';
import * as CC from 'components/contexts';

export const Login = () => {
  const handleSubmit = (formData: CC.FormProps) => {
    console.log(formData);
  };

  return (
    <>
      <Helmet title="Login - Ioasys books" />
      <CC.LoginForm onSubmit={handleSubmit} />
    </>
  );
};
