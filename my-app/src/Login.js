import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import login from "./img/login.jpg";
import './Login.css';
// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ROUTES } from './constants';
import { Redirect } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
          loggedIn: false,
          email: '',
          password: ''
        };  
    }

    componentWillUnmount() {
        this.stopWatchingAuth();
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

    
    pass() {
        return <Redirect to={ROUTES.Home}/>
    }

    handleSignIn() {
        console.log(this.state.email);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.pass())
            .catch((err) => {
                this.setState({ errorMessage: err.message });
            });
    }

    handleChange(event) {
//         console.log(event);
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        // console.log(field);
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to={ROUTES.Home} />
        }
        return(
            <div>
                <Navigation loggedIn={this.state.loggedIn} user={this.state.user} />
                <div id="image-pancakes-login">
                    <img className="img-fluid login-image" src={login} alt="pancakes" />
                </div>
                    <div id="body-login">
                        <form id="login-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="emait" 
                                    className="form-control" 
                                    id="email" 
                                    aria-describedby="email" 
                                    placeholder="Enter Email" 
                                    name="email"
                                    value={this.state.email}
                                    onInput={(event) => { this.handleChange(event) }}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="password" 
                                    aria-describedby="email" 
                                    placeholder="Enter Password"
                                    name="password"
                                    value={this.state.password} 
                                    onInput={(event) => { this.handleChange(event) }}/>
                            </div>
                            {/* <button type="button" class="btn btn-primary"><Link to={ROUTES.SignUp}></Link>Sign Up</button> */}
                            <button type="button" class="btn btn-info" onClick={() => this.handleSignIn()}>Login</button>
                        </form>
                    </div>

                <Footer />
            </div>
        );
    }
}
