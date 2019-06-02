import React from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import add from "./img/addIcon.png";
import upload from "./img/uploadIcon.png";
import "./Upload.css";
import firebase from 'firebase';

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
            downloadURL: ''

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

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        // console.log('handle uploading-', this.state.file);
        for (var i = 0; i < this.state.file.length; i++) {
            var imageFile = this.state.file[i];
    
            this.uploadImageAsPromise(imageFile);
        }
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
            console.log(urls);
            this.setState({
                file: fileList,
                imagePreviewUrl: urls
            });
        }

        reader.readAsDataURL(file)
    }

    uploadImageAsPromise(imageFile) {
        let recipeName = this.state.recipeName
        return new Promise(() => {
            var storageRef = firebase.storage().ref(recipeName+"/"+imageFile.name);
    
            //Upload file
            var task = storageRef.put(imageFile);
    
            //Update progress bar
            task.on('state_changed',
                function progress(snapshot){
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    // uploader.value = percentage;
                },
                function error(err){
    
                },
                function complete(){
                    task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        //grabUrl(downloadURL);
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
            <div>
                <Navigation />
                <div id="title">
                    <p className="title-upload">Your Recipes</p>
                </div>

                <div id="upload-content">
                    <div className="row">
                        <div className="col-md-5">
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
                        <div className="col-md-5">
                            <div id="cooking-time" className="form-group">
                                <label>Cooking Time *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="cookingTime"
                                    placeholder="ex: 25"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                                <p id="min-label">Minutes</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div id="ingredients-input" className="form-group">
                                <label>Ingredients *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="ingredientsInput"
                                    placeholder="ex: 2 tablespoons of butter"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                                {/* <img src={add} alt="add" /> */}
                            </div>

                            <img src={upload} alt="upload" /> Upload Background Photo *
                        </div>
                        <div className="col-md-5">
                            <div id="equipment-input" className="form-group">
                                <label>Equipment *</label>
                                <input type="recipeName"
                                    className="form-control"
                                    id="equipmentInput"
                                    placeholder="ex: 1 pot"
                                    name="recipeName"
                                    value={null}
                                    onInput={(event) => { this.handleChange(event) }} />
                                {/* <img src={add} alt="add" /> */}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div id="steps" className="form-group">
                                <label>Steps*</label>
                                {/* <text area type="recipeName"
                        className="form-control"
                        id="recipeName"
                        placeholder="ex: 1 pot"
                        name="recipeName"
                        value={null}
                        onInput={(event) => { this.handleChange(event) }} />
                    <img src={add} alt="add" /> */}
                            </div>
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