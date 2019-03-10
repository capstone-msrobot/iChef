import React from "react";
import pasta from './img/pasta.jpg';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./ShowRecipe.css"

export default class ShowRecipe extends React.Component {
    render() {
    
        //img/recipe:https://www.thechunkychef.com/one-pot-chicken-parmesan-pasta/

        return (
            <div>
                <Navigation />
                <div id="basic-info">
                    <div id="showRecipe-image">
                        <img className="img-fluid" src={pasta} alt="food picture"/>
                    </div>
                    <div id="showRecipe-info" className="col-md-3">
                        <div className="card">
                            <div className="card-body" id="showRecipe-card-body">
                                <h5 className="showRecipe-card-title">One Pot Chicken Parmesan Pasta</h5>
                                <div className="row">
                                    <p className="col-sm-4" id="card-text-1">28 <br /> Minutes</p>
                                    <p className="col-sm-4" id="card-text">3 <br /> Equipments</p>
                                    <p className="col-sm-4" id="card-text">5 <br /> Ingredients</p>
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
                                <li>2-3 boneless skinless chicken breasts, diced into bite sized pieces</li>
                                <li>1 tsp Italian seasoning</li>
                                <li>1/2 tsp garlic powder</li>
                                <li>1 medium yellow onion, minced</li>
                                <li>1/2 tsp garlic powder</li>
                                <li>1/2 tsp garlic powder</li>
                                <li>1/2 tsp garlic powder</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Directions</h3>
                        <ol id="customlist">
                            
                            <li>To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, 
                                Italian seasoning and garlic powder.
                                Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.</li>
                            <li>Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, 
                                fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.</li>
                            <li>Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.</li>
                            <li>Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.</li>
                            <li>Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil.</li>
                        </ol>
                    </div>
                </div>
             
                <Footer />
            </div>
        );
    }
}