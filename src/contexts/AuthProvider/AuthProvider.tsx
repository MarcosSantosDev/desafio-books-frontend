import { ReactNode, useReducer } from 'react';
import { AuthContext } from './context';
import { initialState, authReducer } from './reducer';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authData, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={[authData, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
