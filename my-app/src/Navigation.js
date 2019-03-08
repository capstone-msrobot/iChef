import React from 'react';
import './Navigation.css';
import logo from "./img/logo.png";

export default class Navigation extends React.Component {
    render() {
        return (
            <div id="navigationBar" className="navigBar">
                <nav className="navbar navbar-expand-lg navbar-dark" id="navigation">
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
                                id="tabLink-explore"
                                href="./Results"
                            >
                                Explore//////REsults
                            </a>
                            <a 
                                className="navbar-brand" 
                                id="tabLink-logo"
                                href="Home">
                                <img id="logo" src={logo} alt="logo" />
                                Quick Taste
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="tabLink-about"
                                href="./AboutUs"
                            >
                                About Us
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="tabLink-signup"
                                href="./ShowRecipe"
                            >
                                Sign Up /////Show Recipe
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
            