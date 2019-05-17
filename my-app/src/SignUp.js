import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import signup from "./img/signup.jpg";
import './SignUp.css';
import { Redirect, Link } from 'react-router-dom';
import { ROUTES } from './constants';

export default class SignUp extends React.Component {
    handleChange(event) {
//         console.log(event);
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        // console.log(field);
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    cancel() {
        return <Redirect to={ROUTES.Home} />
    }

    render() {
        return(
            <div>
                <Navigation />
                <div id="image-pancakes-signup">
                    <img className="img-fluid signup-image" src={signup} alt="pancake image on signup" />
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
                            <div id="save">
                            {/* <div className="save" onClick={() => this.updatesignup()}> */}
                                <Link to={ROUTES.Home}>Create Account</Link>
                            </div>
                            {/* <div id="cancel" onClick={() => this.cancel() }>
                                <Link to={ROUTES.Home}>CANCEL</Link>
                            </div> */}
                        </form>
                    </div>

                <Footer />
            </div>
        );
    }
}
