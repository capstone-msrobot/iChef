import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIconSelected from "./img/recipesIcon-selected.png";

import equipIconNotSelected from "./img/equipment 2.png";
import ingredIconNotSelected from "./img/ingredient.png";
import settingsIcon from "./img/settingsIcon.png";

import users from "./img/pasta.jpg";
import firebase from 'firebase';


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
                        <div className="profile-usertitle-name">
                            {this.state.username}
                        </div>

                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <li className="active">
                                {/* <a href="#"> */}
                                {/* check state and change image depending on if user is on recipes */}
                                <img src={recipesIconSelected} alt="recipes" />
                                Recipes
                            </li>
                            <li>
                                <a href="./ProfileEquipment">
                                    {/* check state and change image depending on if user is on recipes */}
                                    <img src={equipIconNotSelected} alt="equipment" />
                                    Equipment
                                </a>
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


                <Recipes />
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