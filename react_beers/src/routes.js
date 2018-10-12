import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from './Components/Home';
import BeerDetail from './Components/Details/BeerDetail';
import Beer from './Components/AllBeers/Beers';
import RandomBeer from './Components/Random/Random';
import NewBeer from './Components/NewBeer/NewBeer';


export default () => <Router>
    <div>
        <Route exact path='/' component={Home}/>
        <Route path='/beers/single/:beerId' component={BeerDetail}/>
        <Route path="/beers/all" component={Beer}/>
        <Route path='/beers/random/' component={RandomBeer}/>
        <Route path='/beers/new' component={NewBeer}/>
    </div>
</Router>