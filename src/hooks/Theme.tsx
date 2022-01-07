import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IContextTheme {
  title: string;
  night: (activate: boolean) => void;
} 

const ThemeContext = createContext({} as IContextTheme);

const ThemeProviderFolks = ({children}: AuthProviderProps) => {

  const [ title, setTitle ] = useState('');

  const night = () => {
    
  }

  return (
    <ThemeContext.Provider value={{ title, night }} > 
      { children }
    </ThemeContext.Provider>
  );
}

const useThemeFolks = () => {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProviderFolks, useThemeFolks };