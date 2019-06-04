import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import add from "./img/addIcon.png";
import upload from "./img/uploadIcon.png";
import "./Upload.css";
import firebase from 'firebase';
import ReactDOM from 'react-dom'
import List from './List';
import ListSteps from "./ListSteps";
import { domainToASCII } from 'url';
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
            equipment: [],
            termEquip: '',
            termIngred: '',
            termSteps: '',
            itemsEquip: [],
            itemsIngred: [],
            itemsSteps: [],
            file: [],
            imagePreviewUrl: [],
            downloadURL: [],
            objectKey: '',
            time: ''
        };

        // this.add = this.add.bind(this);
        // this.addItem = this.addItem.bind(this);
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
        //         console.log(event);
        let field = event.target.name; // which input
        let value = event.target.value; // what value
        // console.log(field);
        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
    }

    // add(event) {
    //     console.log("here")
    //     let welcome = React.createElement('input',{id:'#add'})
    //     ReactDOM.render(welcome,document.getElementById('equipment-input'))
    // }
    
    onChangeEquip = (event) => {
        this.setState({ termEquip: event.target.value });
    }

    onChangeIngred = (event) => {
        this.setState({ termIngred: event.target.value });
    }

    onChangeSteps = (event) => {
        this.setState({ termSteps: event.target.value });
    }

    onSubmitEquip = (event) => {
        event.preventDefault()
        this.setState({
            termEquip: '',
            itemsEquip: [...this.state.itemsEquip, this.state.termEquip]
        });
    }

    //   this.state._inputElement = document.getElementById("equipment-input");

    onSubmitIngred = (event) => {
        event.preventDefault()
        this.setState({
            termIngred: '',
            itemsIngred: [...this.state.itemsIngred, this.state.termIngred]
        });
    }

    //   this.state._inputElement = document.getElementById("equipment-input");

    onSubmitSteps = (event) => {
        event.preventDefault()
        this.setState({
            termSteps: '',
            itemsSteps: [...this.state.itemsSteps, this.state.termSteps]
        });
    }

    //   this.state._inputElement = document.getElementById("equipment-input");

    // _handleSubmit(e) {
    //     e.preventDefault();
    //     // TODO: do something with -> this.state.file
        
    //     console.log('handle uploading-', this.state.file);
    //   }
    
    //   _handleImageChange(e) {
    //     e.preventDefault();
    
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
    
    //     reader.onloadend = () => {
    //       this.setState({
    //         file: file,
    //         imagePreviewUrl: reader.result
    //       });
    //     }
    
    //     reader.readAsDataURL(file)
    //   }

    //   handleClick = () => {
    //     let img = this.state.imageViews
    //     // img.push(<addRecipe/>)
    //     this.setState({
    //         imageViews:[...img, <div className="previewComponent">
    //         <form onSubmit={(e)=>this._handleSubmit(e)}>
    //         <input className="fileInput" 
    //             type="file" 
    //             onChange={(e)=>this._handleImageChange(e)} />
    //         <button className="submitButton" 
    //             type="submit" 
    //             onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
    //         </form>
    //         <div className="imgPreview">
    //         </div>
    //     </div>]
    //     })
    //   }

    putURLs() {
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
        console.log("clicked");
        console.log("here")
        this.putURLs()
        .then(() => {
            console.log(this.state.downloadURL);
            let keyRef = database.ref('/recipesFinal').push({
                name: this.state.recipeName,
                ingredients: this.state.itemsIngred,
                ingredientsList: this.state.itemsIngred,
                time: this.state.time,
                steps: this.state.itemsSteps,
                equipment: this.state.itemsEquip,
                equipmentList:this.state.itemsEquip,
                imageURL: this.state.downloadURL.length == 0 ? '' : this.state.downloadURL[0],
                originalURL: this.state.username,
                stepsURL: ''
                })
                this.setState({
                    objectKey: keyRef.getKey()
                })
        }).then(() => {
            const client = algoliasearch(id, config);
              console.log(this.state.objectKey);
              const index = client.initIndex('contacts');
              database.ref('/recipesFinal/' + this.state.objectKey).once('value', recipe => {
                
                let content = recipe.val();
                content.objectID = this.state.objectKey;
                console.log(recipe.val());
                index.saveObject(content, (err, content) => {
                    console.log(content);
                    console.log(err);
                });
              });
        });
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

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        let map = this.state.imageViews
        return (
            <div id="upload-content">
                <Navigation />
                <div id="title">
                    <p className="title-upload">Your Recipe</p>
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
                                <input type="time"
                                    className="form-control"
                                    id="time"
                                    placeholder="ex: 25"
                                    name="time"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />

                            </div>
                        </div>
                        <div id="upload-button" className="col-md-6">
                        <div className="previewComponent">
                            <form onSubmit={(e)=>this._handleSubmit(e)}>
                            <input className="fileInput" 
                                type="file" 
                                onChange={(e)=>this._handleImageChange(e)} />
                            </form>
                            <div className="imgPreview">
                            {$imagePreview}
                            </div>
                        </div>
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
                                // onInput={(event) => { this.handleChange(event) }} 
                                onChange={this.onChangeEquip} />
                            <img src={add}
                                alt="add"
                                // onClick={this.add}
                                onClick={this.onSubmitEquip}
                                id="add" />
                            <List items={this.state.itemsEquip} />
                            {/* <TodoItems entries={this.state.items}/> */}
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
                                value={this.state.termIngred}
                                // onInput={(event) => { this.handleChange(event) }} 
                                onChange={this.onChangeIngred} />
                            <img src={add}
                                alt="add"
                                // onClick={this.add}
                                onClick={this.onSubmitIngred}
                                id="add" />
                            <List items={this.state.itemsIngred} />
                        </div>
                    </div>
                    <div>
                        <label>Steps*</label>
                        <div id="steps" className="form-group">
                            <textarea type="recipeName"
                                className="form-control"
                                id="stepsInput"
                                placeholder="Pour 250mL water into the pot"
                                name="recipeName"

                                // value={null}
                                // onInput={(event) => { this.handleChange(event) }} />
                                value={this.state.termSteps}
                                // onInput={(event) => { this.handleChange(event) }} 
                                onChange={this.onChangeSteps} />
                            <img src={add}
                                alt="add"
                                onClick={this.onSubmitSteps}
                                // onClick={this.add}

                                id="add-steps" />
                            <ListSteps items={this.state.itemsSteps} />
                        </div>
                        {/* <label>Steps Picture*</label>
                        <img src={add}
                                alt="add"
                                onClick={this.handleClick}

                                id="add-stepsURL" />
                        <div id="stepsPic">
                            {this.state.imageViews.map(child => child)}
                        </div>  */}
                    </div>
                    <button className="submitButton" 
                                type="submit" 
                                onClick={(e)=>this._handleSubmit(e)}>Upload Recipe</button>
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

class addPictures extends React.Component {
    render() {
        return(
            <div>im here</div>
        )
    }
}