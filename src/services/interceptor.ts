import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthorizationTokenProps } from 'lib/core/session';
import { getLocalStorageKey } from 'lib/localStorage';
import { AUTHORIZATION_TOKEN } from 'constants/authentication';

export const request = async (config: AxiosRequestConfig) => {
  const authorizationToken =
    getLocalStorageKey<AuthorizationTokenProps>(AUTHORIZATION_TOKEN);

  if (authorizationToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        'access-token': authorizationToken['access-token'],
      },
    };
  }

  return config;
};

export const response = (response: AxiosResponse) => response;

const handleAxiosError = (error: AxiosError<unknown>) => {
  if (error.response) {
    const unauthorizedCodes = [401, 403];

    if (unauthorizedCodes.includes(error.response.status)) {
      // @todo Refresh token
      Promise.reject(error);
    }
  }
};

const handleUnexpectedError = (error: AxiosError<unknown>) => {
  Promise.reject(error);
};

export const errors = async (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  } else {
    handleUnexpectedError(error);
  }
};
