import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cv from "../../assets/pdfs/hola.pdf";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutIntro">
                    <h2 class="bodyOpeningTag">&#60;body&#62;</h2>
                    <p>Hi,</p>
                    <p>
                        I am
                        <span>Imran</span>,
                    </p>
                    <p>
                        <span>
                            web developer</span>.
                    </p>
                    <p class="jobTitle">student electronics and ict / full stack developer</p>
                    <h2 class="bodyClosingTag">&#60;/body&#62;</h2>
                </div>
                <div className="aboutExtra">
                    <div className="aboutExtraHeader">Currently...</div>
                    <div className="aboutExtraBody">
                        <img
                            class="aboutImg"
                            src={require("../../assets/images/profilepic.png")}
                            alt="project"/>
                        <ul className="aboutSocials">
                            <li>
                                <h6>
                                     {/* <FontAwesomeIcon icon={["fab", "twitter-square"]}/> */}
                                    <a
                                        href="https://twitter.com/imramuha"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fas", "square"]}/>
                                    </a>
                                </h6>
                            </li>
                            <li>
                                <h6>
                                     {/* <FontAwesomeIcon icon={["fab", "dribbble-square"]}/> */}
                                    <a
                                        href="https://dribbble.com/imramuha"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fas", "square"]}/>
                                    </a>
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <a href="www.pinterest.com/imramuha" target="_blank" rel="noopener noreferrer">
                                        {/* <FontAwesomeIcon icon={["fab", "pinterest-square"]}/> */}
                                        <FontAwesomeIcon icon={["fas", "square"]}/>
                                    </a>
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <a href="https://github.com/imramuha" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fab", "github-square"]}/>
                                    </a>
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <a
                                        href="https://www.linkedin.com/in/imramuha"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                                    </a>
                                </h6>
                            </li>
                        </ul>
                    </div>
                    <div className="aboutExtraFooter">
                        <a href={cv} without rel="noopener noreferrer" target="_blank">
                            <button trailingIcon="picture_as_pdf" label="Resume">
                                link to my resume
                                <span>
                                    <FontAwesomeIcon icon={["fas", "arrow-right"]}/>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
