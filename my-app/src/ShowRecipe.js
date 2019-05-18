import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./ShowRecipe.css"

export default class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: []
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
                            <h3>Ingredients</h3>
                            <ul>
                                {this.props.location.state.recipe.ingredients.map((ingredient, i) => {
                                    // console.log(ingredient)
                                    // if (regex.test(ingredient)) {
                                    //     // word = ingredient.split(" ")
                                    //     // sentence = ""
                                    //     // for (var i = 0; i < words.length - 1; i++) {
                                    //     //     if (regex.test(word)) {
                                                
                                    //     //     }

                                    //     // }
                                    //     // console.log("regex - " + ingredient)
                                    //     return <li className="number-in-ingredient"><b>{ingredient}</b></li>
                                    // } else {
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
                                    return (
                                        <li key={i}>{step}</li>
                                    )
                                })} 
                            </ol>
                        </div>
                    </div>

                <Footer />
            </div>
        )
    }
//     render() {
//         {console.log(this.props.location.state.recipe)}
    
//         //img/recipe:https://www.thechunkychef.com/one-pot-chicken-parmesan-pasta/

//         /* import everything */
//         let recipes = this.state.recipe
//         console.log(recipes)
//         // let recipes = [{ imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
//         //     time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
//         //     steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
//         //         "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
//         //         "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
//         //         "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
//         //         "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] }]

	
//         let array = recipes.map((d, i) => {
//             // let regex = /\d/g;
                
//             return  (
//                 <div id="body" key={i}>
//                     <div id="basic-info">
//                         <div id="showRecipe-image" className="col">
//                             <img className="img-fluid" id="recipe-image" src={d.imageSrc} alt="food"/>
//                         </div>
//                         <div id="showRecipe-info" className="col">
//                             <div className="card" id="show-card">
//                                 <div className="card-body" id="showRecipe-card-body">
//                                     <h5 className="showRecipe-card-title">{d.name}</h5>
//                                     <div className="row">
//                                         <p className="col-sm-4" id="card-text-1">{d.time} <br /> Minutes</p>
//                                         <p className="col-sm-4" id="show-card-text">{d.equipment.length} <br /> Equipments</p>
//                                         <p className="col-sm-4" id="show-card-text">{d.ingredients.length} <br /> Ingredients</p>
//                                     </div>
//                                 </div>
//                             </div>  
//                         </div>
//                     </div>

//                     <hr />

                //     <div id="showRecipe-content">
                //         <div className="col">
                //             <h3>Ingredients</h3>
                //             <ul>
                //                 {d.ingredients.map((ingredient, i) => {
                //                     // console.log(ingredient)
                //                     // if (regex.test(ingredient)) {
                //                     //     // word = ingredient.split(" ")
                //                     //     // sentence = ""
                //                     //     // for (var i = 0; i < words.length - 1; i++) {
                //                     //     //     if (regex.test(word)) {
                                                
                //                     //     //     }

                //                     //     // }
                //                     //     // console.log("regex - " + ingredient)
                //                     //     return <li className="number-in-ingredient"><b>{ingredient}</b></li>
                //                     // } else {
                //                         return <li key={i}>{ingredient}</li>
                //                     // }
                                
                //                 })} 
                //             </ul>
                //         </div>
                //         <div className="col">
                //             <h3>Equipment</h3>
                //             <ul>
                //                 {d.equipments.map((equipment, i) => {
                //                     return (
                //                         <li key={i}>{equipment}</li>
                //                     )
                //                 })} 
                //             </ul>
                //         </div>
                //         <div className="col">
                //             <h3>Directions</h3>
                //             <ol id="customlist">
                //                 {d.steps.map((step, i) => {
                //                     return (
                //                         <li key={i}>{step}</li>
                //                     )
                //                 })} 
                //             </ol>
                //         </div>
                //     </div>
                // </div>
//             )
//         })

//         return (
//             <div>
//                 <Navigation />
//                 {array.map((recipe, i) => {
//                     return recipe
//                 })} 
//                 <Footer />
//             </div>
//         );
//     }
}