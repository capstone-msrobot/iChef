import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import login from "./img/login.jpg";
import './Login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          loggedIn: this.props.loggedIn
        };  
    }

    render() {
        return(
            <div>
                <Navigation loggedIn={this.state.loggedIn} />
                <div id="image-pancakes-login">
                    <img className="img-fluid login-image" src={login} alt="pancake image on login" />
                </div>
                    <div id="body-login">
                        <form id="login-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter Email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" aria-describedby="email" placeholder="Enter Password" />
                            </div>
                        </form>
                    </div>
                <Footer />
            </div>
        );
    }
}
