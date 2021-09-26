import React from 'react';
import CardExample from './CardExample';
import Imagen from '../../assets/img/lending.jpg'
import Imagen2 from '../../assets/img/recargas.jpg'
import Imagen3 from '../../assets/img/señales.jpg'
import Imagen4 from '../../assets/img/curso.png'
const cards = [
    {
        id: 1,
        title: 'Freelancers',
        image: Imagen,
        url: '#!',
        text: 'Damian verraco'
    },
    {
        id: 2,
        title: 'Tienda',
        image: Imagen2,
        url: '#!'
    },
    {
        id: 3,
        title: 'Servicios',
        image: Imagen3,
        url: '#!'
    },
    {
        id: 4,
        title: 'Lending',
        image: Imagen4,
        url: '#!'
    }
]

const Cards = () => {
     return(
         <div className="container d-flex justify-content-center align-items-center h-100">
           <div className="row">
            {
                cards.map(card =>(
                    <div className="col-md-3 col-xs-12 col-xl-3" key={card.id}>
                    <CardExample
                     title={card.title}
                     imageSource={card.image}
                     url={card.url}
                     text={card.text}/>
                    </div>    
                ))
            }
           </div>  
         </div>
     )
}

export default Cards