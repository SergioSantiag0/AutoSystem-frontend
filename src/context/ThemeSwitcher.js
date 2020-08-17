import React, { createContext, useState, useEffect } from 'react';

export const ThemeSwitcher = createContext();

const ThemeSwitcherProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('@theme'));
  useEffect(() => {
    if (localStorage.getItem('@theme') === null) {
      localStorage.setItem('@theme', 'dark');
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeSwitcher.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeSwitcher.Provider>
  );
};

export default ThemeSwitcherProvider;
