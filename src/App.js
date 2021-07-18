import React from "react";
import {
  HashRouter as Router,
  Switch
} from "react-router-dom"

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {About}/>
        <Route path = "/portfolio" component = {Portfolio}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/resume" component = {Resume}/>
      </Switch>
    </Router>
  );
}
