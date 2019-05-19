import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./AboutUs.css"
import aboutUsPurpose from "./img/aboutUs-purpose.jpg";
import neha from "./img/neha.png";
import echo from "./img/echo.png";
import juan from "./img/juan.png";
import soobin from "./img/soobin.png";

export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
              <div className="img-fluid" id="cover" alt ="home cover">
               <Navigation />
               
                    <div id="aboutUsCover-text">
                        <h1 className="display-3">QUICK TASTE</h1>
                            <p id="researchQ">
                                How do we cut back on time to make cooking more wholesome and engaging within a college lifestyle?
                            </p>
                    </div>
                </div>
                <div id="contentDiv">
                    <div className="row row-no-gutters quickTasteExplanation">
                        <div className="col-sm-4">
                            <img className="img-fluid" id="aboutUs-purpose" src={aboutUsPurpose} alt="food" />
                        </div>
                        <div className="col-sm-8" id="intro">
                         <p>The purpose of this electronic cookbook is to assist college students in making delicious homemade food
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
                    <div id="container">
                        <div class="card-container" >
                            <img class="round" id="pic" src={neha} alt="user" />
                            <h3 id="card-title">Neha Yadav</h3>
                            <h6>Custom Track <br/> Focused in Software Dev.</h6>
                            <p>PM / Developer</p>
                            <div class="skills">
                                <h6 id="skill-title">Skills</h6>
                                <ul>
                                    <li>Java</li>
                                    <li>Back End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>R</li>
                                    <li>Swift</li>
                                    <li>Firebase</li>
                                    <li>Full Stack Development</li>
                                    <li>Paper Prototypes</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-container">
                            <img class="round" id="pic" src={soobin} alt="user" />
                            <h3 id="card-title">Soobin Kwon</h3>
                            <h6>Custom Track <br/> Focused in HCI</h6>
                            <p>Developer</p>
                            <div class="skills">
                                <h6 id="skill-title">Skills</h6>
                                <ul>
                                <li>Java</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>R</li>
                                    <li>Firebase</li>
                                    <li>Full Stack Development</li>
                                    <li>UI / UX</li>
                                    <li>Prototypes</li>
                                    <li>Usability Research</li>
                                    <li>Interviews</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-container">
                            <img class="round" id="pic" src={juan} alt="user" />
                            <h3 id="card-title">Ju An Oh</h3>
                            <h6>Custom Track <br/> Focused in Software Dev.</h6>
                            <p>Developer</p>
                            <div class="skills">
                                <h6 id="skill-title">Skills</h6>
                                <ul>
                                    <li>Java</li>
                                    <li>Back End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>R</li>
                                    <li>Swift</li>
                                    <li>Firebase</li>
                                    <li>Full Stack Development</li>
                                    <li>Inductive Coding Analysis</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-container">
                            <img class="round" id="pic" src={echo} alt="user" />
                            <h3 id="card-title">Echo Zhang</h3>
                            <h6>Human Centered Interaction <br/> Track</h6>
                            <p>Designer</p>
                            <div class="skills">
                                <h6 id="skill-title">Skills</h6>
                                <ul>
                                    <li>User Research</li>
                                    <li>Interviews</li>
                                    <li>Prototypes</li>
                                    <li>Usability Testing</li>
                                    <li>UI / UX</li>
                                    <li>Responsiveness</li>
                                    <li>Java</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>SQL</li>
                                    <li>R</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>
        );
    }
}