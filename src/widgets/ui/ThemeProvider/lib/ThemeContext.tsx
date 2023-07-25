import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_mode',
  DARK = 'app_dark_mode',
}

export interface ThemeContextInterface {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
