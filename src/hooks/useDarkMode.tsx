import { useEffect, useState } from 'react';
import { Theme } from '../interfaces';

const THEME_KEY = 'theme';

export default function useDarkMode(defaultTheme: Theme.LIGHT) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      window.localStorage.setItem(THEME_KEY, JSON.stringify(Theme.DARK));
      setTheme(Theme.DARK);
    } else {
      window.localStorage.setItem(THEME_KEY, JSON.stringify(Theme.LIGHT));
      setTheme(Theme.LIGHT);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_KEY);
    if (localTheme !== null) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  return { theme, toggleTheme };
}
