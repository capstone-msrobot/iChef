import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./AboutUs.css"
import aboutUsPurpose from "./img/aboutUs-purpose.jpg";

export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
              <div className="img-fluid" id="cover" alt ="home cover">
               <Navigation />
               
                    <div id="aboutUsCover-text">
                        <h1 className="display-3">QUICK TASTE</h1>
                            <p id="researchQ">
                                How do we improve the cooking process within a college lifestyle so that students are more inclined to cook at home?
                            </p>
                    </div>
                </div>
                <div id="contentDiv">
                    <div className="row row-no-gutters quickTasteExplanation">
                        <div className="col-sm-4">
                            <img className="img-fluid" id="aboutUs-purpose" src={aboutUsPurpose} alt="food" />
                        </div>
                        <div className="col-sm-8" id="intro">
                         <p>The purpose of this electronic cookbook is to assist college students in making delicious, healthy homemade food
                            with limited budget. Since most college students are not equipped with the
                            creative food ideas, our team decided to create an informative website that could help students in
                            making quality, special-kind food. Increasing the availability and accessibility
                            of this information is the focus of this project. Based off our user research, we found that most
                            of our audiences find receipes through the web.
                        </p>
                        </div>
                    </div>
                    <div id="msrobotIntro">
                        <h2>MEET THE TEAM - MS.ROBOT</h2>
                        <p>We are 4 seniors at the University of Washington, who understand the struggles of cooking and making
                            healthy foods choices with a busy schedule, while all having different living situations. We all have 
                            a passion to help others, and with this product, we hope to make other students want to cook under 
                            limited ingredients, budgets, and time.</p> 
                    </div>
                    <div>
                        <div className="card-group">
                            <div className="card firstCard">
                                {/* <img className="card-img-top" src={snacks} alt="Neha" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Neha Yadav</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Project Manager &amp; Developer</h6>
                                    <div className="card-text">
                                        <ul>
                                            <li>Coding: Go, Java, SQL, R, React, HTML/CSS/JS, Firebase, Swift</li>
                                            <li>Design: Some experience </li>
                                            <li>Experienced in full-stack development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {/* <img className="card-img-top" src={snacks}  alt="Soobin" />    */}
                                <div className="card-body">
                                    <h5 className="card-title">Soobin Kwon</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Developer</h6>
                                    <div className="card-text">
                                        <ul>
                                            <li>Coding: Go, Java, SQL, R, React, Firebase, HTML/CSS/JS</li>
                                            <li>Design: UX, Prototypes, Usability Research, and Interviews</li>
                                            <li>Experienced in full-stack development and design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {/* <img className="card-img-top" src={snacks} alt="Ju An" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Ju An Oh</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Developer</h6>
                                    <div className="card-text">
                                        <ul>
                                            <li>Coding: Go, Java, SQL, R, React, HTML/CSS/JS, Swift </li>
                                            <li>Research: Inductive Coding Analysis</li>
                                            <li>Experienced in full-stack development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card lastCard">
                                {/* <img className="card-img-top" src={snacks} alt="Echo" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">Echo Zhang</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Designer</h6>
                                    <div className="card-text"><ul>
                                            <li>Design: User Research, Prototypes, Interviews, Usability Test, UX/UI Design)</li>
                                        </ul></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}