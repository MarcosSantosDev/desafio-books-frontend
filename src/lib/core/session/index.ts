import { LoginResponse } from 'services/auth';
import {
  getLocalStorageKey,
  setLocalStorageKey,
  removeLocalStorageKey,
} from 'lib/localStorage';
import { AUTHORIZATION_TOKEN, USER_DATA } from 'constants/authentication';

export type AuthorizationTokenProps = {
  'access-token': string;
  'refresh-token': string;
};

export const getAuthorizationToken = () => {
  const authorizationToken: AuthorizationTokenProps | undefined =
    getLocalStorageKey(AUTHORIZATION_TOKEN);

  return authorizationToken;
};

export const setAuthorizationToken = (
  authorizationToken: AuthorizationTokenProps,
) => {
  setLocalStorageKey(AUTHORIZATION_TOKEN, authorizationToken);
};

export const getUserData = () => {
  const userData: LoginResponse | undefined = getLocalStorageKey(USER_DATA);
  return userData;
};

export const setUserData = (userData: LoginResponse) => {
  setLocalStorageKey(USER_DATA, userData);
};

export const isAuthenticated = () => {
  const authorizationToken = getAuthorizationToken();
  const userData = getUserData();

  if (authorizationToken && userData) {
    return Boolean(authorizationToken['access-token'] && userData.id);
  }

  return false;
};

export const clearClaims = () => {
  removeLocalStorageKey(AUTHORIZATION_TOKEN);
  removeLocalStorageKey(USER_DATA);
};
