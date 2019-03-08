import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "./Home";
import './App.css';
import AboutUs from "./AboutUs";
import Results from "./Results";
import ShowRecipe from "./ShowRecipe";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path={ROUTES.Home} component={ Home } />
            <Route path={ROUTES.AboutUs} component={AboutUs} />
            <Route path={ROUTES.Results} component={Results} />
            <Route path={ROUTES.ShowRecipe} component={ShowRecipe} />
            <Redirect to={ROUTES.Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
