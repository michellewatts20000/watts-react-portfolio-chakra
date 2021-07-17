import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/">
          <Portfolio />
        </Route>

      </Switch>
    </Router>
  );
}
