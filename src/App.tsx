import React, { useState } from "react";
import { GlobalStyle } from "./global-styles";
import styled from "styled-components";

// This is example of styled-components
const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// This is example of styled-components with TypeScript or you can make interface of props
const Header = styled("header")<{ toggleState: boolean }>`
  background: linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  color: ${({ toggleState }) => (toggleState ? "grey" : undefined)};
  transition: 0.5s ease-in-out;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
`;

// This is example of react-hooks with TypeScript
function useToggle(defaultValue: boolean) {
  const [toggleState, setToggleState] = useState(defaultValue);

  function onMouseOver() {
    setToggleState(true);
  }

  function onMouseOut() {
    setToggleState(false);
  }

  return { toggleState, onMouseOver, onMouseOut };
}

function App() {
  const toggle = useToggle(false);
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Header {...toggle} className="App-header">
          react, typescript, styled-components
          <br />
          boilerplate
        </Header>
      </Container>
    </>
  );
}

export default App;
