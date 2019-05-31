import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import time from "./img/timeIcon.png";
import equipment from "./img/equipmentIcon.png";
import ingredients from "./img/ingredientIcon.png";
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            clicked: false
        }
    }

    // https://stackoverflow.com/questions/39847360/how-to-pass-state-props-when-redirecting-to-another-route-in-react
    ShowResults = () => {
        this.props.history.push({
            pathname: "/Results", //linked to correct recipes
            state:{
                search: this.state.search
            }
        })
    }
    render() {
        return (
            <div>
                <div id="image" className="img-fluid" alt ="home cover"> 
                    <Navigation />

                    <div id="searchBox">
                    <form className="d-flex" onSubmit={()=>this.state.search.length > 0 ? this.ShowResults(): this.props.history.push({pathname: "Explore"})}>
                        <input id="search" type="text" placeholder="Search for a Recipe..." onInput={evt=>this.setState({search:evt.target.value})}/>
                        <button id="buttonSearch" className="searchIcon"><i className="fas fa-search"></i></button>
                    </form>

                    </div>

                    <div id="featureBoxes" className="row">
                        <div id="time-feature" className="col-md-3">
                            <div className="card home-card">
                                <div className="card-body">
                                    <div className="feature-icon-image">
                                        <img className="img-fluid feature-icon" src={time} alt="equipment icon" />
                                    </div>
                                    <h5 className="card-title">Fast Recipes</h5>
                                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p className="card-text home-card-text">All our recipes take 30 minutes or less to cook</p>
                                </div>
                            </div>  
                        </div>

                        <div id="equipment-feature" className="col-md-3">
                            <div className="card home-card">
                                <div className="card-body">
                                    <div className="feature-icon-image">
                                        <img className="img-fluid feature-icon" src={equipment} alt="equipment icon" />
                                    </div>
                                    <h5 className="card-title">Choose Your Equipment</h5>
                                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p className="card-text home-card-text">Choose a recipe with equipment that you have</p>
                                </div>
                            </div>
                        </div>

                        <div id="ingredients-feature" className="col-md-3">
                            <div className="card home-card">
                                <div className="card-body">
                                    <div className="feature-icon-image">
                                        <img className="img-fluid feature-icon" src={ingredients} alt="equipment icon" />
                                    </div>
                                    <h5 className="card-title">Filter Through Ingredients</h5>
                                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p className="card-text home-card-text">Make a dish with ingredients you have at home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>   
        );
    }
}
