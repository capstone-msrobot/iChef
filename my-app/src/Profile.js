import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Profile.css"
import user from "./img/user.jpg";
import recipesIconSelected from "./img/recipesIcon-selected.png";

import equipIconNotSelected from "./img/equipment 2.png";
import ingredIconNotSelected from "./img/ingredient.png";
import settingsIcon from "./img/settingsIcon.png";

import firebase from 'firebase';


// https://bootsnipp.com/snippets/M48pA
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            recipes: [],
            email: '',
            password: '',
            username: '',
            setting: false,
        };
    }

    componentDidMount() {
        console.log(this.state.user)
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
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
                let reference2 = firebase.database().ref('users/' + this.state.subEmail + '/Recipes');
                reference2.on('value', (snapshot) => {
                    console.log(snapshot.val())
                    let itemsArr = []
                    snapshot.forEach((child) => {
                        itemsArr.push(child.val());
                        console.log("child: :", child.val())
                    })
                    console.log(itemsArr);
                    this.setState({
                        recipes: itemsArr
                    })
                    console.log(this.state.recipes);
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


                <Recipes recipes={this.state.recipes} />
                <Footer />
            </div>
        )
    }
}

export class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           recipes: this.props.recipes
        };
    }
    
    ShowRecipe = (d) => {
        this.props.history.push({pathname: '/ShowRecipe', state:{recipe: d}});
    };
    
    // componentDidMount() {
    //     // let arr = [];
    //     let arr2 = [];
    //     // var query = firebase.database().ref("recipes").orderByKey();
    //     // query.once("value")
    //     // .then(function(snapshot) {
    //     //     snapshot.forEach(function(childSnapshot) {
    //     //         arr.push(childSnapshot.val());
    //     //     });
    //     // }).then(()=>{
    //     //     this.setState({
    //     //         result: arr,
    //     //         oldResult: arr
    //     //     })
    //     // });

    //     console.log(this.state.subEmail);
    //     var query2 = firebase.database().ref("users/" + this.state.subEmail + "/Recipes").orderByKey();
    //     query2.once("value")
    //     .then(function(snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //             arr2.push(childSnapshot.val());
    //         });
    //     }).then(()=>{
    //         this.setState({
    //             result2: arr2,
    //         })
    //     });
    // }
    
    render() {
        console.log("here");
        // this.recipeClicked = ;

        let array = this.props.recipes.map((d, i) => {
            return  (
                <div id="recipe" className="col-md-4">
                        <div className="card results-card" onClick={()=> this.ShowRecipe(d)}>
                            <div className="card-body" id="results-card-body">
                                <div className="card-img-top recipe-image">
                                    <img className={"img-fluid card-img-top results-card-image"} src={d.imageURL} alt="food" />
                                </div>

                               
                                <h5 className="results-card-title">{d.name}</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text" id="card-text">Minutes: {d.time}</p>
                                <p className="card-text" id="card-text">Equipments: {d.equipment.length}</p>
                                <p className="card-text" id="card-text">Ingredients: {d.ingredients.length}</p>
                            </div>
                        </div>
                    </div>
            )
        })
        
        
        return (
            <div id="show-content">
                <div id="page-label">
                    <p className="title">Your Recipes</p>
                    <img src={recipesIconSelected} alt="recipes" className="title-icon" />
                </div>
                
                
                <div className="row">
                    {/* <h4>Results</h4> */}
                    {array !== 0 ? <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })} 
                    </div> : <div></div>}
                    {/* <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })} 
                    </div>  */}
                </div>
            </div>
        )
    }
}