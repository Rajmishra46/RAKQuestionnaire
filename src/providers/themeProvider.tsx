import React, {createContext, useState, ReactNode} from 'react';
import {lightTheme} from '../theme/lightTheme';
import {darkTheme} from '../theme/darkTheme';

interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>(
    lightTheme,
  );
  const [isDark, setDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    setDark(prevTheme => (prevTheme === false ? true : false));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, isDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
