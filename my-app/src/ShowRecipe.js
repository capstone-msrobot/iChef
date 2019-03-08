import React from "react";
import Pasta from './img/pasta.jpg';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./ShowRecipe.css"

export default class ShowRecipe extends React.Component {
    render() {
        // var divStyle = {
        //     textAlign: "center"
        //   };
        // var divStyle2 = {
        // textAlign: "left"
        // };
        // var divStyle3 = {
        //     margin: "auto",
        //     width: "50%"
        // };
        //img/recipe:https://www.thechunkychef.com/one-pot-chicken-parmesan-pasta/

        return (
            <div>
                <Navigation />
                <div id="title">
                    <h2>One Pot Chicken Parmesan Pasta</h2>
                    <div id="title-img">
                        <img id="img-food" src={Pasta} alt="pasta"/> 
                    </div>
                </div>
                {/* <div className="card m-4">
                    <div className="container" style={divStyle}>
                        <h5>One Pot Chicken Parmesan Pasta</h5>
                        <img class="w-25 h-50 pr-2" src={Pasta} alt="pasta"/> 
                        <p>estimated time: 30min</p>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h6>Ingredients</h6>
                                    <ul style={divStyle3}>
                                        <div style={divStyle2}>
                                            <li>2-3 boneless skinless chicken breasts, diced into bite sized pieces</li>
                                            <li>1 tsp Italian seasoning</li>
                                            <li>1/2 tsp garlic powder</li>
                                            <li>1 medium yellow onion, minced</li>
                                            <li>1/2 tsp garlic powder</li>
                                            <li>1/2 tsp garlic powder</li>
                                            <li>1/2 tsp garlic powder</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className="col-8">
                                    <h6>Procedures</h6>
                                    <ol style={divStyle3}>
                                        <div style={divStyle2}>
                                            <li>To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, 
                                                Italian seasoning and garlic powder.  
                                                Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.</li>
                                            <li>Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, 
                                                fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.</li>
                                            <li>Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.</li>
                                            <li>Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.</li>
                                            <li>Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil.</li>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
                <Footer />
            </div>
        );
    }
}