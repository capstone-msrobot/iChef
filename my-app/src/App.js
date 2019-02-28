import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { ROUTES } from "./constants";
import MainView from "./Main";
import './App.css';
import AboutUs from "./AboutUs";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path={ROUTES.main} component={MainView} />
            <Route path={ROUTES.aboutUs} component={AboutUs} />
            <Redirect to={ROUTES.main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
