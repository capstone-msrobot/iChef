import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import signup from "./img/signup.jpg";
import './SignUp.css';
import { Redirect, Link } from 'react-router-dom';
import { ROUTES } from './constants';
import firebase from 'firebase';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            email: '',
            password: '',
            username: '',
            firstName: '',
            lastName: '',
            users: []
        };  
    }

    componentDidMount() {
        this.usersRef = firebase.database().ref('users');
        this.usersRef.on('value', (snapshot) => {
            let users = snapshot.val();
            this.setState({
                users: users
            });
        });
    }
    
    handleChange(event) {
//         console.log(event);
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        // console.log(value);
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    cancel() {
        return <Redirect to={ROUTES.Home} />
    }

    handleSignUp(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((firebaseUser) => {
                console.log('User created: ' + firebaseUser.uid);
                this.setState({
                    user: firebase.auth().currentUser,
                    loggedIn: true,
                });
                
                this.addUser();
            })
            .catch((error) => {
                console.log(error.message);
                this.setState({
                    errorMessage: error.message
                });
        });
    }

    addUser() {
        let user = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }
        this.usersRef.push(user);
        var userDisplay = firebase.auth().currentUser;

        userDisplay.updateProfile({
            displayName: this.state.username
        });
    }

    render() {
        return(
            <div>
                <Navigation />
                <div id="image-pancakes-signup">
                    <img className="img-fluid signup-image" src={signup} alt="pancakes" />
                </div>
                    <div id="body-signup">
                        <form id="signup-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email Address"
                                    onChange={(event) => { this.handleChange(event) }}>
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(event) => { this.handleChange(event) }}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    onChange={(event) => { this.handleChange(event) }}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="firstName"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={(event) => { this.handleChange(event) }}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="lastName"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={(event) => { this.handleChange(event) }}>
                                </input>
                            </div>
                            <div id="save" onClick={() => {
                                    this.handleSignUp(this.state.email, this.state.password); 
                            }}>                  
                                <Link to={ROUTES.Profile}>Create Account</Link>
                            </div>
                        </form>
                    </div>

                <Footer />
            </div>
        );
    }
}
