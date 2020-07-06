import React from "react";
import "./fluid_css.css";
import "remixicon/fonts/remixicon.css";
import Main from "./components/Main";
import Single from "./components/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/single" exact component={Single} />
      </Switch>
    </Router>
  );
}

export default App;
