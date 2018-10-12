import React, { Component } from "react";
import Menu from "../Navbar/Menu";
import {Row, Input, Button} from 'react-materialize';
import axios from 'axios';


class NewBeer extends Component {
    constructor(props){
        super(props);
        this.state = {

            name:'',
            tagline: '',
            description: '',
            brewer_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
       this.handleInputChange = this.handleInputChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleInputChange =(event)=>{
            const {target} = event
            const {value, name } = target
            this.setState({
                [name]:value
            });
        }

    handleSubmit =(event) =>{
        alert('A name was submitted: ' + this.state.value);
         event.preventDefault();
    }

         async componentDidMount(){
             try{
                 let res = await axios.post(
                     `http://localhost:3000/beers/new`
                 );
                 let beernew = res.data;
                 console.log(res.data)
                 //this.setState({beernew})
             }catch(error){
                 console.log('algo salio mal', error)
             }
        }
      sayHI(){
      alert('prueba de click realizada con exito')
  }
  render() {
    return (
      <div>
        <Menu />
        <h1>Helo new Beer</h1>
        <Row onSubmit={this.handleSubmit}>
          <Input placeholder="Name" name='name' s={6} label="Name" value={this.state.name} onCHange={this.handleInputChange}/>
          <Input placeholder="Tagline" name='tagline' s={6} label="Tagline" value={this.state.tagline} onCHange={this.handleInputChange}/>
          <Input placeholder="Description" name='descritption' s={12} type='textarea' value={this.state.description} onCHange={this.handleInputChange}/>
          <Input placeholder="Brewer-tip" name='brewer_tips' s={6} label="tips" value={this.state.brewer_tips} onCHange={this.handleInputChange}/>
          <Input placeholder="attenuation" name='attenuation_level' s={6} label="level" value={this.attenuation_level} onCHange={this.handleInputChange}/>
          <Input placeholder="aported by"  name='contributed_by' s={12} label="aported By" value={this.contributed_by} onCHange={this.handleInputChange}/>
          <Button className="btn-add" 
           floating large 
           className='purple'
           waves='light' 
           icon='add'
           onClick={this.sayHI}
           type="submit" value="Submit"
           />
        </Row>
      </div>
    );
  }
 
}

export default NewBeer;
