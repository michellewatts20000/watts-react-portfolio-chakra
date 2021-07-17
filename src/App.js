import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router>
      <Switch>
         <Route exact path = "/" component = {Landing}/>
        <Route path = "/portfolio" component = {Portfolio}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/resume" component = {Resume}/>
      </Switch>
    </Router>
  );
}
