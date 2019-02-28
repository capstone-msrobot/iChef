import React from "react";

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
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
                                <a className="nav-item nav-link" href="/main">
                                    Home
                                </a>
                                <a
                                    className= "nav-item nav-link active"
                                    href="#"
                                >
                                    About Us <span className="sr-only">(current)</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <section class="m-4">
                        <h4>What is iChef?</h4>
                        <p><b>How do we improve the cooking process within a college lifestyle so that students can explore and
                                experience nutritious foods in the coming years?</b></p>
                        <p>The purpose of our project is to assist college students in making delicious, healthy homemade food
                            with limited budget. Since most college students are not equipped with the
                            creative food ideas, our team decided to create an informative website that could help students in
                            making quality, special-kind food. Increasing the availability and accessibility
                            of this information is the focus of this project. Based off our user research, we found that most
                            of our audiences find receipes through the web.
                        </p>
                        <h4>Who is Ms. Robot?</h4>
                        <div class="card-group">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Neha Yadav</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Project Manager & Developer</h6>
                                    <p class="card-text"><ul>
                                            <li>Coding: Go, Java, SQL, R, React, HTML/CSS/JS, Firebase, Swift</li>
                                            <li>Design: Some experience - have worked mainly with Illustrator</li>
                                            <li>Experienced in full-stack development</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Soobin Kwon</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Developer</h6>
                                <p class="card-text"><ul>
                                        <li>Coding: Go, Java, SQL, R, Reat, HTML/CSS/JS</li>
                                        <li>Design: UX, Prototypes, Usability Research, and Interviews</li>
                                        <li>Experienced in development and designs</li>
                                    </ul></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Ju An Oh</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Developer</h6>
                                <p class="card-text"><ul>
                                        <li>Coding: Go, Java, SQL, R, React, HTML/CSS/JS, Swift /Full Stack Experience/ </li>
                                        <li>Research: Inductive Coding Analysis</li>
                                        <li>Experienced in full-stack development</li>
                                    </ul></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Echo Zhang</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Designer</h6>
                                <p class="card-text"><ul>
                                        <li>Design: User Research, Prototypes, Interviews, Usability Test, UX/UI Design)</li>
                                    </ul></p>
                            </div>
                        </div>
                    </section>
                </div>
                <footer class="bg-warning p-3">
                <div class="container d-flex justify-content-between">
                    {/* <img class="w-25 h-50 pr-2" src="img/logo.png" alt="profile photo"> */}
                    <p class="pl-2">Contact Ms.Robot for Any Questions, Testers, and or Sponsorships: <a href="mailto:nehay100@uw.edu">
                            msrobot@gmail.com</a>
                    </p>
                </div>
                </footer>
            </div>
            
        );
    }
}