import { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IUser {
  email: string;
  token: string;
}

interface IContextData {
  user: IUser;
} 

const AuthContext = createContext({} as IContextData);

const AuthProvider = ({children}: AuthProviderProps) => {

  const user = {
    email: 'jeandson@gmail.com',
    token: 'fkajd897489213kdsjfasdsdf'
  }

  return (
    <AuthContext.Provider value={{ user }} > 
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };