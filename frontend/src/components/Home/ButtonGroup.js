import React from 'react'

import ButtonBases from './LandingButton'



const images = [
    {
      id:1,
      title: 'Breakfast',
      image:  'product_1.jpg',
      width: '25%',
    },
    {
      id:2,
      title: 'Burgers',
      image:  'product_2.jpg',
      width: '25%',
    },
    {
      id:3,
      title: 'Camera',
      image:  'product_3.jpg',
      width: '25%',
    },
    {
      id:4,
      title: 'Camera',
      image:  'product_4.jpg',
      width: '25%',
    },
  
  ];
  

const ButtonGroup= ()=> {
    return (

        <div>
     {images.map((button) =>{
         const a = require(`../../assets/img/products/${button.image}`)
    return (
        
         <div key={button.id}>          
                    <ButtonBases
                    key={button.id}
                    title={button.title}
                    a={a}
                    width={button.width}
                     />              
            </div>
           )})}
          </div> 
          )
}

export default ButtonGroup
