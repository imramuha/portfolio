import React, { Component } from "react";

import Header from "./header/Header";
import Links from "./links/Links";

class NavHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Header />
          <Links />
        </nav>
      </React.Fragment>
    );
  }
}

export default NavHeader;
