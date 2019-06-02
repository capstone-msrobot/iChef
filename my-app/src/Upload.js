import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import add from "./img/addIcon.png";
import upload from "./img/uploadIcon.png";
import "./Upload.css";
import firebase from 'firebase';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            email: '',
            subEmail: '',
            username: '',
            recipeName: '',

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
                            username: settings.username,
                        })
                    }

                })
            }
        })
    }

    addRecipe() {
        let subEmail = this.state.email.substr(0, this.state.email.indexOf('@'));
        let reference = firebase.database().ref('users' + this.subEmail + '/Recipes');
        let newData = {
            Author: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                recipes: null,
                equipment: null,
                ingredients: null,
            }
        }
        reference.child(subEmail).set(newData)
    }

    handleChange(event) {
        //         console.log(event);
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        // console.log(field);
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    render() {
        return (
            <div id="upload-content">
                <Navigation />
                <div id="title">
                    <p className="title-upload">Your Recipes</p>
                </div>

                <div id="upload-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="recipe-name" className="form-group">
                                <label>Recipe Name *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="recipeName"
                                    placeholder="ex: Blueberry Pancake"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="cooking-time" className="form-group">
                                <label>Cooking Time (Minutes) *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="cookingTime"
                                    placeholder="ex: 25"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />

                            </div>
                        </div>
                        <div id="upload-button" className="col-md-6">
                            <img src={upload} id="upload-image" alt="upload" /> Upload Photo *
                        </div>
                    </div>
                    <div>
                        <label>Equipment *</label>
                        <div id="equipment-input" className="form-group">

                            <input type="recipeName"
                                className="form-control"
                                id="equipmentInput"
                                placeholder="ex: 1 pot"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>
                    <div>
                        <label>Ingredients *</label>
                        <div id="ingredients-input" className="form-group">
                            <input type="recipeName"
                                className="form-control"
                                id="ingredientsInput"
                                placeholder="ex: 2 tablespoons of butter"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>
                    <div>
                        <label>Steps*</label>
                        <div id="steps" className="form-group">
                            <text area type="recipeName"
                                className="form-control"
                                id="stepsInput"
                                placeholder="Pour 250mL water into the pot"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>

                </div>
                {/* <div id="save" onClick={() => {
                    this.addRecipe();
                }}>
                    <Link to={ROUTES.Explore}>Upload Recipe</Link>
                </div> */}

                <Footer />
            </div>
        )
    }
}