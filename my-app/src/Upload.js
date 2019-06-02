import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import add from "./img/addIcon.png";
import upload from "./img/uploadIcon.png";
import "./Upload.css";
import firebase from 'firebase';
import algoliasearch from 'algoliasearch'
import id from './algoliaConfig'
import config from './algoliaAdminConfigVal'
export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn,
            email: '',
            subEmail: '',
            username: '',
            recipeName: '',
            file: [],
            imagePreviewUrl: [],
            downloadURL: [],
            objectKey: ''

        };
    }

    componentWillMount() {
        this.authUnlisten = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    email: user.email,
                    subEmail: user.email.substr(0, user.email.indexOf('@'))
                })

                let reference = firebase.database().ref('users/' + this.state.subEmail + '/Author');
                reference.on('value', (snapshot) => {
                    let settings = snapshot.val();

                    if (settings != null) {
                        this.setState({
                            username: settings.username,
                        })
                    }

                })
            }
        })
    }

    putURLs() {
        // return Promise.resolve().then(() => {
        //     for (var i = 0; i < this.state.file.length; i++) {
        //         var imageFile = this.state.file[i];
        
        //         this.uploadImageAsPromise(imageFile);
        //     }
        // }).then(() => {
        //     console.log(2)
        // })
        return new Promise((resolve, reject) => {
            for (var i = 0; i < this.state.file.length; i++) {
                var imageFile = this.state.file[i];
        
                this.uploadImageAsPromise(imageFile);
            }
            setTimeout(() => {
                resolve("resolved");
            }, 4000)
        })
    }

    _handleSubmit(e) {
        const database = firebase.database();
        e.preventDefault();
        // TODO: do something with -> this.state.file
        // console.log('handle uploading-', this.state.file);
        // for (var i = 0; i < this.state.file.length; i++) {
        //     var imageFile = this.state.file[i];
    
        //     this.uploadImageAsPromise(imageFile);
        // }
        // this.putURLs()
        console.log("clicked");
        console.log("here")
        this.putURLs()
        .then(() => {
            console.log(this.state.downloadURL);
            let keyRef = database.ref('/recipesFinal').push({
                name: this.state.recipeName,
                ingredients: [
                    "4 ounces linguine pasta",
                    "2 boneless, skinless chicken breast halves, sliced into thin strips",
                    "2 teaspoons Cajun seasoning",
                    "2 tablespoons butter",
                    "1 green bell pepper, chopped",
                    "1/2 ed bell pepper, chopped",
                    "4 fresh mushrooms, sliced",
                    "1 green onion, minced",
                    "1 1/2 cups heavy cream",
                    "1/4 teaspoon dried basil",
                    "1/4 teaspoon lemon pepper",
                    "1/4 teaspoon teaspoon salt",
                    "1/8 teaspoon garlic powder",
                    "1/8 teaspoon ground black pepper",
                    "2 tablespoons grated Parmesan cheese"
                ],
                ingredientsList: ["pasta", "chicken", "cajun seasoning", "butter", "green bell pepper", "bell pepper", "mushrooms", "onion", "heavy cream", "basil", "lemon pepper", "salt", "garlic powder", "black pepper", "parmesan cheese"],
                time: "30",
                steps: [
                    "Bring a large pot of lightly salted water to a boil. Add linguini pasta, and cook for 8 to 10 minutes, or until al dente; drain.",
                    "Meanwhile, place chicken and Cajun seasoning in a bowl, and toss to coat.",
                    "In a large skillet over medium heat, saute chicken in butter until no longer pink and juices run clear, about 5 to 7 minutes. Add green and red bell peppers, sliced mushrooms and green onions; cook for 2 to 3 minutes. Reduce heat, and stir in heavy cream. Season the sauce with basil, lemon pepper, salt, garlic powder and ground black pepper, and heat through.",
                    "In a large bowl, toss linguini with sauce. Sprinkle with grated Parmesan cheese."
                ],
                equipment: [
                    "1 pan"
                ],
                equipmentList:["pan"],
                imageURL: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1585&q=80",
                originalURL: "https://www.allrecipes.com/recipe/12009/creamy-cajun-chicken-pasta/?internalSource=hub%20recipe&referringContentType=Search",
                stepsURL: this.state.downloadURL.length == 0 ? '' : this.state.downloadURL
                })
                this.setState({
                    objectKey: keyRef.getKey()
                })

                // let subEmail = this.state.email.substr(0, this.state.email.indexOf('@'));
                // let reference = firebase.database().ref('users' + subEmail + '/Recipes');
                // let newData = {
                //     Author: {
                //         firstName: this.state.firstName,
                //         lastName: this.state.lastName,
                //         username: this.state.username,
                //         email: this.state.email,
                //         password: this.state.password,
                //         recipes: null,
                //         equipment: null,
                //         ingredients: null,
                //     }
                // }
                // reference.push(newData);
        }).then(() => {
            const client = algoliasearch(id, config);
              console.log(this.state.objectKey);
              const index = client.initIndex('contacts');
        
              //const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);
              database.ref('/recipesFinal/' + this.state.objectKey).once('value', recipe => {
                // Build an array of all records to push to Algolia
                // const records = [];
                // recipe.forEach(contact => {
                //   // get the key and data from the snapshot
                //   const childKey = contact.key;
                //   const childData = contact.val();
                //   // We set the Algolia objectID as the Firebase .key
                //   childData.objectID = childKey;
                //   // Add object for indexing
                //   records.push(childData);
                // });
              
                // Add or update new objects
                
                let content = recipe.val();
                content.objectID = this.state.objectKey;
                console.log(recipe.val());
                index.saveObject(content, (err, content) => {
                    console.log(content);
                    console.log(err);
                });
                // index
                //   .saveObjects(recipe)
                //   .then(() => {
                //     console.log('recipe imported into Algolia');
                //   })
                //   .catch(error => {
                //     console.error('Error when importing contact into Algolia', error);
                //     //process.exit(1);
                //   });
              });
        });
        // }
      }
    
    _handleImageChange(e) {
        e.preventDefault();
        let fileList = this.state.file;
        let reader = new FileReader();
        let file = e.target.files[0];
        fileList.push(file);

        reader.onloadend = () => {
            let urls = this.state.imagePreviewUrl;
            urls.push(reader.result);
            this.setState({
                file: fileList,
                imagePreviewUrl: urls
            });
        }

        reader.readAsDataURL(file)
    }

    uploadImageAsPromise(imageFile) {
        let recipeName = this.state.recipeName

        return new Promise((resolve, reject) => {
            var storageRef = firebase.storage().ref(recipeName+"/"+imageFile.name);
    
            //Upload file
            var task = storageRef.put(imageFile);
    
            //Update progress bar
            task.on('state_changed',
                (snapshot) =>{
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    // uploader.value = percentage;
                },
                (err) => {
    
                },
                () =>{
                    task.snapshot.ref.getDownloadURL().then((downloadURL) =>{
                        let url = this.state.downloadURL
                        url.push(downloadURL)
                        this.setState({
                            downloadURL: url
                        })
                        console.log(this.state.downloadURL);
                        console.log('File available at', downloadURL);
                      });
                    // var downloadURL = task.snapshot.ref.getDownloadUrl();
                    // console.log(downloadURL);
                }
            );
        });
    }

    // grabUrl(url) {
    //     this.setState({
    //         downloadURL: url
    //     })
    //     console.log(this.state.downloadURL)
    // }

    addRecipe() {
        let subEmail = this.state.email.substr(0, this.state.email.indexOf('@'));
        let reference = firebase.database().ref('users' + this.subEmail + '/Recipes');
        let newData = {
            Author: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                recipes: null,
                equipment: null,
                ingredients: null,
            }
        }
        reference.child(subEmail).set(newData)
    }

    handleChange(event) {
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    render() {
        // let {imagePreviewUrl} = this.state;
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //   $imagePreview = (<img src={imagePreviewUrl} />);
        // } else {
        //   $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        // }
        return (
            <div id="upload-content">
                <Navigation />
                <div id="title">
                    <p className="title-upload">Your Recipes</p>
                </div>

                <div id="upload-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="recipe-name" className="form-group">
                                <label>Recipe Name *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="recipeName"
                                    placeholder="ex: Blueberry Pancake"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="cooking-time" className="form-group">
                                <label>Cooking Time (Minutes) *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="cookingTime"
                                    placeholder="ex: 25"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />

                            </div>
                        </div>
                        <div id="upload-button" className="col-md-6">
                            <img src={upload} id="upload-image" alt="upload" /> Upload Photo *
                        </div>
                    </div>
                    <div>
                        <label>Equipment *</label>
                        <div id="equipment-input" className="form-group">

                            <input type="recipeName"
                                className="form-control"
                                id="equipmentInput"
                                placeholder="ex: 1 pot"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>
                    <div>
                        <label>Ingredients *</label>
                        <div id="ingredients-input" className="form-group">
                            <input type="recipeName"
                                className="form-control"
                                id="ingredientsInput"
                                placeholder="ex: 2 tablespoons of butter"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>
                    <div>
                        <label>Steps*</label>
                        <div id="steps" className="form-group">
                            <text area type="recipeName"
                                className="form-control"
                                id="stepsInput"
                                placeholder="Pour 250mL water into the pot"
                                name="recipeName"
                                value={null}
                                onInput={(event) => { this.handleChange(event) }} />
                            <img src={add} alt="add" id="add" />
                        </div>
                    </div>

                </div>
                <div className="previewComponent">
                    <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                    {this.state.imagePreviewUrl[0] == undefined ? <div className="previewText">Please select an Image for Preview</div>:<img src={this.state.imagePreviewUrl[0]} />}
                    </div>
                </div>
                <div className="previewComponent">
                    <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                    {this.state.imagePreviewUrl[1] == undefined ? <div className="previewText">Please select an Image for Preview</div>:<img src={this.state.imagePreviewUrl[1]} />}
                    </div>
                </div>
                {/* <div id="save" onClick={() => {
                    this.addRecipe();
                }}>
                    <Link to={ROUTES.Explore}>Upload Recipe</Link>
                </div> */}

                <Footer />
            </div>
        )
    }
}