import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Results.css"
import firebase from 'firebase/app';
import 'firebase/database';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.location.state.search,
            result:[],
            filter: [],
            oldResult: []
        }
    }
    
    ShowRecipe = (d) => {
        this.props.history.push({pathname: '/ShowRecipe', state:{recipe: d}});
    };

    ReLoad = () => {
        this.props.history.push({
            pathname: "/Results", // should be queried to correct recipe page
            state:{
                search: this.state.search
            }
        })
    }

    handleEquipmentFilter = (value) => {
        this.setState({filter: value, result: this.state.oldResult})

        for (let i = 0; i < this.state.result.length; i++) {
            for (let j = 0; j < this.state.result[i].equipmentList.length; j++) {
                for (let k = 0; k < value.length; k++) {
                    if (!this.state.result[i].equipmentList.includes(value[k].toLowerCase())) {
                        this.setState({
                            result: this.state.result.slice(i,i)
                        })
                        console.log(value[k])
                        break;
                    }
                }
            }
        }
    }

    handleIngredientsFilter = (value) => {
        this.setState({filter: value, result: this.state.oldResult})

        for (let i = 0; i < this.state.result.length; i++) {
            for (let j = 0; j < this.state.result[i].ingredientsList.length; j++) {
                for (let k = 0; k < value.length; k++) {
                    if (!this.state.result[i].ingredientsList.includes(value[k].toLowerCase())) {
                        this.setState({
                            result: this.state.result.slice(i,i)
                        })
                        console.log(value[k])
                        break;
                    }
                }
            }
        }
    }

    componentDidMount() {
        let name = (this.props.location.state.search).toLowerCase();
        let arr = [];
        var food = firebase.database().ref(name+"/");
        food.on("child_added", (data, prevChildKey) => {
            arr.push(data.val());
            this.setState({
                result: arr,
                oldResult: arr
            })
        })
    }

    render() {
        {console.log(this.state.filter)}
        /* import each recipe, name, image src, equipment, and ingredients from firebase - parse through equipment and ingredients, etc. to save as separate item into an array*/
        let recipes = this.state.result;
        // let recipes = [{ imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
        //     time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
        //     steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
        //     "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
        //     "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
        //     "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
        //     "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] },
        //     { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
        //     time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
        //     steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
        //     "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
        //     "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
        //     "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
        //     "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] },
        //     { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
        //     time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
        //     steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
        //     "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
        //     "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
        //     "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
        //     "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] }, 
        //     { imageSrc: "https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-2.jpg", name: "One Pot Chicken Parmesan Pasta", 
        //     time: "28", equipments: ["Pan", "Pot", "Blender"], ingredients: ["2-3 boneless skinless chicken breasts", "1 tsp Italian seasoning", "1/2 tsp garlic powder", "1 medium yellow onion, minced"], 
        //     steps: ["To a large pot or skillet (I used my dutch oven), add a drizzle of olive oil and heat over MED-HIGH heat.  Add chicken, season with salt, pepper, Italian seasoning and garlic powder. Cook about 5 minutes, until chicken is most of the way cooked through.  Remove to a plate.",
        //     "Add onion and garlic to the pot and cook about 2-3 minutes, until soft.  Pour in marinara sauce, fill up empty sauce jar with water and add to the pot.  Bring to a boil, then reduce to a strong simmer.",
        //     "Add chicken and pasta, stir, then cover and cook for 10-15 minutes, until pasta is cooked to your liking.  Stir in parmesan cheese and 1/4 cup of the mozzarella cheese.",
        //     "Sprinkle remaining 3/4 cup mozzarella cheese on top of the dish and cook another 2-3 minutes, until cheese is melted and gooey.",
        //     "Sprinkle with additional Italian seasoning if desired, and garnish with parsley or basil."] }]

        let array = recipes.map((d, i) => {
            return  (
                <div id="recipe" className="col-md-3" key={i}>
                    <div className="card results-card" onClick={()=> this.ShowRecipe(d)}>
                        <div className="card-body" id="results-card-body">
                            <div className="card-img-top recipe-image">
                                <img className={"img-fluid card-img-top results-card-image"} src={d.imageURL} alt="food" />
                            </div>

                            {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                            <h5 className="results-card-title">{d.name}</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p className="card-text" id="card-text">{d.time} Minutes</p>
                            <p className="card-text" id="card-text">{d.equipment.length} Equipment</p>
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
                    {/* {this.state.result.length != 0 ? <div id="filter-options">
                        <Equipments array={recipes} filter={this.handleFilter}/>
                        <Ingredients array={recipes} />
                        
                        <div id="reset" onClick={()=> this.setState({clicked: true})}> 
                            <a href="/Results">RESET</a>
                        </div>
                    </div>:<div></div>} */}
                    {/* Have to Fix */}
                    <div id="filter-options">
                        <Equipments array={recipes} filter={this.handleEquipmentFilter}/>
                        <Ingredients array={recipes} filter={this.handleIngredientsFilter}/>
                        
                        <div id="reset" onClick={()=> this.setState({clicked: true})}> 
                            <a href="/Results">RESET</a>
                        </div>
                    </div>
                </div>
            
                <div id="results">
                    <h4>Results</h4>
                    {array != 0 ? <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })} 
                    </div> : <div>No Result Found</div>}
                    {/* <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })} 
                    </div>  */}
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
            blur : false,
            filter: []
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
            blur : !this.state.blur
        })
    }
          
    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Equipments <i className="fas fa-plus-circle"></i></span>
                { this.state.blur ? <FilterOpen blur={this.state.blur} filter={this.props.filter} ingredientClick={false} equipmentClick={true}/> : null }
            
            </div>
        );
    }
}


export class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blur : false
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
            blur : !this.state.blur
        })
    }
          
    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Ingredients <i className="fas fa-plus-circle"></i></span>
                { this.state.blur ? <FilterOpen blur={this.state.blur} filter={this.props.filter} ingredientClick={true} equipmentClick={false}/> : null }
            
            </div>
        );
    }
}

export class FilterOpen extends React.Component {
    constructor(props) {
        super(props);
        this.done = this.done.bind(this);
        this.state = {
            filter: []
        }
    }

    done = () => {
        if (this.props.blur) {
            document.getElementById("checkBoxes").style.display = "none";
            document.getElementById("results").style.filter = "blur(0px)";
            this.props.filter(this.state.filter)

        }

    }

    filterFunc = (d) => {
        let arr = this.state.filter;
        arr.push(d);
        this.setState({
            filter: arr
        })
    }
    
    render() {
        // GET FROM JSON LIST WE CREATE!!!! or should we create it and add by looping through all the recipe equipments and adding it into an array??
        let list = []
        if (this.props.ingredientClick) {
            list = ["Chicken", "Pasta", "Cilantro", "Lemon", "Garlic"]
        } else if (this.props.equipmentClick) {
            list = ["Pan", "Pot", "Blender", "Fryer", "Grinder"]
        }
        // https://reactjs.org/docs/forms.html <- look at this exmaple to change checkbox's behavior
        let item = list.map((d, i) => {
            return (
                <div className="form-check" id="checkBox" key={i}>
                    <input className="form-check-input" onClick={()=>{this.filterFunc(d)}} type="checkbox" value="" id={"defaultCheck" + i} />
                    <label className="form-check-label" htmlFor={"defaultCheck" + i}>
                        {d}
                    </label>
                </div>
            )
        })
        return (
            <div id="checkBoxes" className="post_options">
                {item.map((checkBox, i) => {
                    return checkBox
                })} 
                <div id="filter-done-button" onClick={()=> this.done()}> DONE </div>
            </div>
        );
    }
}
