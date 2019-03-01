import React from "react";

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            clicked: false
        }
    }
    handleClick = () => {
        console.log("clicked")
        this.props.history.push({pathname:"/result"})
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
                    <input id="box" type="text" placeholder="Search.." onInput={evt=>this.setState({search:evt.target.value})}/>
                    <button id="btngo" className="btn btn-primary" type="button" onClick={()=>this.setState({clicked: true})}>Go</button>
                    <div>
                     {this.state.clicked ? <div className="pt-5">
                        <div className="card mt-2" onClick={this.handleClick}>
                            <div className="container">
                                <h5>One Pot Chicken Parmesan Pasta</h5>
                                <p>estimated time: 20min</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className="container">
                                <h5>Chicken Noodle Soup</h5>
                                <p>estimated time: 30min</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className="container">
                                <h5>Chicken Parmesan</h5>
                                <p>estimated time: 1h</p>
                            </div>
                        </div>
                     </div> : <div></div>}
                    </div>
                </div>
            </div>
        );
    }
}
