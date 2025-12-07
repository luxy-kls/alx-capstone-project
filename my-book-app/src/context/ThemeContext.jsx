import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();
export const ThemeProvider = function ({children}) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  const toggleTheme = function(){
  setTheme(theme === 'light' ? 'dark' : 'light');
};

return (
  <ThemeContext.Provider value={{theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
}

 
 export function useTheme() {
   const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
 };
