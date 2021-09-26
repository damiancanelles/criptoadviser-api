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
        backgroundColor: 'transparent',
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
        width: "100%",
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



export default function ModalImage({image}) {
    const classes = useStyles();
    

    return(
        <Card className={classes.card}>
        <Grid container alignItems="center" justifyContent="center">
           
            <img className={classes.contactimg} alt='contactimage' src={image}></img>
               
        </Grid>
        </Card>
    )
}
