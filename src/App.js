import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./fluid_css.css"
import 'remixicon/fonts/remixicon.css'
import Main from './components/Main'
import Single from './components/Single'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/' exact ><Main /></Route>
          <Route path='/single' exact ><Single /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
