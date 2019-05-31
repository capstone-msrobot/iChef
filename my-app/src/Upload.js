import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import add from "./img/addIcon.png";
import upload from "./img/uploadIcon.png";
import "./Upload.css"

export default class Upload extends React.Component {
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
            <div>
                <Navigation />
                <div id="title">
                    <p className="title-upload">Your Recipes</p>
                </div>

                <div id="upload-content">
                    <div className="row">
                        <div className="col-md-5">
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
                        <div className="col-md-5">
                            <div id="cooking-time" className="form-group">
                                <label>Cooking Time *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="cookingTime"
                                    placeholder="ex: 25"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} /> 
                                    <p id="min-label">Minutes</p>
                        </div>
                        </div>
                        <div className="col-md-5">
                            <div id="ingredients-input" className="form-group">
                                <label>Ingredients *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="ingredientsInput"
                                    placeholder="ex: 2 tablespoons of butter"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                                {/* <img src={add} alt="add" /> */}
                            </div>

                            <img src={upload} alt="upload" /> Upload Background Photo *
                        </div>
                        <div className="col-md-5">
                            <div id="equipment-input" className="form-group">
                                <label>Equipment *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="equipmentInput"
                                    placeholder="ex: 1 pot"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                                {/* <img src={add} alt="add" /> */}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div id="steps" className="form-group">
                                <label>Steps*</label>
                                {/* <text area type="recipeName"
                        className="form-control"
                        id="recipeName"
                        placeholder="ex: 1 pot"
                        name="recipeName"
                        value={null}
                        onInput={(event) => { this.handleChange(event) }} />
                    <img src={add} alt="add" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}