import React, { createContext } from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './Router';
import { GlobalStyle } from './global-styles';
import { ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';
import ScrollToTop from './components/ScrollToTop';
import { Theme } from './interfaces';
import { themeList } from './config/_mixin';
import { useDarkMode } from './hooks/useDarkMode';

const AppContainer = styled.div``;
export const ThemeContext = createContext({});

export default function App() {
  const [theme, toggleTheme] = useDarkMode(Theme.LIGHT);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={theme === Theme.LIGHT ? themeList.light : themeList.dark}
      >
        <>
          <GlobalStyle />
          <ToastContainer
            draggable={true}
            position={'bottom-right'}
            autoClose={5000}
            pauseOnHover={true}
          />
          <HashRouter>
            <ScrollToTop>
              <AppContainer className="app">
                <Router />
              </AppContainer>
            </ScrollToTop>
          </HashRouter>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
