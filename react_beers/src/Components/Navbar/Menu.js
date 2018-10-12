import React, {Component} from 'react';
import {Navbar,NavItem} from 'react-materialize';

class Menu extends Component{
    render(){
        return(
            <div>
            <Navbar  className="navbar purple darken-4" brand='Iron Beers Home Menu' right>
                <NavItem href='https://www.youtube.com/watch?v=yzcEG_JoVuo'>Rola cervecera</NavItem>
                <NavItem href='https://github.com/kainmaligno/lab-react-ironbeers'>Lets get GitHub</NavItem>
            </Navbar>
            </div>
           
        )
    }
    
   
}

export default Menu;