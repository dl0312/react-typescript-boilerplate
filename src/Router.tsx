import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { BackTop } from 'antd';
import Home from './routes/Home';
import Header from './components/Header';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SectionContainer = styled.section``;

export default function Router() {
  return (
    <>
      <BackTop />
      <MainContainer>
        <Header />
        <SectionContainer>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </SectionContainer>
      </MainContainer>
    </>
  );
}
