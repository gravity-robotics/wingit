import React from "react";
import Webapp from "./Webapp";
import Website from "./Website";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Website} exact />
        {/* <Route path="/demo" component={Webapp} exact /> */}
        <Route path="/view/:id" children={<Child />} />
      </Switch>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  if (id === "demo") {
    return <Webapp id={id} />;
  } else {
    return (
      <div style={{ width: "100vw" }}>
        <h1 style={{ color: "black", fontWeight: "600", textAlign: "center" }}>
          Invalid Menu ID: {id}
        </h1>
        <p style={{ color: "black", fontSize: "1.5rem", textAlign: "center" }}>
          Please scan a valid QR Code.
        </p>
      </div>
    );
  }
}

export default App;
