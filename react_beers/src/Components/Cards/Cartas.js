import React,{ Component } from 'react';
import {Card, CardTitle} from 'react-materialize';

class Carta extends Component{
    render(){
        return(
                <div className="row">
                <div className="col s4">
                <Card className='small' 
                    header={<CardTitle image='./images/all_beers.jpg'>All Beers</CardTitle>}
                    actions={[<a href='/beers/all'>Todas Las Chelas</a>]}>
                    Dale click aca para ir a todas las chelas
                </Card>
                </div>
                <div className="col s4">
                <Card className='small' 
                    header={<CardTitle image='./images/pivo.jpg'>Random Beer</CardTitle>}
                    actions={[<a href='/beers/random/'>Random Beer</a>]}>
                    Dale click aca para ir a una chela random
                </Card>
                </div>
        
                <div className="col s4">
                <Card className='small' 
                    header={<CardTitle image='./images/barrel.jpg'>Agrega una nueva Beer</CardTitle>}
                    actions={[<a href='/beers/new'>ADD New Beer</a>]}>
                    Agrega tus cervezas para hacer mas grande la base de datos
                </Card>
                </div>
                </div>
                
            
        )
    }
}

export default Carta;