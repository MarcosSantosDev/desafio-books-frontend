import { LoginForm, FormProps } from 'components/contexts/acount';

export const Login = () => {
  const handleSubmit = (formData: FormProps) => {
    console.log(formData);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
