import React, { Component } from 'react';

import Links from './links/Links';
import Socials from './socials/Socials';

class NavSocials extends Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                <Socials />
                    <Links />
                   
                </nav>
            </React.Fragment>
        )
    }
}

export default NavSocials;