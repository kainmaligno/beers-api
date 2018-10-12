import React, { Component } from "react";
import axios from "axios";
import { Card, CardTitle, Col } from "react-materialize";
import Menu from '../Navbar/Menu';
class AllBeers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const beers = await axios.get(`http://localhost:3000/beers/all`);
      this.setState({
        beers: beers.data
      });
    } catch (error) {
      console.log(error);
    }
  }
  // actions={[<a href='#'>This is a link</a>]
  render() {
    return (
         
        <div className ="row">
        <Menu/>
          {this.state.beers.map((beers, idx) => {
            return (
                
                <div className="col s4">
              <Col>
                <Card
                  horizontal
                  header={<CardTitle image={beers.image_url} />}
                  actions={[
                    <a href={`/beers/single/${beers._id}`}>Beer Details</a>
                  ]}
                  key={idx}
                >
                  <ul>
                    <li><h3>{beers.name}</h3></li>
                    <li>TAGLINE: {beers.tagline}</li>
                    <li>CREATED BY: {beers.contributed_by}</li>
                  </ul>
                </Card>
              </Col>
              </div>
              
            );
          })}
          </div>
     
    );
  }
}

export default AllBeers;
