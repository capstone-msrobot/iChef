import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import Results from './Results'
import ShowRecipe from './ShowRecipe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.Home} component={Home} />
          <Route path={ROUTES.AboutUs} component={AboutUs} />
          <Route path={ROUTES.Results} component={Results} />
          <Route path={ROUTES.ShowRecipe} component={ShowRecipe} />
          <Redirect to={ROUTES.Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;