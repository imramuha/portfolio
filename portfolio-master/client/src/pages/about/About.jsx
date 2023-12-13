import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            I am <span>Imran</span>,
          </p>
          <p>
            <span> web developer</span>.
          </p>
          <p class="jobTitle">student electronics and ict / full stack developer</p>
          <h2 class="bodyClosingTag">&#60;/body&#62;</h2>
        </div>
        <div className="aboutExtra">
          <div className="aboutExtraHeader">Currently...</div>
          <div className="aboutExtraBody">
            <img
              class="aboutImg"
              src="https://via.placeholder.com/150/150"
              alt="project"
            />
            <ul className="aboutSocials">
              <li>
                <h6>
                  <a
                    href="https://github.com/imramuha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github-square"]} />
                  </a>
                </h6>
              </li>
              <li>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/imramuha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </h6>
              </li>

              <li>
                <h6>
                  <a
                    href="https://twitter.com/imramuha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                  </a>
                </h6>
              </li>
              <li>
                <h6>
                  <a
                    href="https://dribbble.com/imramuha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "dribbble-square"]} />
                  </a>
                </h6>
              </li>
              <li>
                <h6>
                  <a
                    href="www.pinterest.com/imramuha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "pinterest-square"]} />
                  </a>
                </h6>
              </li>
            </ul>
          </div>
          <div className="aboutExtraFooter">
            <button>
              Link to my resume  
              <span>
                <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
