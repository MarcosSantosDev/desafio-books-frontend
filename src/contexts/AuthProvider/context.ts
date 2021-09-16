import { createContext, useContext } from 'react';
import { AuthInitialState, AuthAction, initialState } from './reducer';

type AuthContextProps = [AuthInitialState, React.Dispatch<AuthAction>];

export const AuthContext = createContext<AuthContextProps>([
  initialState,
  () => undefined,
]);
export const useAuthContext = () => useContext(AuthContext);
