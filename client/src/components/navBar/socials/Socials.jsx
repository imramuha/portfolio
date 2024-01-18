import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Socials extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav-socials">
        <li className="nav-line"></li>
          <li>
            <a href="https://github.com/imramuha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github-square"]} />
            </a>
          </li>
          <li className="nav-line"></li>
          <li>
            <a href="https://www.linkedin.com/in/imramuha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          
          {/*<li className="nav-line"></li>
          <li>
            <a href="https://twitter.com/imramuha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
          </li>
          <li className="nav-line"></li>
          <li>
            <a href="https://dribbble.com/imramuha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "dribbble-square"]} />
            </a>
          </li>
          <li className="nav-line"></li>
          <li>
            <a href="www.pinterest.com/imramuha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "pinterest-square"]} />
            </a>
          </li>*/}
        </ul>
      </React.Fragment>
    );
  }
}

export default Socials;
