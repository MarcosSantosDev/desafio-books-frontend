import { Dispatch } from 'react';
import { login, LoginBody } from 'services/auth';
import { setAuthorizationToken, setUserData } from 'lib/core/session';
import { AuthAction } from './reducer';

export const authenticateUser = async (
  dispatch: Dispatch<AuthAction>,
  userCredential: LoginBody,
) => {
  try {
    dispatch({ type: 'AUTH_LOADING' });

    const response = await login(userCredential);

    if (response && response.status) {
      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refresh-token'];
      const userData = response.data;

      setAuthorizationToken({
        'access-token': accessToken,
        'refresh-token': refreshToken,
      });
      setUserData(userData);

      dispatch({
        type: 'AUTH_SUCCESS',
        payload: userData,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Error
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  }
};
