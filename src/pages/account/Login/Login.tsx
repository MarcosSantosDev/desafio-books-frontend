import { FormEvent } from 'react';
import { LoginForm } from 'components/contexts/acount';

export const Login = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return <LoginForm handleSubmit={handleSubmit} />;
};
