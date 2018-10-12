import React, { Component } from "react";
import axios from "axios";
import {Card, CardTitle} from 'react-materialize';
import Menu from '../Navbar/Menu';

class BeerDetail extends Component {
  state = {
    beer: {}
  };

  async componentDidMount() {
    try {
      let beerId = this.props.match.params.beerId;
      console.log(beerId);
      const res = await axios.get(
        `http://localhost:3000/beers/single/${beerId}`
      );
      let beer = res.data;
      this.setState({ beer });
      console.log(beer);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
        <div>
        <Menu/>
         <div className="row">
        <Card
          className ='medium'
          s={12}
          header={<CardTitle reveal image={this.state.beer.image_url} waves="light" />}
          title={this.state.beer.name}
          reveal={
            <p>
               <ul>
                   <li>Name: {this.state.beer.name} </li>
                   <li>Tagline: {this.state.beer.tagline}</li>
                   <li>Atenuation: {this.state.beer.attenuation_level}</li>
                   <li>Description: {this.state.beer.description}</li>
                   <li>Contributed by: {this.state.beer.contributed_by}</li>   
               </ul>
            </p>
          }
        >
          <p>
            <a href="/beers/all">Return to all Beers</a>
          </p>
        </Card>
      </div>
        </div>
     
    );
  }
}

export default BeerDetail;
