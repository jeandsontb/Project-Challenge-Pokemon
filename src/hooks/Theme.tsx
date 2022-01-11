import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IContextTheme {
  status: boolean;
  night: () => void;
} 

const ThemeContext = createContext({} as IContextTheme);

const ThemeProviderFolks = ({children}: AuthProviderProps) => {

  const [ status, setStatus ] = useState(false);

  const night = () => {
    setStatus(!status);
  }

  return (
    <ThemeContext.Provider value={{ status, night }} > 
      { children }
    </ThemeContext.Provider>
  );
}

const useThemeFolks = () => {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProviderFolks, useThemeFolks };