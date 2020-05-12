import React, { useEffect } from 'react';
import { GlobalStyle } from '../global-styles';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';

// This is example of styled-components
const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
`;

// This is example of styled-components with TypeScript or you can make interface of props
const Content = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export default function Home() {
  useEffect(() => {
    toast('🦄 Welcome to React TypeScript Boilerplate!');
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <ThemeToggleSwitch />
        <Content>
          react, typescript, styled-components
          <br />
          boilerplate
        </Content>
      </Container>
    </>
  );
}
