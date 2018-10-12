import React, {Component} from 'react';
import {Navbar} from 'react-materialize';


class Pie extends Component{
    render(){
        return(
            <div>
                <Navbar className="footer purple darken-4" brand='Iron Beers' left>
                    {/* <NavItem href='get-started.html'>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem> */}
                </Navbar>
            </div>
        )
    }
}

export default Pie;