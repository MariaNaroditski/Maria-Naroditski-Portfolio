import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);

export default Main;
