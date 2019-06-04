import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import signup from "./img/signup.jpg";
import './SignUp.css';
import { Redirect, Link } from 'react-router-dom';
import { ROUTES } from './constants';
import firebase from 'firebase';
import FormErrors from './FormErrors'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            email: '',
            subemail: '',
            password: '',
            username: '',
            firstName: '',
            lastName: '',
            users: [],
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
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

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                // if (passwordValid) {
                //     fieldValidationErrors.password = '';
                // } else {
                //     fieldValidationErrors.password = 'Password is too short';
                // }
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
        console.log (this.state.formErrors);
        console.log(this.state.emailValid);
        console.log(this.state.passwordValid);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });

        //         console.log(event);
        // let field = event.target.name; // which input
        // let value = event.target.value; // what value
        // // console.log(value);
        // let changes = {}; // object to hold changes
        // changes[field] = value; // change this field
        // this.setState(changes); // update state
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
        let subEmail = this.state.email.substr(0, this.state.email.indexOf('@'));
        let reference = firebase.database().ref('users');
        let newData = {
            Author: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            },
        }
        reference.child(subEmail).set(newData)
    }

    render() {
        return (
            <div>
                <Navigation />
                <div id="image-pancakes-signup">
                    <img className="img-fluid signup-image" src={signup} alt="pancakes" />
                </div>
                {/* <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div> */}
                <div id="body-signup">
                    <form id="signup-form">
                        <div className="panel panel-default">
                            <FormErrors id="formMessage" formErrors={this.state.formErrors} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label>Email Address</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email Address"
                                onChange={(event) => { this.handleChange(event) }}>
                            </input>
                        </div>

                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
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

                        }} disabled={!this.state.formValid}>
                            <Link to={ROUTES.Profile}>Create Account</Link>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        );
    }
}
