import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardProduct from './CardProduct';

import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';






const useStyles = makeStyles((theme) => ({
    gridproductos: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
        paddingRight: 5,
          },
    },
    productos: {
        padding: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
          },
    },
    acordion: {
        backgroundColor: 'white',
        margin: 5,
        
      },
      grid: {
        padding: 5,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
          },
      },
      gridquestions: {
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 40,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          padding: 0,
        },
      },
}))


function TiendaBody() {
    const classes = useStyles();
    const [data, setdata] = React.useState([])
    const asd = async () => {
      const result = await axios.get("https://criptoadviser.com/api/products",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
      setdata(result.data)  
    };
  
    React.useEffect( () => {
      
      asd();
    },[])
    
    return (
        <div  id='caja'>
         <Grid container className={classes.gridproductos} >
         {data.map((product,key) => {
            return(
              <Grid key={key} pagi item className={classes.productos} lg={3} md={4} xs={12} sm={6} xl={3}  >
                 
                    <CardProduct descripcion={product.descripcion} img={product.image} name={product.name} price={product.price}></CardProduct>
                 
              </Grid>
              
            )
          })}
          
         
             
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
          <Typography className={classes.heading}>Que es el Treiding?</Typography>
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
         </Grid>
                
        </div>
        
    )
}

export default TiendaBody
