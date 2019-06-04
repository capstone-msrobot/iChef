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
export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.search,
            result:[],
            filter: "",
            oldResult: [],
            clicked: false,
            equipment: [],
            ingredients: []
        }
    }

    ShowRecipe = (d) => {
        this.props.history.push({ pathname: '/ShowRecipe', state: { recipe: d } });
    };

    ReLoad = () => {
        this.props.history.push({
            pathname: "/Results", // should be queried to correct recipe page
            state: {
                search: this.state.search
            }
        })
    }


    // componentWillMount() {
    //     this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             this.setState({
    //                 email: user.email,
    //                 subEmail: user.email.substr(0, user.email.indexOf('@'))
    //             })

    //             let reference = firebase.database().ref('users/' + this.state.subEmail + '/Equipment');
    //             reference.on('value', (snapshot) => {
    //                 // let settings = snapshot.val();
    //                 let equipment = snapshot.val();
    //                 this.setState({
    //                     equipment: equipment
    //                 })
    //                 if (equipment != null) {
    //                     this.handleEquipmentFilter(equipment);
    //                 }
    //                 console.log("equi", snapshot.val())

    //             })

    //             let reference_ing = firebase.database().ref('users/' + this.state.subEmail + '/Ingredients');
    //             reference_ing.on('value', (snapshot) => {
    //                 // let settings = snapshot.val();
    //                 let ingredients = snapshot.val();
    //                 this.setState({
    //                     ingredients: ingredients
    //                 })
    //                 if (ingredients != null) {
    //                     this.handleIngredientsFilter(ingredients);
    //                 }
    //                 console.log("ing: ",snapshot.val())

    //             })
    //         }
    //     })
    // }

    handleEquipmentFilter = (value) => {
        this.setState({result: this.state.oldResult})
        // let val = this.state.result;
        // let erase = []
        // val.map((recipe, i) => {
        //     for (let j = 0; j < value.length; j++) {
        //         if (!recipe.equipmentList.includes(value[j].toLowerCase())) {
        //             erase.push(i)

        //         }
        //     }
        // })
        // for (let i = erase.length - 1; i >= 0; i--) {
        //     console.log(erase[i])
        //     val.splice(erase[i], 1);
        // }
        // this.setState({
        //     result: val
        // })
        // index.search('harry', {
        //     filters: 'categories:politics AND store:Gibert Joseph Saint-Michel'
        //   });
        var filtering = 'equipmentList:' + value[0].toLowerCase();
        for (let i = 1; i < value.length; i++) {
            filtering = filtering + ' OR equipmentList:' + value[i].toLowerCase();
        }
        // console.log(filtering)
        index.search({
            query: (this.props.location.state.search).toLowerCase(),
            filters: filtering
          }).then(res => {
            this.setState({
                result: res.hits,
                filter: this.state.filter === "" ? filtering : this.state.filter + " OR " + filtering
            })
        });
    }

    handleIngredientsFilter = (value) => {
        this.setState({result: this.state.oldResult})
        // let val = this.state.result;
        // let erase = []
        // val.map((recipe, i) => {
        //     for (let j = 0; j < value.length; j++) {
        //         if (!recipe.ingredientsList.includes(value[j].toLowerCase())) {
        //             // this.state.result.splice(i, 1)
        //             // let arr = this.state.result;
        //             // this.setState({
        //             //     result: arr
        //             // })
        //             erase.push(i)
        //             // console.log(erase)

        //         }
        //     }
        // })
        // for (let i = erase.length - 1; i >= 0; i--) {
        //     console.log(erase[i])
        //     val.splice(erase[i], 1);
        //     // console.log(val)
        //     // console.log(erase)
        // }
        // this.setState({
        //     result: val
        // })
        var filtering = 'ingredientsList:' + value[0].toLowerCase();
        for (let i = 1; i < value.length; i++) {
            filtering = filtering + ' OR ingredientsList' + value[i].toLowerCase();
        }
        index.search({
            query: (this.props.location.state.search).toLowerCase(),
            filters: filtering
          }).then(res => {
            this.setState({
                result: res.hits,
                filter: this.state.filter === "" ? filtering : this.state.filter + " OR " + filtering
            })
        });
    }

    componentDidMount() {
          this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    email: user.email,
                    subEmail: user.email.substr(0, user.email.indexOf('@'))
                })

                let reference = firebase.database().ref('users/' + this.state.subEmail + '/Equipment');
                reference.on('value', (snapshot) => {
                    // let settings = snapshot.val();
                    let equipment = snapshot.val();
                    this.setState({
                        equipment: equipment
                    })
                    if (equipment != null) {
                        this.handleEquipmentFilter(equipment);
                    }
                    console.log("equi", snapshot.val())

                })

                let reference_ing = firebase.database().ref('users/' + this.state.subEmail + '/Ingredients');
                reference_ing.on('value', (snapshot) => {
                    // let settings = snapshot.val();
                    let ingredients = snapshot.val();
                    this.setState({
                        ingredients: ingredients
                    })
                    if (ingredients != null) {
                        this.handleIngredientsFilter(ingredients);
                    }
                    console.log("ing: ",snapshot.val())

                })
            } else {
                let name = (this.props.location.state.search).toLowerCase();
                let arr = [];
                // var food = firebase.database().ref("recipes/"+name);
                // food.on("child_added", (data, prevChildKey) => {
                //     arr.push(data.val());
                //     this.setState({
                //         result: arr,
                //         oldResult: arr
                //     })
                //     console.log(data.val());
                // })
                index.search({
                    query: name,
                    attributesToRetrieve: ['name'],
                    hitsPerPage: 50,
                    },
                    (err, { hits } = {}) => {
                        if (err) throw err;
                        hits.forEach((f) => {
                            var food = firebase.database().ref("recipesFinal");
                            food.on("child_added", (data, prevChildKey) => {
                                if (f.name === data.val().name) {
                                    arr.push(data.val());
                                    this.setState({
                                        result: arr,
                                        oldResult: arr
                                    })
                                }
                            })
                        })
                    }
                );
            }
        })
        // index.search({ query: name }).then(res => {
        //     console.log(res);
        //   });
    }

    render() {
        /* import each recipe, name, image src, equipment, and ingredients from firebase - parse through equipment and ingredients, etc. to save as separate item into an array*/
        let recipes = this.state.result;

        let array = recipes.map((d, i) => {
            return (
                <div id="recipe" className="col-md-3" key={i}>
                    <div className="card results-card" onClick={() => this.ShowRecipe(d)}>
                        <div className="card-body" id="results-card-body">
                            <div className="card-img-top recipe-image">
                                <img className={"img-fluid card-img-top results-card-image"} src={d.imageURL} alt="food" />
                            </div>

                            {/* If clicked without a word in search --> should link back to Explore page with ALL of the recipes showing */}

                            <h5 className="results-card-title">{d.name}</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p className="card-text" id="card-text">Minutes: {d.time}</p>
                            <p className="card-text" id="card-text">Equipment: {d.equipment.length}</p>
                            <p className="card-text" id="card-text">Ingredients: {d.ingredients.length}</p>
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
                        <input id="search-results" type="text" placeholder={this.state.search} onInput={evt => this.setState({ search: evt.target.value })} />
                        <div id="buttonSearch-results" onClick={() => this.ReLoad()}>
                            <a className="searchIcon-results" href="./Results"><i className="fas fa-search"></i></a>
                            {/* ^No filters but should link to all of the results again */}
                        </div>
                    </div>
                    {/* Have to Fix */}
                    <div id="filter-options">
                        <Equipments array={recipes} filter={this.handleEquipmentFilter} />
                        <Ingredients array={recipes} filter={this.handleIngredientsFilter} />

                        <div id="reset" onClick={() => this.setState({ clicked: true })}>
                            <a href="/Results">Reset</a>
                        </div>
                    </div>
                </div>

                <div id="results">
                    <h4>Results</h4>
                    {array !== 0 ? <div className="row">
                        {array.map((recipe, i) => {
                            return recipe
                        })}
                    </div> : <div>No Results Found</div>}
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
            blur: false,
            filter: []
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
            blur: !this.state.blur,
            equipmentOpen: !this.state.equipmentOpen
        }, () => {
            console.log(this.state.equipmentOpen, 'dealersOverallTotal1');
        });
    }

    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Equipments <i className="fas fa-plus-circle"></i></span>
                {this.state.blur ? <FilterOpen blur={this.state.blur} filter={this.props.filter} ingredientClick={false} equipmentClick={true} /> : null}

            </div>
        );
    }
}


export class Ingredients extends React.Component {
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
        if (!this.state.blur) {
            document.getElementById("results").style.filter = "blur(5px)";
        } else {
            document.getElementById("results").style.filter = "blur(0px)";
        }

        this.setState({
            blur: !this.state.blur,
            ingredientOpen: !this.state.ingredientOpen
        })
    }

    render() {
        return (
            <div id="filter-equipment">
                <span onClick={this.preview}>By Ingredients <i className="fas fa-plus-circle"></i></span>
                {this.state.blur ? <FilterOpen blur={this.state.blur} filter={this.props.filter} ingredientClick={true} equipmentClick={false} /> : null}

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
            list = ["Chicken", "Beef", "Pork", "Cilantro", "Basil", "Lemon", "Garlic", "Flour", "Butter", "Sugar", "Eggs", "Salt", "Pepper", "Beans"]
        } else if (this.props.equipmentClick) {
            list = ["Pan", "Pot", "Blender", "Fryer", "Grinder", "Ladle", "Spatula", "Kitchen Shears", "Can Opener", "Corkscrew", "Thermometer"]
        }
        // https://reactjs.org/docs/forms.html <- look at this exmaple to change checkbox's behavior
        let item = list.map((d, i) => {
            return (
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div className="form-check" id="checkBox" key={i}>
                                <input className="form-check-input" onClick={() => { this.filterFunc(d) }} type="checkbox" value="" id={"defaultCheck" + i} />
                                <label className="form-check-label" htmlFor={"defaultCheck" + i}>
                                    {d}
                                </label>
                            </div>
                        </div>
                    </div>
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
            <div id="checkBoxes" className="post_options">
                {item.map((checkBox, i) => {
                    return checkBox
                })}
                <div id="filter-done-button" onClick={() => this.done()}> Done </div>
            </div>
        );
    }
}