import React, {Component} from 'react';

import Menu from './Navbar/Menu';
import Pie from './Footer/Footer';
import Carta from './Cards/Cartas';


class Home extends Component{
    render(){
        return(
            <div>
           <Menu/>
           <h1>Menu</h1>
           <Carta/>
           <Pie/>
            </div>
        )
    }
}

export default Home 
