import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import snacks from "./img/test_homeCover.jpg";
import searchIcon from "./img/searchIcon.png";
import './Home.css';

export default class Home extends React.Component {
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
        let forms = [{ image: <img src={snacks} alt="snacks" className="imageCrop" />, label: "Snacks" },
        { image: <img src={snacks} alt="snacks" className="imageCrop" />, label: "Breakfast" },
        { image: <img src={snacks} alt="snacks" className="imageCrop" />, label: "Lunch" },
        { image: <img src={snacks} alt="snacks" className="imageCrop" />, label: "Dinner" },
        { image: <img src={snacks} alt="snacks" className="imageCrop" />, label: "Desserts" },
        ]

        let array = forms.map((d, i) => {
            return <div className={d.class}>
                    {d.image}
                    <p className={d.label}>{d.label}</p>
            </div>
        })

        return (
            <div>
                <div id="image" role="img" alt ="fitness image" aria-label="Textual Description"> 
                    <Navigation />
                    <div id="searchBox">
                        <input id="search" type="text" placeholder="Search for a Recipe..." onInput={evt=>this.setState({search:evt.target.value})}/>
                        <div id="buttonSearch" onClick={()=>this.setState({clicked: true})}><img src={searchIcon} alt="search icon" /></div>
                        
                        
                        
                        {/* <div>
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
                        </div> */}


                        
                    </div> 
                    <div id="shortcuts">
                        <div class="categoryColumns"><a href="./Home">{array[0]}</a></div>
                        <div class="categoryColumns"><a href="./Home">{array[1]}</a></div>
                        <div class="categoryColumns"><a href="./Home">{array[2]}</a></div>
                        <div class="categoryColumns"><a href="./Home">{array[3]}</a></div>
                        <div class="categoryColumns"><a href="./Home">{array[4]}</a></div>
                    </div>
                </div>
                <Footer />
            </div>   
        );
    }
}
