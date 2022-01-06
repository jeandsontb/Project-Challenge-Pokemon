import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT from 'expo-jwt';

interface AuthProviderProps {
  children: ReactNode;
}

interface IUser {
  email: string;
  password: string;
}

interface IContextData {
  user: string;
  token: string;
  signOut: () => void;
} 

const AuthContext = createContext({} as IContextData);

const AuthProvider = ({children}: AuthProviderProps) => {

  const [ user, setUser ] = useState<string>('');
  const [ token, setToken ] = useState<string>('');

  const accountUser = '@userAccount:user';
  const userToken = '@usertoken:user';

  useEffect(() => {
    const key = process.env.KEY_PASS_SIGNIN as string;
    const loadTokenCredential = async () => {
      const credentialToken = await AsyncStorage.getItem(accountUser) as string;
      const credentialUser = await AsyncStorage.getItem(userToken);
      
      if(credentialUser) {
        const userCreated = JWT.decode(credentialUser, key ) as IUser;
        setUser(userCreated.email);
      }      
      setToken(credentialToken);      
    }

    loadTokenCredential();
  }, []);

  const signOut = async () => {
    setToken('');
    await AsyncStorage.removeItem(userToken);
  }


  return (
    <AuthContext.Provider value={{ user, token, signOut }} > 
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };