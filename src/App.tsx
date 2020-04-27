import React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './Router';
import { GlobalStyle } from './global-styles';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop';

const AppContainer = styled.div``;

const App: React.FC = () => {
  return (
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
  );
};

export default App;
