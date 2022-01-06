import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
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
  signIn: ({email, password}: IUser) => void;
  signOut: () => void;
} 

const AuthContext = createContext({} as IContextData);

const AuthProvider = ({children}: AuthProviderProps) => {

  const [ user, setUser ] = useState<string>('');
  const [ token, setToken ] = useState<string>('');

  const accountUser = '@userAccount:user';
  const accountToken = '@usertoken:user';

  useEffect(() => {
    const verifyTokenActive = async () => {
      const tokenVerifyActive = await AsyncStorage.getItem(accountToken);
      const userVerifyActive = await AsyncStorage.getItem(accountUser);

      if(tokenVerifyActive && userVerifyActive) {
        let userVerifyCredentials = await JSON.parse(userVerifyActive) as IUser;
        setUser(userVerifyCredentials.email);

        setToken(tokenVerifyActive);
      }
    }

    verifyTokenActive();
  }, []);


  const signIn = async ({email, password}: IUser) => {

    const key = process.env.KEY_PASS_SIGNIN as string;

    const userAccessCreated = await AsyncStorage.getItem(accountUser);
    if(userAccessCreated) {
      let userVerifyCredentials = await JSON.parse(userAccessCreated) as IUser;
      if(email === userVerifyCredentials.email && password === userVerifyCredentials.password ) {
        let tokenAccount = JWT.encode({email}, key);
        await AsyncStorage.setItem(accountToken, tokenAccount);
        
        setUser(email);
        setToken(tokenAccount);
        return;
      }
      Alert.alert('Opsss!', 'Email ou Senha inválidos');
    }

    if(!userAccessCreated) {
      const countAccessCreated = { email, password };
      await AsyncStorage.setItem(accountUser, JSON.stringify(countAccessCreated));

      let tokenAccount = JWT.encode({email}, key);
      await AsyncStorage.setItem(accountToken, tokenAccount);
      
      setUser(email);
      setToken(tokenAccount);
    }
  }

  const signOut = async () => {
    setToken('');
    await AsyncStorage.removeItem(accountToken);
  }


  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }} > 
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };