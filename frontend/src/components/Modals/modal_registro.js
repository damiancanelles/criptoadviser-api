import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {
    Card,
    Grid
  } from '@material-ui/core';

import { whiteColor } from 'assets/jss/material-dashboard-react';
import { grayColor } from 'assets/jss/material-dashboard-react';


  const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: '24px',
        padding: 5,
        backgroundColor: '#030523',
    },
    text: {
        margin: 0,
        color: whiteColor,
    },
    text2: {
        margin: 0,
        color: grayColor[0],
    },
    image: {
        width:"350px",
    },
    section: {
        padding: 10,
    },
    icon: {
        paddingLeft: 5,
    },
    contactimg: {
        padding: 20,
        width: 150,
    },
    infotext: {
        paddingRight: 20,
        [theme.breakpoints.down('sm')]: {
            padding: 20,
            paddingTop: 0,
          },

    },
    footertext: {
        color: '#FFFFFF',
        margin: 0,
      },
}))



export default function ModalRegistro() {
    const classes = useStyles();
    

    return(
        <Card className={classes.card}>
        <Grid container alignItems="center" justifyContent="center">
            <Grid  item lg={3} md={4} sm={12} xs={12}>
            <Grid container alignContent="center" justifyContent="center">
            <img className={classes.contactimg} alt='contactimage' src={require("assets/img/Logo.png")}></img>
            </Grid>
            </Grid> 
            <Grid className={classes.infotext} item lg={9} md={8} sm={12} xs={12}>
            
            <Grid direction="column" container alignContent="center" justifyContent="center">
            <p style={{color:"white"}}>Su registro fue exitoso, se le ha enviado un correo de confirmacion</p>
            </Grid>
            
            
            </Grid>    
        </Grid>
        </Card>
    )
}
