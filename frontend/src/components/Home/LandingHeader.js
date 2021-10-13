import { Grid, makeStyles} from '@material-ui/core'
import React from 'react'
import { Hidden } from '@material-ui/core'
import { whiteColor } from 'assets/jss/material-dashboard-react'



const useStyles = makeStyles((theme) => ({
      root:{
          backgroundImage: `url(${require("assets/img/landing.jpg")})`,
          backgroundPosition: 'center',
          backgroundSize:'cover',
          height:'300px',
          marginBottom: '-20px',
          [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${require("assets/img/landingm.jpg")})`,
          },
          [theme.breakpoints.down('xs')]: {
            marginBottom: '-20px',
          },
      
      },
      logo: {
          margin:15,
         
          height: 200,
        [theme.breakpoints.down('sm')]: {
            height: 100,
          },
        [theme.breakpoints.down('xs')]: {
          height: 80,
        },
    },
    logocontainer: {
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down('xs')]: {
          justifyContent: "center",
        },
  },
      text:{
          color: whiteColor,
          fontFamily: 'CriptoAdviserBold'
      },
      caja:{
         marginBottom: '10px'
      }
}))

function LandingHeader() {
    const classes = useStyles()

  // <Grid  item xl={8} xs={12} className={classes.caja}>
  //  <Grid container className={classes.logocontainer} >
  //   <img className={classes.logo} alt="logo" src={require("assets/img/Logo.png")}/>
  //   <img className={classes.logo} alt="logo" src={require("assets/img/logoblanco.png")}/>
  //  </Grid>
  // </Grid>
    
return (
           <Grid container 
           className={classes.root}
           direction="row"
           justifyContent="center"
           alignItems="center">
                 
                 <Hidden xsDown>
                <Grid  item  xs={12} className={classes.caja}>
                    <Grid container className={classes.logocontainer} >
                    <img className={classes.logo} alt="logo" src={require("assets/img/Logo3.png")}/>
               
                    </Grid>
                    
                </Grid>
                </Hidden>
                <Hidden smUp>
                <Grid  item xs={12} className={classes.caja}>
                    <Grid container className={classes.logocontainer} >
                    <img className={classes.logo}  alt="logo" src={require("assets/img/Logo3.png")}/>
               
                    
                    </Grid>
                    
                </Grid>
                </Hidden>
                
               
               
           </Grid>
    )
}

export default LandingHeader
