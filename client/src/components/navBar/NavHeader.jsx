import React, { Component } from "react";

import Header from "./header/Header";
import Socials from "./socials/Socials";
import Links from "./links/Links";

// <Header /> instead of Socials

class NavHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Socials />
          <Links />
        </nav>
      </React.Fragment>
    );
  }
}

export default NavHeader;
