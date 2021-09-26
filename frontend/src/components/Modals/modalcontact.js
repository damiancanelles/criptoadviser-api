import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  
    Button,
    Card,

    Grid,
    Hidden,

  } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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
        width: 200,
    },
    footertext: {
        color: '#FFFFFF',
        margin: 0,
      },
}))

const ColorButton = withStyles((theme) => ({
    root: {
      borderRadius: '24px',
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
   
  }))(Button);

export default function ModalContact() {
    const classes = useStyles();
    

    return(
        <Card className={classes.card}>
        <Grid container alignItems="center" justifyContent="center">
            <Grid item md={4} sm={12} xs={12}>
            <Grid container alignContent="center" justifyContent="center">
            <img className={classes.contactimg} alt='contactimage' src={require("assets/img/contacto.png")}></img>
            </Grid>
            </Grid> 
            <Grid item md={6} sm={12} xs={12}>
            <Hidden mdUp>
            <Grid direction="column" container alignContent="center" justifyContent="center">
            <h3 className={classes.text}>Adrian Diaz</h3>
            <h3 className={classes.text2}>Director Creativo</h3>
            <h4 className={classes.text}>Numero de Telefono:</h4>
            <h4 className={classes.text}>+5355188776</h4>
            <h4 className={classes.text}>Redes: <IconButton className={classes.footertext}><WhatsAppIcon></WhatsAppIcon></IconButton>
        <IconButton className={classes.footertext}><TelegramIcon></TelegramIcon></IconButton>
        <IconButton className={classes.footertext}><FacebookIcon></FacebookIcon></IconButton>
        </h4>
        <h4 className={classes.text}><IconButton className={classes.footertext}><InstagramIcon></InstagramIcon></IconButton>
        <IconButton className={classes.footertext}><TwitterIcon></TwitterIcon></IconButton></h4>
            </Grid>
            </Hidden>
            <Hidden smDown>
            <Grid direction="column" container alignContent="center" justifyContent="center">
            <h3 className={classes.text}>Adrian Diaz</h3>
            <h3 className={classes.text2}>Director Creativo</h3>
            <h4 className={classes.text}>Numero de Telefono: +5355188776</h4>
            <h4 className={classes.text}>Redes: <IconButton className={classes.footertext}><WhatsAppIcon></WhatsAppIcon></IconButton>
        <IconButton className={classes.footertext}><TelegramIcon></TelegramIcon></IconButton>
        <IconButton className={classes.footertext}><FacebookIcon></FacebookIcon></IconButton>
        <IconButton className={classes.footertext}><InstagramIcon></InstagramIcon></IconButton>
        <IconButton className={classes.footertext}><TwitterIcon></TwitterIcon></IconButton></h4>
            </Grid>
            </Hidden> 
            </Grid>    
        </Grid>
        </Card>
    )
}
