import React, { createContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { BackTop } from 'antd';
import { ToastContainer } from 'react-toastify';
import Router from './Router';
import { GlobalStyle } from './global-styles';
import ScrollToTop from './components/ScrollToTop';
import { Theme } from './interfaces';
import { themeList } from './config/_mixin';
import useDarkMode from './hooks/useDarkMode';

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: Theme.LIGHT,
  toggleTheme: () => {
    console.error(
      '[react-typescript-boilerplate] you should set { theme, toggleTheme } value with useDarkMode(...)',
    );
    return null;
  },
});

export default function App() {
  const { theme, toggleTheme } = useDarkMode(Theme.LIGHT);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle
        theme={theme === Theme.LIGHT ? themeList.light : themeList.dark}
      />
      <ToastContainer
        draggable={true}
        position={'bottom-right'}
        autoClose={5000}
        pauseOnHover={true}
      />
      <HashRouter>
        <ScrollToTop>
          <BackTop />
          <Router />
        </ScrollToTop>
      </HashRouter>
    </ThemeContext.Provider>
  );
}
