import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./ShowRecipe.css"
import firebase from 'firebase/app';
import "firebase/storage"
export default class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
            recipeURL: ""
        }
    }
    componentDidMount() {
        let arr = []
        arr.push(this.props.location.state.recipe)
        this.setState({
            recipe: arr
        })
    }
    render() {
        return(
            <div>
                <Navigation />
                    <div>
                        <div id="basic-info">
                            <div id="showRecipe-image" className="col">
                                <img className="img-fluid" id="recipe-image" src={this.props.location.state.recipe.imageURL} alt="food"/>
                            </div>
                            <div id="showRecipe-info" className="col">
                                <div className="card" id="show-card">
                                    <div className="card-body" id="showRecipe-card-body">
                                        <h5 className="showRecipe-card-title">{this.props.location.state.recipe.name}</h5>
                                        <div className="row">
                                            <p className="col-sm-4" id="card-text-1">{this.props.location.state.recipe.time} <br /> Minutes</p>
                                            <p className="col-sm-4" id="show-card-text">{this.props.location.state.recipe.equipment.length} <br /> Equipments</p>
                                            <p className="col-sm-4" id="show-card-text">{this.props.location.state.recipe.ingredients.length} <br /> Ingredients</p>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                     </div>
                     <hr />
                     <div id="showRecipe-content">
                        <div className="col">
                            <h3>Ingredients</h3>
                            <ul>
                                {this.props.location.state.recipe.ingredients.map((ingredient, i) => {
                                        return <li key={i}>{ingredient}</li>
                                    // }
                                
                                })} 
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Equipment</h3>
                            <ul>
                                {this.props.location.state.recipe.equipment.map((equipment, i) => {
                                    return (
                                        <li key={i}>{equipment}</li>
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
                                                <li key={i}>{step}</li>
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