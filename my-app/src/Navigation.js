import React from 'react';
import './Navigation.css';
import logo from "./img/logo.png";
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            loggedIn: this.props.loggedIn
        };  
    }

    componentWillUnmount() {
        this.stopWatchingAuth();
    }

    componentDidMount() {
        // Authentication
        this.stopWatchingAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser,
                    errorMessage: '',
                    loggedIn: true
                });
            }
            else {
                this.setState({ user: null, loggedIn:false}); //null out the saved state
            }
        });
    }
    
    handleSignOut() {
        this.setState({ errorMessage: null }); //clear old error

        /* Sign out the user, and update the state */
        firebase.auth().signOut()
            .catch((err) => {
                console.log(err)
                this.setState({ 
                    errorMessage: err.message,
                    user: null,
                    loggedIn: false
                });
            });
    }

    render() {
        return (
            <div id="navigationBar" className="navigBar">
                <nav className="navbar navbar-expand-lg navbar-light" id="navigation">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarNavAltMarkup">
                        <div className="navbar-nav" id="navTabs">
                            <a 
                                className="nav-item nav-link" 
                                id="tabLink-home"
                                href="Home">
                                Home 
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="tabLink-about"
                                href="./AboutUs"
                            >
                                About Us
                            </a>
                            <a 
                                className="navbar-brand" 
                                id="tabLink-logo"
                                href="Home">
                                <img id="logo" src={logo} alt="logo" />
                            </a>


                            {/* Explore should show ALL of the recipes? */}
                            {/* https://stackoverflow.com/questions/54896637/how-to-change-navbar-when-user-signs-in-and-signs-out */}
                            {/* https://stackoverflow.com/questions/46993357/logout-update-navbar-react-js */}
                            {/* https://stackoverflow.com/questions/40055439/check-if-logged-in-react-router-app-es6 */}
                            <a
                                className="nav-item nav-link"
                                id="tabLink-explore"
                                href="./Explore"
                                >
                                    Explore
                            </a>

                            {/* Change this to be Upload a Recipe page IF THEY ARE LOGGED IN  */}
                            {(!this.state.user && !this.state.loggedIn) && 
                                <a
                                    className="nav-item nav-link"
                                    id="tabLink-signup"
                                    href="./Login"
                                >
                                    Login
                                </a>
                            }
                            {(this.state.user && this.state.loggedIn) && 
                                <a
                                    className="nav-item nav-link"
                                    id="tabLink-signup"
                                    href="./Profile"
                                >
                                    Profile
                                </a>
                            }
                            {(this.state.user && this.state.loggedIn) && 
                                <a 
                                    className="nav-item nav-link" 
                                    id="tabLink-LogOut"
                                    href="./Home" 
                                    onClick={() => this.handleSignOut()}>
                                    Log out
                                </a>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}













// import React, { Component } from 'react';
// import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
// import { Link, Redirect } from 'react-router-dom';
// import { ROUTES } from './constants';
// import './Navigation.css';
// import logo from "./img/logo.png";

// export default className Navigation extends Component {
//     constructor(props) {
//         super(props);
    
//         this.toggle = this.toggle.bind(this);
    
//         this.state = {
//             isOpen: false
//         };
//       }
    
//       toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//       }

//     render() {
//         return (
//         <div>
//             <Navbar className="navbar" id="navigation" expand="md">
//                 <NavbarToggler onClick={this.toggle} />
//                 <Collapse isOpen={this.state.isOpen} navbar>
//                 <div className="row">
//                     <Nav className="mr-auto" navbar>
//                         <NavItem className=".col-md-4">
//                             <Link to={ROUTES.Home} id="link" replace>Home</Link>
//                         </NavItem>
//                         <NavItem className=".col-md-4">
//                             <Link to={ROUTES.Results} id="link" replace>Explore</Link>
//                         </NavItem>
//                         <div id="navbar-brand">
//                             <Link to={ROUTES.Home} id="link" replace><img src={logo} alt="logo" /></Link>
//                         </div>
//                         <NavItem className=".col-md-4">
//                             <Link to={ROUTES.AboutUs} id="link" replace>AboutUs</Link>
//                         </NavItem>
//                         {/* <NavItem className=".col-md-4">
//                             <Link to={ROUTES.Home} id="link" replace>Sign Up</Link>
//                         </NavItem> */}
//                     </Nav>
//                     </
//                 </Collapse>
//             </Navbar>
//         </div>
//   );
// }
// }