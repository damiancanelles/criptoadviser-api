import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import ButtonE from './Button';


import CarouselItem from './CaruselItem';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';







const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  
  acordion: {
    backgroundColor: 'white',
    margin: 5,
    
  },
  grid: {
    marginTop: 10,
    marginBottom: 10,
  },
  gridquestions: {
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
  
}))


function FreelancersBody() {
    const classes = useStyles();
    const [data, setdata] = React.useState([])
    const asd = async () => {
      const result = await axios.get("https://criptoadviser.com/api/freelancers",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
      setdata(result.data)  
    };
  
    React.useEffect( () => {
      
      asd();
    },[])
    
    return (
      
        <div className={classes.root} id='caja'>
          
          <Carousel>
          {data.map((product,key) => {
            return(
              <CarouselItem 
              src={product.image} 
              title={product.titulo} 
              descripcion={product.descripcion.split(".")[0]}
              product={product}>
            </CarouselItem>
            )
          })}
            
          </Carousel>
          
        <Grid className={classes.grid} >
        <ButtonE ></ButtonE>
        </Grid>

        <Grid container justifyContent="center">
      <h1 style={{margin:"0px"}} >FAQ</h1>
      </Grid>
      <Grid className={classes.gridquestions} container direction="row" justifyContent="center">
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Como suscribirse?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Como contactarnos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion >
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Que es el Trading?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion >
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quienes somos?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
      </Grid>
         

        </div>
        
    )
}

export default FreelancersBody
