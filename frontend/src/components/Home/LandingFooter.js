import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, ButtonGroup } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';





const useStyles = makeStyles((theme) => ({
    
  footer: {
    alignItems:"center",
    justifyContent: "space-between",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 60,
      paddingRight: 60,
      backgroundColor: '#030523',
      backgroundPosition: 'center',
      backgroundSize:'cover',
      [theme.breakpoints.down('xs')]: {
        direction: "column",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
      },
  },
  footertext: {
    color: '#FFFFFF',
    margin: 0,
  },
  footertext1: {
    color: '#FFFFFF',
    margin: 0,
    marginRight:"30px",
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  
  footergrid1: {
    justifyContent:"flex-start",
    alignItems:"center",
    [theme.breakpoints.down('xs')]: {
      justifyContent:"center",
    },
  },
  footergrid2: {
    justifyContent:"flex-end",
    alignItems:"center",
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      justifyContent:"center",
    },
  },
}))


function LandingFooter() {
    const classes = useStyles();
  

    
    return (
        
      <Grid container className={classes.footer}>
      <Grid  item  >
        <Grid container direction="row" className={classes.footergrid1}>
        <h4  className={classes.footertext1}>Nuestras Redes</h4>
        <ButtonGroup>
        <IconButton className={classes.footertext}><WhatsAppIcon></WhatsAppIcon></IconButton>
        <IconButton className={classes.footertext}><TelegramIcon></TelegramIcon></IconButton>
        <IconButton className={classes.footertext}><FacebookIcon></FacebookIcon></IconButton>
        <IconButton className={classes.footertext}><InstagramIcon></InstagramIcon></IconButton>
        <IconButton className={classes.footertext}><TwitterIcon></TwitterIcon></IconButton>
        </ButtonGroup>
        </Grid>
        
       
        
        </Grid>
      <Grid  item   >
      <Grid container direction="row" className={classes.footergrid2}>
      <p className={classes.footertext}>@ CriptoADVISER</p>
      </Grid>
      
      
        
        </Grid>
      </Grid>     
        
        
    )
}

export default LandingFooter
