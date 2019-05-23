import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIconSelected from "./img/recipesIcon-selected.png";
// import recipesIconNotSelected from "./img/ingredientIcon-notSelected.png";
import equipmentIconSelected from "./img/equipmentIcon-selected.png";
import equipmentIconNotSelected from "./img/equipmentIcon-notSelected.png";
import settingsIcon from "./img/settingsIcon.png";
import logoutIcon from "./img/logoutIcon.png";

import users from "./img/pasta.jpg";
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
                                        <img src={recipesIconSelected} alt="recipes" />
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
                {/* </div> */}
                {/* </div> */}


                {(this.recipeClicked) &&
                    console.log("here 2")
                    // <Recipes />
                }
                {/* <Recipes /> */}
                {/* </div> */}
                <Footer />
            </div>
        )
    }
}

export class Recipes extends React.Component {
    render() {
        console.log("here");
        // this.recipeClicked = ;
        return (
            <div id="show-content">
                <div id="page-label">
                    <p className="title">Your Recipes</p>
                    <img src={recipesIconSelected} alt="recipes" className="title-icon" />
                </div>
                <div className="row">
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>

                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                    <div id="recipe" className="col-md-4">
                        <div className="card results-card">
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={users} alt="food" />
                                </div>

                                {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                                <h5 className="results-card-title">Test</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: 1</p>
                                <p className="card-text" id="card-text">Equipments: 1</p>
                                <p className="card-text" id="card-text">Ingredients: 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export class Equipment extends React.Component {
    render() {
        return (
            <div id="show-content">
                <div id="page-label">
                    <p className="title">Your Equipment</p>
                    <img src={equipmentIconSelected} alt="recipes" className="title-icon" />
                </div>

                <div class="container">
                    <div class="row">
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Frying Pan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Ingredients extends React.Component {
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
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />Carrots
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}