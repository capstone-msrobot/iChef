import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import Login from './Login'
import Results from './Results'
import ShowRecipe from './ShowRecipe'
import Explore from "./Explore"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };  
  }

  componentWillMount(){
      if(sessionStorage.getItem('access_token') != null && sessionStorage.getItem('id_token') != null){
          this.setState({loggedIn: true}); 
      } 
  }

  logOut() {
    this.setState({loggedIn: false}); 
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

        {/* loggedIn={this.state.loggedIn} logOut={this.logOut} */}
          <Route exact path={ROUTES.Home} component={Home} />
          <Route path={ROUTES.AboutUs} component={AboutUs} />
          <Route path={ROUTES.Results} component={Results} />
          <Route path={ROUTES.ShowRecipe} component={ShowRecipe} />
          <Route path={ROUTES.Explore} component={Explore} />
          <Route exact path={ROUTES.Login} component={Login} />
          <Redirect to={ROUTES.Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;