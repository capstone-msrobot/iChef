import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./Results.css"
import firebase from 'firebase/app';
import 'firebase/database';
import algoliasearch from 'algoliasearch'
import id from './algoliaConfig'
import config from './algoliaConfigVal'
// import index from 'algoliaConfig/index'
const client = algoliasearch(id, config);
const index = client.initIndex('contacts');

export default class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:[],
            filter: [],
            oldResult: [],
            result2:[],
            clicked: false
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

        // for (let i = 0; i < this.state.result.length; i++) {
        //     for (let m = 0; m < this.state.result[i]; m++) {
        //         for (let j = 0; j < this.state.result[i].recipe[m].equipment.length; j++) {
        //             for (let k = 0; k < value.length; k++) {
        //                 if (!this.state.result[i].recipe[m].equipmentList.includes(value[k].toLowerCase())) {
        //                     this.setState({
        //                         result: this.state.result.recipe.slice(m,m)
        //                     })
        //                     console.log(value[k])
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
        var filtering = 'equipmentList:' + value[0].toLowerCase();
        for (let i = 1; i < value.length; i++) {
            filtering = filtering + ' AND equipmentList' + value[i].toLowerCase();
        }
        // console.log(filtering)
        index.search({
            facetFilters: [
                filtering,
                this.state.filter
            ]
          }).then(res => {
                console.log(this.state.filter)
                console.log(res.hits);
                this.setState({
                    result2: res.hits,
                    filter: this.state.filter === "" ? filtering : this.state.filter + " AND " + filtering
                })
        });
    }

    handleIngredientsFilter = (value) => {
        this.setState({filter: value, result: this.state.oldResult})

        // for (let i = 0; i < this.state.result.length; i++) {
        //     for (let m = 0; m < this.state.result[i]; m++) {
        //         for (let j = 0; j < this.state.result[i].recipe[m].ingredients.length; j++) {
        //             for (let k = 0; k < value.length; k++) {
        //                 if (!this.state.result[i].recipe[m].ingredientsList.includes(value[k].toLowerCase())) {
        //                     this.setState({
        //                         result: this.state.result.recipe.slice(m,m)
        //                     })
        //                     console.log(value[k])
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
        var filtering = 'ingredientsList:' + value[0].toLowerCase();
        for (let i = 1; i < value.length; i++) {
            filtering = filtering + ' AND ' + "ingredientsList" + value[i].toLowerCase();
        }
        index.search({
            facetFilters: [
                filtering,
                this.state.filter
            ]
          }).then(res => {
            console.log(res.hits);
            this.setState({
                result2: res.hits,
                filter: this.state.filter == "" ? filtering : this.state.filter + " AND " + filtering
            })
        });
    }

    componentDidMount() {
        // let arr = [];
        let arr2 = [];
        // var query = firebase.database().ref("recipes").orderByKey();
        // query.once("value")
        // .then(function(snapshot) {
        //     snapshot.forEach(function(childSnapshot) {
        //         arr.push(childSnapshot.val());
        //     });
        // }).then(()=>{
        //     this.setState({
        //         result: arr,
        //         oldResult: arr
        //     })
        // });

        var query2 = firebase.database().ref("recipesFinal").orderByKey();
        query2.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                arr2.push(childSnapshot.val());
            });
        }).then(()=>{
            this.setState({
                result2: arr2,
            })
        });
    }

    render() {
        /* import each recipe, name, image src, equipment, and ingredients from firebase - parse through equipment and ingredients, etc. to save as separate item into an array*/
        let recipes = this.state.result;
        let recipes2 = this.state.result2;
        console.log(this.state.result2);
        console.log(this.state.result);
        let array = recipes2.map((d, i) => {
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
    //     let array = recipes.map((recipes) => {
    //         return (recipes.map((d, i) => {
    //         return  (
    //             <div id="recipe" className="col-md-3" key={i}>
    //                 <div className="card results-card" onClick={()=> this.ShowRecipe(d)}>
    //                     <div className="card-body" id="results-card-body">
    //                         <div className="card-img-top recipe-image">
    //                             <img className={"img-fluid card-img-top results-card-image"} src={d.imageURL} alt="food" />
    //                         </div>

    //                         {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

    //                         <h5 className="results-card-title">{d.name}</h5>
    //                         {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //                         <p className="card-text" id="card-text">{d.time} Minutes</p>
    //                         <p className="card-text" id="card-text">{d.equipment.length} Equipment</p>
    //                         <p className="card-text" id="card-text">{d.ingredients.length} Ingredients</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }))
    // })

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
                            <a href="/Results">Reset</a>
                        </div>
                    </div>:<div></div>} */}
                    {/* Have to Fix */}
                    <div id="filter-options">
                        <Equipments array={recipes} filter={this.handleEquipmentFilter}/>
                        <Ingredients array={recipes} filter={this.handleIngredientsFilter}/>
                        
                        <div id="reset" onClick={()=> this.setState({clicked: true})}> 
                            <a href="/Results">Reset</a>
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
            list = ["Chicken", "Beef", "Pork", "Cilantro", "Basil", "Lemon", "Garlic", "Flour", "Butter", "Sugar", "Eggs", "Salt", "Pepper", "Beans", "Avocados", "Bacon", "Sour Cream"]
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
            <div id="checkBoxes" className="post_options col-md-4">
                {item.map((checkBox, i) => {
                    return checkBox
                })} 
                <div id="filter-done-button" onClick={()=> this.done()}> Done </div>
            </div>
        );
    }
}