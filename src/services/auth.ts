import clientHttp from './clientHttp';

export type LoginBody = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
};

export const login = async (body: LoginBody) =>
  clientHttp.post<LoginResponse>('/auth/sign-in', {
    email: body.email,
    password: body.password,
  });
