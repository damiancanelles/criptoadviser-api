import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ReactPlayer from 'react-player';
import Carousel from 'react-material-ui-carousel'
import "react-multi-carousel/lib/styles.css";
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

const images = [
  {
    url: 'hoteles.jpg',
    title: 'Rebaja en Hoteles',
    width: '100%',
  },
  {
    url: 'taxis.jpg',
    title: 'Servicio de Taxis en toda Cuba',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  {
    url: 'recargas.jpg',
    title: 'Recargas con descuento',
    width: '100%',
  },
  
];

const useStyles = makeStyles((theme) => ({
  items: {
    width: "100%",
  },
  carousel:{
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  root2: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      
    },
  },
  root: {  
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  gridcontainer: {
    paddingLeft: 80,
    paddingRight: 80,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    paddingRight: 0,
    },
  },
  grid: {
    padding: 30,
    [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
  },
  image2: {
    width: '80%',
    margin: `5%`,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    margin: 0,
    },
  },
  buttom:{
    "padding-left":"30px",
    [theme.breakpoints.down('xs')]: {
      "padding-left":"0px",
    },
  },
  image: {
    position: 'relative',
    height: 300,
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
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
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [index,setindex] = React.useState(0);
  const asd = require('assets/media/cover.jpeg')

  return (
    
    <div className={classes.root}>
      

        <Grid
            container
            className={classes.gridcontainer}
          >
      <Carousel
      timeout={500}
      className={classes.carousel}
       >
      {images.map((image) => (
            
            <div>
              
            <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: image.width,
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${require(`assets/img/${image.url}`)})`,
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
            {image.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
           
            </div>
      
    ))}
      </Carousel>
      
      
      
      </Grid>
      <div className={classes.root2}>
      <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        container 
        md={12}
        xs={12}>
          <h1 style={{'margin':'0px'}} >Servicios Independientes</h1>
          <p>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</p>
        </Grid>
      <Grid container justifyContent="flex-start" className={classes.buttom}>
      <Button disabled={index == 0} style={{"margin-left":"30px","margin-right":"30px"}} onClick={() => setindex(0)}>Curso de Trading</Button>
      <Button disabled={index == 2} style={{"margin-left":"30px","margin-right":"30px"}} onClick={() => setindex(2)}>Señales</Button> 
      <Button disabled={index == 1} style={{"margin-left":"30px","margin-right":"30px"}} onClick={() => setindex(1)}>Servicio de Lending</Button> 
      </Grid>
      <Collapse in={index == 0}>
      <Grid container className={classes.grid} alignItems="center">
        <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        item 
        md={6}
        xs={12}>
          <h1>Curso de Trading</h1>
          <h3>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h3>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
          <img 
                 className={classes.image2}
                 src={require(`assets/img/curso.png`)}
               ></img>
          </Grid>
      </Grid>
      </Collapse>
      <Collapse in={index == 1}>
      <Grid container className={classes.grid} alignItems="center">
        <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        item 
        md={6}
        xs={12}>
          <h1>Servicios de Lending</h1>
          <h3>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h3>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
          <img 
                 className={classes.image2}
                 src={require(`assets/img/lending.jpg`)}
               ></img>
          </Grid>
      </Grid>
      </Collapse>
      <Collapse in={index == 2}>
      <Grid container className={classes.grid} alignItems="center">
        <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        item 
        md={6}
        xs={12}>
          <h1>Señales</h1>
          <h3>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h3>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
          <img 
                 className={classes.image2}
                 src={require(`assets/img/señales.jpg`)}
               ></img>
          </Grid>
      </Grid>
      </Collapse>
      <Grid container className={classes.grid} alignItems="center">
      <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        item 
        md={7}
        xs={12}>
         <ReactPlayer
         controls='true'
         config={{
          file: { 
            attributes: { 
              poster: asd 
            } 
          } 
        }}
          url={require('assets/media/rick.mkv')}
          className="react-player"
          width="90%"
        />
          </Grid>
        <Grid style={{"padding-left":"4%","padding-right":"4%"}}
        item 
        md={5}
        xs={12}>
          <h2>Señales</h2>
          <h4>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h4>
        </Grid>
        
      </Grid>
    </div>
    </div>
  
  );
}
