import React, {Component} from "react";
import {Link} from "react-router-dom";
import cv from "../../../assets/pdfs/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="nav-links">
                    {/*<li>
                        <Link to="/">
                            IMRAN
                        </Link>
        </li>*/}
                    <li>
                        <a href={cv} without rel="noopener noreferrer" target="_blank">
                            CV
                        </a>
                    </li>
                    <li className="nav-line"></li>
                    <li>
                        <a className="nav-links-lightbulb">
                            <FontAwesomeIcon icon={["fas", "lightbulb"]}/>
                        </a>
                    </li>
                    <li className="nav-line"></li>
                    {/*<li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-line"></li>

                    <li>
            <Link to="/contact">
              Contact
            </Link>
              </li>*/}
                </ul>
            </React.Fragment>
        );
    }
}

export default Links;
