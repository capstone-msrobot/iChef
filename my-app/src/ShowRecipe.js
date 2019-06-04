import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./ShowRecipe.css"
// import firebase from 'firebase/app';
import "firebase/storage"
import { PassThrough } from "stream";
export default class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
            recipeURL: "",
            strikeThrough: true
        }
    }

    componentDidMount() {
        let arr = []
        arr.push(this.props.location.state.recipe)
        this.setState({
            recipe: arr
        })
    }

    strike(event) {
        // this.setState({
        //     strikeThrough: !this.state.strikeThrough
        // })

        if (this.state.strikeThrough == true) {
            this.setState({
                strikeThrough: false
            });

            event.target.style.textDecoration = "line-through";
            event.target.style.color = "#A6A4A4";
        } else {
            this.setState({
                strikeThrough: true
            });

            event.target.style.textDecoration = "none";
            event.target.style.color = "black";
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <div id="basic-info">
                        <div id="showRecipe-image" className="col">
                            <img className="img-fluid" id="recipe-image" src={this.props.location.state.recipe.imageURL} alt="food" />
                        </div>
                        <div id="showRecipe-info" className="col">
                            <div className="card" id="show-card">
                                <div className="card-body" id="showRecipe-card-body">
                                    <h5 className="showRecipe-card-title">{this.props.location.state.recipe.name}</h5>
                                    <div id="card-row">
                                        <p id="card-text-1">Minutes<br /> {this.props.location.state.recipe.time}</p>
                                        <p id="show-card-text">Equipment<br /> {this.props.location.state.recipe.equipment.length}</p>
                                        <p id="show-card-text">Ingredients<br /> {this.props.location.state.recipe.ingredients.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="showRecipe-content">
                    <div className="col">
                        <div id="instructions-div">
                            <p id="instructions-strike">Click on any ingredient, equipment, and step to strike through your process.</p>
                            <p id="instructions-strike2"> Double click for initial strike out.</p>
                        </div>
                        <h3 id="ingred-list">Ingredients</h3>
                        <ul>
                            {this.props.location.state.recipe.ingredients.map((ingredient, i) => {
                                return <li onClick={(event) => { this.strike(event) }} key={i}>{ingredient}</li>
                                // }

                            })}
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Equipment</h3>
                        <ul>
                            {this.props.location.state.recipe.equipment.map((equipment, i) => {
                                return (
                                    <li onClick={(event) => { this.strike(event) }} key={i}>{equipment}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Directions</h3>
                        <ol id="customlist">
                            {this.props.location.state.recipe.steps.map((step, i) => {
                                // console.log(this.props.location.state.recipe.stepsURL[i + 1])
                                return (
                                    <div>

                                        {(this.props.location.state.recipe.stepsURL !== "" && this.props.location.state.recipe.stepsURL[i + 1] !== undefined || this.props.location.state.recipe.stepsURL[i + 1] !== "" ? <div><img src={this.props.location.state.recipe.stepsURL[i + 1]}></img></div> : "bye")}
                                        {/* {this.props.location.state.recipe.stepsURL !== "" && this.props.location.state.recipes.stepsURL[i + 1] !== undefined || this.props.location.state.recipes.stepsURL[i + 1] !== "" ? <img src={this.props.location.state.recipes.stepsURL[i + 1]} alt="steps" height="42" width="42"></img>:""} */}
                                        <div>
                                            <ol>
                                                <li onClick={(event) => { this.strike(event) }} key={i}>{step}</li>
                                            </ol>
                                        </div>
                                    </div>
                                )
                            })}
                        </ol>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}