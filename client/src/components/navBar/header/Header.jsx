import React, { Component } from "react";

import logo from "../../../assets/images/logo.svg";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav-header">
          <li>
            <img
              className="nav-logo"
              src={logo}
              alt="logo portfolio Imran Muhammad"
            />
          </li>
          <li className="nav-line"></li>
          <li>This is my tagline</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Header;
