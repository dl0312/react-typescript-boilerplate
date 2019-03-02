import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./global-styles";
import Home from "./routes/Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
