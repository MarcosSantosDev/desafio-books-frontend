import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from 'contexts/AuthProvider/actions';
import { useAuthContext } from 'contexts/AuthProvider/context';
import { LoginForm, FormProps } from 'components/contexts/acount';

export const Login = () => {
  const [authState, dispatchAuthState] = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }: FormProps) => {
    authenticateUser(dispatchAuthState, {
      email,
      password,
    });
  };

  const { isAuthenticated } = authState.data;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet title="Login - Ioasys books" />
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
