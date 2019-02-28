import React from "react";

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                    <a className="navbar-brand" href="#">
                        iChef
                    </a>
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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                            <a
                                className="nav-item nav-link"
                                href="/aboutUs"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                </nav>
                <div id="searchBox">
                    <input id="box" type="text" placeholder="Search.."/>
                    <button id="btngo" class="btn btn-primary" type="button" disabled>Go</button> 
                </div>
            </div>
        );
    }
}