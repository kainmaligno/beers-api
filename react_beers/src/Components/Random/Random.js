import React, { Component } from "react";
import axios from "axios";
import {Card, CardTitle} from 'react-materialize';
import Menu from '../Navbar/Menu';

class RandomBeer extends Component{
    state ={
        random: {}
    }
    
     async componentDidMount(){
       try{
        //let Random = this.props.match.params.Random;
        const res = await axios.get(
            `http://localhost:3000/beers/random/`
        );
        let random = res.data;
        this.setState({random})
    
       } catch(error){
        console.log(error)
       }
    }

    render(){
        return(
            <div>
            <Menu/>
                <h1>Your Random Beer</h1>
                <div className="row">
        <Card
          className ='medium'
          s={12}
          header={<CardTitle reveal image={this.state.random.image_url} waves="light" />}
          title={this.state.random.name}
          reveal={
            <p>
               <ul>
                   <li>Name: {this.state.random.name} </li>
                   <li>Tagline: {this.state.random.tagline}</li>
                   <li>Food Pairing: {this.state.random.food_pairing}</li>
                   <li>Atenuation: {this.state.random.attenuation_level}</li>
                   <li>Description: {this.state.random.description}</li>
                   <li>Contributed by: {this.state.random.contributed_by}</li>   
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
        )
    }
}

export default RandomBeer;