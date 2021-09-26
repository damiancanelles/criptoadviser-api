import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import { grayColor } from 'assets/jss/material-dashboard-react';
import {Animated} from "react-animated-css";
import SeñalesButton from './SeñalesButton';






const useStyles = makeStyles((theme) => ({
    gridproductos: {
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
        paddingRight: 5,
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
      image2: {
        width: '80%',
        margin: `5%`,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        margin: 0,
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
      grid2: {
        borderRadius: 10,
        backgroundColor: '#030523',
        height: 80,
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 40,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          padding: 0,
        },
      },
      contactimage: {
          height: 80,
      },
      text: {
          margin: 0,
      },
      text2: {
        color: grayColor[0],
        margin: 0,
    },
    link: {
        textTransform: 'none',
    },
}))


function SeñalesBody() {
    const classes = useStyles();

    
    
    return (
      
        <div  id='caja'>
          
         <Grid container className={classes.gridproductos} >
         
         <Animated animationIn="fadeInLeft" animationInDuration="2000" animationOut="fadeOutLeft" animateOnMount={true} isVisible={true}>
          <SeñalesButton></SeñalesButton>
          </Animated>
        
           
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

export default SeñalesBody
