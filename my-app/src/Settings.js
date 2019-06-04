import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIcon from "./img/recipesIcon-notSelected.png";
import equipmentIconNotSelected from "./img/equipmentIcon-notSelected.png";
import settingsIcon from "./img/settingsIcon-selected.png";
import logoutIcon from "./img/logoutIcon.png";
import firebase from 'firebase';
import { ROUTES } from './constants';
import { Link } from 'react-router-dom';

// https://bootsnipp.com/snippets/M48pA
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            recipes: [],
            equipment: [],
            ingredients: [],
            email: '',
            password: '',
            username: '',
            recipeClicked: false,
            equipClicked: false,
            ingredClicked: false,
            setting: false,
        };
    }

    componentWillMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    email: user.email,
                    subEmail: user.email.substr(0, user.email.indexOf('@'))
                })

                let reference = firebase.database().ref('users/' + this.state.subEmail + '/Author');
                reference.on('value', (snapshot) => {
                    let settings = snapshot.val();

                    if (settings != null) {
                        this.setState({
                            email: settings.email,
                            password: settings.password,
                            username: settings.username,
                        })
                    }

                })
            }
        })
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

    render() {
        return (
            <div id="profile-body">
                <Navigation />


                {/* <div className="container"> */}
                {/* <div className="row profile"> */}
                {/* <div className="col-md-3" id="column"> */}
                <div className="profile-sidebar">
                    <div className="profile-userpic">
                        <img src={user} alt="user" />
                    </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">{this.state.username}</div>

                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <a href="Recipes">
                                <li id="li-test" className="link" onClick={() => this.state.recipeClicked = true}>
                                    <div onClick={() => this.state.recipeClicked = true}>
                                        <img src={recipesIcon} alt="recipes" />
                                        Recipes

                                    </div>
                                </li>
                            </a>


                            <li>
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                <img src={equipmentIconNotSelected} alt="equipment" />
                                Equipment
                            </li>
                            <li>
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                <img src={equipmentIconNotSelected} alt="equipment" />
                                Ingredients
                            </li>
                            <li>
                                <a href="./Settings"><img src={settingsIcon} alt="settings" /></a>
                                {/* <Link to={ROUTES.Settings}>Settings</Link> */}
                            </li>
                            <li>
                                <a href="./Home"><img src={logoutIcon} alt="sign out" /></a>
                                <Link to={ROUTES.Home}>Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                <form id="signup-form">
                        <div className="form-group">
                            <label>New Email Address</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email Address"
                                onChange={(event) => { this.handleChange(event) }}>
                            </input>
                        </div>

                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => { this.handleChange(event) }}>
                            </input>
                        </div>
                        <div id="save" onClick={() => {
                            this.handleSignUp(this.state.email, this.state.password);
                        }}>
                            <Link to={ROUTES.Profile}>Save</Link>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
