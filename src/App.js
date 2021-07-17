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
         <Route exact path = "/" component = {Landing}/>
        <Route path = "/portfolio" component = {Portfolio}/>
      </Switch>
    </Router>
  );
}
