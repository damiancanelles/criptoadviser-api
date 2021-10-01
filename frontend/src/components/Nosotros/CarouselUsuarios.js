import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import { useHistory } from 'react-router';
import useFreelancer from 'context/usefreelancer';
import { infoColor } from 'assets/jss/material-dashboard-react';
import { blue } from '@material-ui/core/colors';

const responsive = {
  
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const useStyles = makeStyles((theme) => ({
  carousel:{
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    marginBottom: 5,
    },
  },
  carouselitems:{
  },
  root: {
    marginBottom: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 280,
    width: '100%',
  },
  grid: {
    backgroundImage: `url(${require("assets/img/nosotros/Fondo.jpg")})`,
    backgroundPosition: 'center',
    backgroundSize:'cover',
    borderRadius: 24,
    padding: 10,
    [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingBottom: "4%",
      },
  },
  image: {
    height: 300
 },
 name: {
     color: "blue",
     fontFamily: "CriptoAdviserAceSans !important",
 }
}));

const users = [
    {
        image: 'Adrian.png',
        name: "Adrian Avila",
        age: 26,
        description: "Arquitecto, profesor de la UCLV, natural de Santa Clara. Se desempeña como diseñador gráfico del proyecto y ha encontrado en el trading una nueva pasión.",
    },
    {
        image: "Ernesto.png",
        name: "Ernesto Alarcón ",
        age: 25,
        description: "Marinero mercante, desarrolla el cargo de Timonel; natural de Cienfuegos. Se desempeña como director ejecutivo y capacitador en la materia del trading, donde encontró un nuevo estilo de vida.",
    },
    {
        image: "Hector.png",
        name: "Héctor León  ",
        age: 19,
        description: "Estudiante universitario, natural de Cárdenas, Matanzas. Se desempeña en un proyecto como Gestor de marketing y publicista, con conocimientos de redes sociales y relaciones públicas. Considera que ha llegado al mundo de las criptomonedas para quedarse. ",
    },
    {
        image: "Jorgito.png",
        name: "Jorge Luis Morón ",
        age: 27,
        description: "Enfermero, se desempeña como trabajador de la salud, natural de Morón, Ciego de Ávila. Radica en la empresa como promotor en redes sociales y publicista. Considera el trading una esperanza en el futuro de los jóvenes.",
    },
    {
        image: "Leonardo.png",
        name: "Leonardo Rodríguez",
        age: 25,
        description: "Psicólogo egresado de la UCLV, natural de Placetas y residente en Santa Clara. Se desempeña en el departamento de Economía y Planificación. Le apasionan las artes y la naturaleza.",
    },
    {
        image: "Otniel.png",
        name: "Otniel Gómez",
        age: 27,
        description: "Ingeniero en Telecomunicaciones y electrónica, se desarrolla como especialista de redes e informática de la UCLV. Se desempeña en el proyecto como planificador docente y encargado de soporte. Atraído al mundo de las criptos por la tecnología Blockchain y su potencial.",
    },
    {
        image: "Stefan.png",
        name: "Stefan Castro ",
        age: 20,
        description: "Estudiante de Licenciatura en Turismo, natural de Matanzas. Se desempeña en el proyecto como gestor de marketing y publicista. Ha encontrado en las criptomonedas la oportunidad de superarse.",
    },
]

export default function CarouselUsuarios() {
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
        
            <Carousel 
            ssr
            responsive={responsive}
            containerClass={classes.carousel}
            itemClass={classes.carouselitems}>
            {users.map((element,key) => {
          return (
            
              <Grid key={key} container alignItems="center" justifyContent="center" className={classes.grid}>
                <Grid item lg="3" md="4" sm="5">
                    <img alt={element.name} src={require(`assets/img/nosotros/${element.image}`)} className={classes.image}></img>
                </Grid>
              <Grid lg="7" md="6" sm="6" style={{width:"100%"}}>
                  <Grid container alignItems="center" spacing="2">
                  <h3 className={classes.name} style={{margin:0,marginRight:10,marginLeft:5}}>{element.name}</h3>
                  <h4 style={{margin:0}}>({element.age} años)</h4>
                  </Grid>
                  <h4 style={{margin:0,marginTop:5}}>{element.description}</h4>
              </Grid>
              
              </Grid>
        
      )})}
    </Carousel>
  
      
      
    </div>
  );
}
