'use client';
/* eslint-disable-next-line */
import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

type Theme = 'light' | 'dark' | undefined | null;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setInitialTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("html")?.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  const setInitialTheme = (theme: Theme) => {
    if(!theme) {
      theme = 'dark';
    }
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, setInitialTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme};
