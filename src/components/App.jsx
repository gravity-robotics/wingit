import React from "react";
import Webapp from "./Webapp";
import Website from "./Website";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Website} exact />
        <Route path="/view" component={Webapp} exact />
      </Switch>
    </Router>
  );
}

export default App;
