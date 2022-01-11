import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IContextTheme {
  statu: boolean;
  night: (status: boolean) => void;
} 

const ThemeContext = createContext({} as IContextTheme);

const ThemeProviderFolks = ({children}: AuthProviderProps) => {

  const [ statu, setStatus ] = useState(false);

  const night = (status: boolean) => {
    setStatus(status);
  }

  return (
    <ThemeContext.Provider value={{ statu, night }} > 
      { children }
    </ThemeContext.Provider>
  );
}

const useThemeFolks = () => {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProviderFolks, useThemeFolks };