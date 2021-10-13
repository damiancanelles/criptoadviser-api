import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
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
    marginBottom: 20,
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
   
    padding: 10,
    [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
        padding: 5,
      },
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    borderRadius: '24px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  

  },
  imageBackdrop: {
    borderRadius: '24px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    
    borderRadius: '24px',
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  subtitle: {
    padding: "0 4%",
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}));

const servicios = [
    {
        image: "servicio1.jpg",
        titulo: "servicio1"
    },
    {
        image: "servicio2.jpg",
        titulo: "servicio2"
    },
    {
        image: "servicio3.jpg",
        titulo: "servicio3"
    },
    {
        image: "servicio4.jpg",
        titulo: "servicio4"
    },
]

export default function CarouselServicios() {
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
        
            <Carousel 
            ssr
            responsive={responsive}
            containerClass={classes.carousel}
            itemClass={classes.carouselitems}>
            {servicios.map((image,key) => {
           const a = image.image
          return (
            
              <Grid key={key} container className={classes.grid}>
                
              <ButtonBase
          focusRipple
          
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "100%",
          }}
        >
     
          <span
            className={classes.imageSrc}
            style={{
           
              backgroundImage: `url(${require(`assets/img/servicios/${a}`)})`,
            }}
            
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.titulo}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
              
              </Grid>
        
      )})}
    </Carousel>

    <Grid 
            container  
            direction="row"
            justifyContent="center"
            alignItems="center">
    <Typography
              className={classes.subtitle}
              color="inherit"
            >
             CriptoADVISER es un proyecto Fintech del tipo 3 pensada para facilitarle la vida 
             a los criptoactivos debido a la cantidad de servicios que ofrecemos. Nos especializamos 
             en la rama de la capacitación, el Trading con criptomonedas y la industria de los servicios. 
             Tiene como objetivo principal dar a conocer el uso de las criptomonedas y mostrar la funcionalidad 
             de las mismas, que poco a poco comienzan a abrirse paso en el mundo financiero, convirtiéndose en 
             la principal estrategia económica de algunos países. Contamos con un excelente y preparado equipo 
             de profesionales capaces de guiarlos por el camino del éxito para que alcancen la verdadera libertad financiera.
            </Typography>
    </Grid>
      
    </div>
  );
}
