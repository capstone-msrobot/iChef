import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Results.css"
import recipe from "./img/test_homeCover.jpg"
import searchIcon from "./img/searchIcon.png";

export default class Results extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                 <div className="results">
                    <div id="searchBox-results">
                        <input id="search-results" type="text" placeholder="//////WHATEVER THE USER TYPED" onInput={evt=>this.setState({search:evt.target.value})}/>
                        <div id="buttonSearch-results" onClick={()=>this.setState({clicked: true})}><img src={searchIcon} alt="search icon" /></div>
                        
                            
                            
                            {/* <div>
                            {this.state.clicked ? <div className="pt-5">
                                <div className="card mt-2" onClick={this.handleClick}>
                                    <div className="container">
                                        <h5>One Pot Chicken Parmesan Pasta</h5>
                                        <p>estimated time: 20min</p>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="container">
                                        <h5>Chicken Noodle Soup</h5>
                                        <p>estimated time: 30min</p>
                                    </div>
                                </div>
                                <div className="card mt-2">
                                    <div className="container">
                                        <h5>Chicken Parmesan</h5>
                                        <p>estimated time: 1h</p>
                                    </div>
                                </div>
                            </div> : <div></div>}
                            </div> */}


                        
                    </div> 
                    <h4>Results</h4>
                       <div className="cards">
                            <div className="card card-recipe" onClick={this.handleClick}>
                                <div className="card-info">
                                    <div className="image">
                                        <img className="img-recipe" src={recipe} alt="recipe" />
                                    </div>
                                    <div id="info">
                                        <h5 className="cardTitle-results">One Pot Chicken Parmesan Pasta</h5>
                                        <p id="ingredients">Ingredients</p>
                                        <p id="time">Estimated time: 20min</p>
                                        <p id="equipment">3 Equipments, asidghiaugougshfoa;fhueiuhf;woeu3 Equipments, asidghiaugougshfoa;fhueiuhf;woeu3 Equipments, asidghiaugougshfoa;fhueiuhf;woeu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-recipe">
                                <div className="card-info">
                                    <div className="image">
                                        <img className="img-recipe" src={recipe} alt="recipe" />
                                    </div>
                                    <div id="info">
                                    <h5 className="cardTitle-results">Chicken Noodle Soup</h5>
                                    <p>estimated time: 30min</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-recipe">
                                <div className="card-info">
                                    <div className="image">
                                        <img className="img-recipe" src={recipe} alt="recipe" />
                                    </div>
                                    <div id="info">
                                        <h5 className="cardTitle-results">Chicken Parmesan</h5>
                                        <p>estimated time: 1h</p>
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
            