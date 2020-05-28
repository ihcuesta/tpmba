import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Bg } from "./components/styled/GlobalStyles";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Bg>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Provider>
      </Router>
    </Bg>
  );
}

export default App;
