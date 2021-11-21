import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Hidden } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router";
import { styled } from '@material-ui/styles';
import imaAnuncio from 'assets/img/ya2.png'
import imaAnuncio2 from 'assets/img/ya1.png'

const AnuncioMobil = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${imaAnuncio2})`,
  backgroundSize: 'none',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '250px',
  marginRight: '20px',
  marginLeft: '20px',
  borderRadius: '20px'
}))


const Anuncio = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${imaAnuncio2})`,
  backgroundSize:  'none' ,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '250px',
  marginRight: '20px',
  marginLeft: '20px',
  borderRadius: '20px'
  
}))






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
  carousel: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      marginBottom: 20,
    },
  },
  logo: {
   
    marginLeft: 20,
    marginBottom: 20,
    height: 140,
  [theme.breakpoints.down('lg')]: {
      width: '85%',
      height: 80,
      
    },
  [theme.breakpoints.down('xs')]: {
    height: 40,
  },
},
anuncio:{
 justifyContent: 'center',
 alignContent: 'center',
 alignItems: 'center',
 marginTop: '20px',
 marginBottom: '20px',
 [theme.breakpoints.down('md')]: {
  height: 150,
  borderRadius: '5px'
},
 [theme.breakpoints.down('xs')]: {
  height: 120,
  borderRadius: '5px'
},
 
},
  carouselitems: {
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
  accede: {
    color: 'white',
    fontSize: '45px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '30px',
      
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  boton: {
      fontSize: '30px',
      border: 'solid 5px white',
      color: 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '15px',
        border: 'solid 2px white',
      },
  },
  

}));


export default function CarouselServicios({ servicios }) {

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>

      

        <Anuncio container className={classes.anuncio} spacing={2}>
          <Hidden smDown>
          <Grid item  md={3} lg={4} xl={4}>
           <img className={classes.logo} alt="logo" src={require("assets/img/logoblanco1.png")}/>
          </Grid>
          </Hidden>
          <Grid item xs={12} md={5} lg={4} xl={4}>
              <Typography  variant='h3' className={classes.accede}>
                Accede a nuestros servicios y conviértase en <b>Miembro Oficial</b>
              </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4}>
            <Grid container style= {{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Button variant='outlined' size='large' className={classes.boton}>Accede Ahora</Button>
           </Grid>
          </Grid>

        </Anuncio>

 

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
      <Carousel
        ssr
        responsive={responsive}
        containerClass={classes.carousel}
        itemClass={classes.carouselitems}>
        {servicios.map((image, key) => {
          const a = image.image
          return (

            <Grid key={key} container className={classes.grid}>
              {image.type === 'principal' ? <ButtonBase
                onClick={() => {
                  history.push(`serviciosprincipales/${image._id}`);
                }}
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

                    backgroundImage: `url(${a})`,
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
              </ButtonBase> : null}


            </Grid>

          )
        })}
      </Carousel>
    </div>
  );
}
