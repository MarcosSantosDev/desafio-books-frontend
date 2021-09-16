import { LoginResponse } from 'services/auth';
import { getUserData, isAuthenticated } from 'lib/core/session';

export type AuthAction =
  | { type: 'AUTH_LOADING' }
  | { type: 'AUTH_SUCCESS'; payload: LoginResponse }
  | { type: 'AUTH_ERROR'; error: unknown }
  | { type: 'LOGOUT' };

export type AuthInitialState = {
  data: {
    isAuthenticated: boolean;
    user: LoginResponse | undefined;
  };
  error: unknown;
  loading: boolean;
};

export const initialState: AuthInitialState = {
  data: {
    isAuthenticated: isAuthenticated(),
    user: getUserData(),
  },
  loading: false,
  error: undefined,
};

export const authReducer = (
  state: AuthInitialState = initialState,
  action: AuthAction,
): AuthInitialState => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        data: {
          ...state.data,
          isAuthenticated: isAuthenticated(),
          user: action.payload,
        },
        loading: false,
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case 'LOGOUT':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
