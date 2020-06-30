import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';

// This is example of styled-components
const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`;

// This is example of styled-components with TypeScript or you can make interface of props
const Content = styled.div`
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem 0;
`;

export default function Home() {
  useEffect(() => {
    toast('🦄 Welcome to React TypeScript Boilerplate!');
  }, []);

  return (
    <Container className="App">
      <ThemeToggleSwitch />
      <Content>
        React,
        <br />
        TypeScript,
        <br />
        styled-components
        <br />
        Boilerplate
      </Content>
    </Container>
  );
}
