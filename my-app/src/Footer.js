import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container d-flex justify-content-between">
                        {/* <img className="w-25 h-50 pr-2" src="img/logo.png" alt="profile photo"> */}
                        <p className="pl-2" id="contactText">Contact Ms.Robot for Any Questions, Testers, and or Sponsorships: <a href="mailto:nehay100@uw.edu">
                                msrobot@gmail.com</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}