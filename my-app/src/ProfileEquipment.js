import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIconNotSelected from "./img/recipesIcon-notSelected.png";

import equipIconSelected from "./img/equipment-selected.png";
import ingredIconNotSelected from "./img/ingredient.png";
import settingsIcon from "./img/settingsIcon.png";

// import users from "./img/pasta.jpg";
import firebase from 'firebase';
// import { ROUTES } from './constants';
// import { Link } from 'react-router-dom';


// https://bootsnipp.com/snippets/M48pA
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user,
            loggedIn: this.props.loggedIn,
            equipment: [],
            email: '',
            password: '',
            username: '',
            subEmail: '',
        };
    }

    componentWillMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            // if (user) {
            this.setState({
                email: user.email,
                subEmail: user.email.substr(0, user.email.indexOf('@'))

            })
            console.log(this.state.subEmail);

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
            // }
        })
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
                        <div className="profile-usertitle-name">
                            {this.state.username}
                        </div>

                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <li>
                                <a href="./Profile">
                                    {/* check state and change image depending on if user is on recipes */}
                                    <img src={recipesIconNotSelected} alt="recipes" />
                                    Recipes
                                </a>
                            </li>
                            <li className="active">
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                <img src={equipIconSelected} alt="equipment" />
                                Equipment
                            </li>
                            <li>
                                <a href="./ProfileIngred">
                                    {/* check state and change image depending on if user is on recipes */}
                                    <img src={ingredIconNotSelected} alt="equipment" />
                                    Ingredients
                                </a>
                            </li>
                            <li>
                                <a href="./Settings">
                                    <img src={settingsIcon} alt="settings" />
                                    Settings
                                </a>
                                {/* <Link to={ROUTES.Settings}>Settings</Link> */}
                            </li>
                            {/* <li>
                                <a href="./Home"><img src={logoutIcon} alt="sign out" /></a>
                                <Link to={ROUTES.Home}>Sign Out</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <Equipment user={this.state.user} subEmail={this.state.subEmail} />
                <Footer />
            </div>
        )
    }
}

export class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            subEmail: this.props.subEmail,
        };
    }

    componentWillMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                email: user.email,
                subEmail: user.email.substr(0, user.email.indexOf('@'))

            })
        })
    }

    handleChange = (event) => {
        let value = event.target.value; // what value
        let equip = this.state.equipment
        equip.push(value);
        this.setState({
            equipment: equip
        });
    }

    handleEquipment() {
        let reference = firebase.database().ref('users');
        let newData = {
            Equipment: this.state.equipment,
        }
        console.log(this.state.subEmail);
        reference.child(this.state.subEmail).update(newData)
    }

    render() {
        return (
            <div id="show-content">
                <div id="page-label">
                    <p className="title">Your Equipment</p>
                    <img src={equipIconSelected} alt="recipes" className="title-icon" />
                </div>

                <div class="container">
                    <div class="row">
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="pan" onClick={(event) => { this.handleChange(event) }} />Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="pot" onClick={(event) => { this.handleChange(event) }} />Pot
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="blender" onClick={(event) => { this.handleChange(event) }} />Blender
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="fryer" onClick={(event) => { this.handleChange(event) }} />Fryer
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="grinder" onClick={(event) => { this.handleChange(event) }} />Grinder
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="ladle" onClick={(event) => { this.handleChange(event) }} />Ladle
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="spatula" onClick={(event) => { this.handleChange(event) }} />Spatula
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="kitchen shears" onClick={(event) => { this.handleChange(event) }} />Kitchen Shears
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="can opener" onClick={(event) => { this.handleChange(event) }} />Can Opener
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="corkscrew" onClick={(event) => { this.handleChange(event) }} />Corkscrew
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="thermometer" onClick={(event) => { this.handleChange(event) }} />Thermometer
                            </div>
                        </div>
                    </div>
                </div>
                <div id="signIn" onClick={() => this.handleEquipment()}> Save
                    {/* <div className="save" onClick={() => this.updatesignup()}> */}
                    {/* <Link to={ROUTES.Profile}>Sign In</Link> */}
                </div>
            </div>
        )
    }
}