import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
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
