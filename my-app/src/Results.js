import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Results.css"

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.location.state.search
        }
    }
    
    ShowRecipe = () => {
        this.props.history.push({pathname: '/ShowRecipe'});
    };

    ReLoad = () => {
        this.props.history.push({
            pathname: "/Results", // should be queried to correct recipe page
            state:{
                search: this.state.search
            }
        })
    }

    render() {
        /* import each recipe, name, image src, equipment, and ingredients from firebase - parse through equipment and ingredients, etc. to save as separate item into an array*/
        let recipes = [{ imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
            time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
            steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
            "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
            "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
            "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
            "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] },
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
            time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
            steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
            "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
            "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
            "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
            "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] },
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
            time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
            steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
            "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
            "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
            "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
            "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] }, 
            { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
            time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
            steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
            "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
            "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
            "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
            "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] }]

        let array = recipes.map((d, i) => {
            return  (
                <div id="recipe" className="col-md-3" key={i}>
                    <div className="card results-card" onClick={()=> this.ShowRecipe()}>
                        <div className="card-body" id="results-card-body">
                            <div className="card-img-top recipe-image">
                                <img className={"img-fluid card-img-top results-card-image"} src={d.imageSrc} alt="food" />
                            </div>

                            {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                            <h5 className="results-card-title">{d.name}</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p className="card-text" id="card-text">{d.time} Minutes</p>
                            <p className="card-text" id="card-text">{d.equipments.length} Equipment</p>
                            <p className="card-text" id="card-text">{d.ingredients.length} Ingredients</p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Navigation />
                <div id="search-filter">
                    <div id="searchBox-results">
                        <input id="search-results" type="text" placeholder={this.state.search} onInput={evt=>this.setState({search: evt.target.value})}/>
                        <div id="buttonSearch-results" onClick={()=> this.ReLoad()}>
                            <a className="searchIcon-results" href="./Results"><i className="fas fa-search"></i></a>
                        {/* ^No filters but should link to all of the results again */}
                        </div>
                    </div>

                    <div id="filter-options">
                        <Equipments array={recipes} />
                        <Ingredients array={recipes} />
                        
                        <div id="reset" onClick={()=> this.setState({clicked: true})}> 
                            <a href="/Results">RESET</a>
                        </div>
                    </div>
                </div>
            
                <div id="results">
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

export class Equipments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blur: false,
            ingredientOpen: false,
            equipmentOpen: false
        }
        this.preview = this.preview.bind(this);
    }

    preview = () => {
        if (!this.state.blur) { // if its not blurry then make it blurry - blur = true after
            document.getElementById("results").style.filter = "blur(5px)";
        } else {
            document.getElementById("results").style.filter = "blur(0px)";
        }

        this.setState({ 
            blur : !this.state.blur,
            equipmentOpen: !this.state.equipmentOpen }, () => {
            console.log(this.state.equipmentOpen, 'dealersOverallTotal1');
        }); 
    }
          
    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Equipments <i className="fas fa-plus-circle"></i></span>
                { this.state.blur ? <FilterOpen blur={this.state.blur} ingredientOpen={this.state.ingredientOpen} equipmentOpen={this.state.equipmentOpen} /> : null }
            </div>
        );
    }
}


export class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blur : false,
            ingredientOpen: false,
            equipmentOpen: false
        }
        this.preview = this.preview.bind(this);
    }

    preview = () => {
        if (!this.state.blur) {
            document.getElementById("results").style.filter = "blur(5px)";
        } else {
            document.getElementById("results").style.filter = "blur(0px)";
        }

        this.setState({ 
            blur : !this.state.blur,
            ingredientOpen: !this.state.ingredientOpen
        }) 
    }
          
    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Ingredients <i className="fas fa-plus-circle"></i></span>
                { this.state.blur ? <FilterOpen blur={this.state.blur} ingredientOpen={this.state.ingredientOpen} equipmentOpen={this.state.equipmentOpen} /> : null }
            </div>
        );
    }
}

export class FilterOpen extends React.Component {
    constructor(props) {
        super(props);
        this.done = this.done.bind(this);
    }

    done = () => {
        if (this.props.blur) {
            document.getElementById("checkBoxes").style.display = "none";
            document.getElementById("results").style.filter = "blur(0px)";
        }
    }
    
    render() {
        // GET FROM JSON LIST WE CREATE!!!! or should we create it and add by looping through all the recipe equipments and adding it into an array??
        let list = []
        if (this.props.ingredientOpen) {
            list = ["Chicken", "Pasta", "Cilantro", "Lemon", "Garlic"]
        } else if (this.props.equipmentOpen) {
            list = ["Pan", "Pot", "Blender", "Fryer", "Grinder"]
        }
      
        let item = list.map((d, i) => {
            return (
                <div className="form-check" id="checkBox" key={i}>
                    <input className="form-check-input" type="checkbox" value="" id={"defaultCheck" + i} />
                    <label className="form-check-label" htmlFor={"defaultCheck" + i}>
                        {d}
                    </label>
                </div>
            )
        })

        // let final;
        // if (!this.props.ingredientOpen && !this.props.equipmentOpen) {
        //     final = (
        //         <div id="checkBoxes" className="post_options">
        //             {item.map((checkBox, i) => {
        //                 return checkBox
        //             })} 
        //             <div id="filter-done-button" onClick={()=> this.done()}> DONE </div>
        //         </div>
        //     )
        // } 
        // console.log(final)
        return (
            <div id="checkBoxes" className="post_options" onClick={()=> this.done()}>
                {item.map((checkBox, i) => {
                    return checkBox
                })} 
                <div id="filter-done-button" onClick={()=> this.done()}> DONE </div>
            </div>
        );
    }
}