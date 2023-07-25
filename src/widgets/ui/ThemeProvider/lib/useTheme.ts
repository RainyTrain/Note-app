import { useContext, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeProps {
  theme: Theme;
  onChangeTheme: () => void;
}

export const useTheme = (): useThemeProps => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onChangeTheme = () => {
    let newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme, onChangeTheme };
};
