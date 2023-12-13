import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavHeader, NavSocials } from "../components";
import { About, Projects, Project, Contact } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={NavHeader} />
        <Route component={NavSocials} />
      </Switch>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
