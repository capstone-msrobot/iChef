import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import Login from './Login'
import Results from './Results'
import ShowRecipe from './ShowRecipe'
import firebase from 'firebase';
import Explore from "./Explore"
import SignUp from "./SignUp"
import Profile from "./Profile"
import Upload from "./Upload"
import ProfileEquipment from "./ProfileEquipment"
import ProfileIngred from "./ProfileIngred"
import Settings from "./Settings"

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

  componentDidMount() {
    // Authentication
    this.stopWatchingAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            this.setState({
                user: firebaseUser,
                errorMessage: '',
                loggedIn: true
            });
        }
        else {
            this.setState({ user: null, loggedIn:false}); //null out the saved state
        }
    });
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
          <Route exact path={ROUTES.SignUp} component={SignUp} />
          <Route exact path={ROUTES.Profile} component={Profile} />
          <Route exact path={ROUTES.Upload} component={Upload} />
          <Route exact path={ROUTES.ProfileEquipment} component={ProfileEquipment} />
          <Route exact path={ROUTES.ProfileIngred} component={ProfileIngred} />
          <Route exact path={ROUTES.Settings} component={Settings} />
          <Redirect to={ROUTES.Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;