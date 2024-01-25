import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../../../assets/pdfs/cv.pdf";

class Links extends Component {
  constructor(props) {
    super(props);
    // Retrieve mode from localStorage or default to "dark"
    const savedMode = localStorage.getItem("mode");
    this.state = {
      mode: savedMode || "dark", // Initial mode is set to "dark" or retrieved from localStorage
    };
  }

  toggleMode = () => {
    const newMode = this.state.mode === "dark" ? "light" : "dark";
    console.log(`Switching to ${newMode} mode!`);

    // Add any other actions you want to perform when the mode is toggled

    // Save the new mode in localStorage
    localStorage.setItem("mode", newMode);

    this.setState({
      mode: newMode,
    });

    // Dynamically set the mode as a class on the body element
    document.body.className = newMode + "-mode";
  };

  componentDidMount() {
    // Set the mode from localStorage when the component mounts
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      this.setState({
        mode: savedMode,
      });
      // Dynamically set the mode as a class on the body element
      document.body.className = savedMode + "-mode";
    }
  }

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
            <a
              className={`nav-links-lightbulb ${this.state.mode}-mode`}
              onClick={this.toggleMode}
            >
              <FontAwesomeIcon icon={["fas", "lightbulb"]} />
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
