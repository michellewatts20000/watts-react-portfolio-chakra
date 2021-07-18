import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router basename={"https://michellewatts20000.github.io/watts-react-portfolio-chakra/"}>
      <Switch>
        <Route exact path = "/" component = {About}/>
        <Route path = "/portfolio" component = {Portfolio}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/resume" component = {Resume}/>
      </Switch>
    </Router>
  );
}
