import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";

import recipesIconNotSelected from "./img/recipesIcon-notSelected.png";
import equipmentIconSelected from "./img/equipmentIcon-selected.png";
import equipmentIconNotSelected from "./img/equipmentIcon-notSelected.png";
import settingsIcon from "./img/settingsIcon.png";

import firebase from 'firebase';
// import { ROUTES } from './constants';
// import { Link } from 'react-router-dom';


// https://bootsnipp.com/snippets/M48pA
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            ingredients: [],
            email: '',
            password: '',
            username: '',
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
                            <li >
                                <a href="./Profile">
                                    {/* check state and change image depending on if user is on recipes */}
                                    <img src={recipesIconNotSelected} alt="recipes" />
                                    Recipes
                                </a>
                               
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                {/* <img src={recipesIconSelected} alt="recipes" />
                                Recipes */}
                            </li>
                            <li>
                                <a href="./ProfileEquipment">
                                    {/* check state and change image depending on if user is on recipes */}
                                    <img src={equipmentIconNotSelected} alt="equipment" />
                                    Equipment
                                </a>
                            </li>
                            <li className="active">
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                <img src={equipmentIconSelected} alt="ingredient" />
                                Ingredients
                            </li>
                            <li>
                                <a href="./Settings">
                                    <img src={settingsIcon} alt="settings" /> 
                                    Settings
                                </a>
                                Settings
                                {/* <Link to={ROUTES.Settings}>Settings</Link> */}
                            </li>
                            {/* <li>
                                <a href="./Home"><img src={logoutIcon} alt="sign out" /></a>
                                <Link to={ROUTES.Home}>Sign Out</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>


                <Ingredients />
                <Footer />
            </div>
        )
    }
}

export class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: [],
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

    handleChange =  (event)=> {
        let value = event.target.value; // what value
        let ingred = this.state.ingredient
        ingred.push(value);
        this.setState({
            ingredient: ingred
        });
    }

    handleIngredient() {
        let reference = firebase.database().ref('users');
        let newData = {
            Ingredients: this.state.ingredient,
        }
        console.log(this.state.subEmail);
        reference.child(this.state.subEmail).update(newData)
    }
    
    render() {
        return (
            <div id="show-content">
                <div id="page-label">
                    <p className="title">Your Ingredients</p>
                    {/* <img src={ingredientIconSelected} alt="recipes" className="title-icon" /> */}
                </div>

                <div class="container">
                    <div class="row">
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="chicken" onClick={(event) => { this.handleChange(event) }}/>Chicken
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="pasta" onClick={(event) => { this.handleChange(event) }}/>Pasta
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="cilantro" onClick={(event) => { this.handleChange(event) }}/>Cilantro
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="lemon" onClick={(event) => { this.handleChange(event) }}/>Lemon
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="garlic" onClick={(event) => { this.handleChange(event) }}/>Garlic
                            </div>
                        </div>
                    </div>
                </div>
                <div id="signIn" onClick={() => this.handleIngredient()}> Save
                    {/* <div className="save" onClick={() => this.updatesignup()}> */}
                        {/* <Link to={ROUTES.Profile}>Sign In</Link> */}
                </div>
            </div>
        )
    }
}