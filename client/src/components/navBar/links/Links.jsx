import React, {Component} from "react";
import {Link} from "react-router-dom";

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            IMRAN
                        </Link>
                    </li>
                    <li className="nav-line"></li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-line"></li>
                    {/*<li>
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
