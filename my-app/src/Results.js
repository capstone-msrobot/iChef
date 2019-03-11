import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Results.css"
import snacks2 from "./img/homeCover.jpg"
import snacks from "./img/pasta.jpg"

export default class Results extends React.Component {
    ShowRecipe = () => {
        this.props.history.push('/ShowRecipe');
    };

    render() {

        /* import each recipe, title, image src, equipment, and ingredients from firebase */
        let recipes = [{ imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", title: "One Pot Chicken Parmesan Pasta", equipment: "Pan, Pot, Blender", ingredients: "pasta, sauce, tomatoes" }, 
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", title: "One Pot Chicken Parmesan Pasta", equipment: "Pan, Pot, Blender", ingredients: "pasta, sauce, tomatoes" },
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", title: "One Pot Chicken Parmesan Pasta", equipment: "Pan, Pot, Blender", ingredients: "pasta, sauce, tomatoes" },
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", title: "One Pot Chicken Parmesan Pasta", equipment: "Pan, Pot, Blender", ingredients: "pasta, sauce, tomatoes" }]

	
        let array = recipes.map((d, i) => {
            return  (
                <div id="recipe" className="col-md-3">
                    <div className="card" onClick={()=> this.ShowRecipe()}></div>
                    <div className="card-body" id="results-card-body">
                        <div className="card-img-top recipe-image">
                            <img className={"img-fluid card-img-top results-card-image"} src={d.imageSrc} alt="food picture" />
                        </div>

                        <h5 className="results-card-title">{d.title}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text" id="card-text">{d.equipment.length} Equipment</p>
                        <p className="card-text" id="card-text">{d.ingredients.length} Ingredients</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Navigation />

                <div id="search-filter">
                    <div id="searchBox-results">
                        <input id="search-results" type="text" placeholder="/////SHOW WHATEVER USER TYPED" onInput={evt=>this.setState({search:evt.target.value})}/>
                        <div id="buttonSearch-results" onClick={()=>this.setState({clicked: true})}> 
                            <a className="searchIcon-results" href="./Results"><i className="fas fa-search"></i></a>
                        {/* ^No filters but should link to all of the results again */}
                        </div>
                    </div>

                    <div id="filter-options">
                        <div id="filter-equipment">
                            By Equipment
                        </div>
                        <div id="filter-ingredients">
                            By Ingredients
                        </div>
                        <div id="reset" onClick={()=>this.setState({clicked: true})}> 
                            <a href="/Results">RESET</a>
                        </div>
                    </div>
                </div>
            
                 <div className="results">
                    <h4>Results</h4>
                    <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })} 
                    </div> 
                </div>
                
                <Footer />
            </div>
        );
    }
}
