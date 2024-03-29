import {Grid, Hidden, makeStyles} from '@material-ui/core'
import React from 'react'




const useStyles = makeStyles((theme) => ({
      root:{
          backgroundImage: `url(${require("assets/img/curso.jpg")})`,
          backgroundPosition: 'center',
          backgroundSize:'cover',
          height:'200px',
          marginBottom: '-20px',
          
          [theme.breakpoints.down('xs')]: {
            marginBottom: '-20px',
          },
      
      },
      logo: {
          height: 100,
          marginLeft: 40,
          [theme.breakpoints.down('xs')]: {
            height: 80,
            marginLeft: 0,
          },
      },
      logocontainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
          },
    },
      text:{
          color: '#030523',
          textAlign: "justify",
          fontFamily: 'CriptoAdviserBold',
          [theme.breakpoints.down('xs')]: {
            color: '#030523',
          },
      },
      caja:{
         marginBottom: '10px'
      }
}))

function CursoHeader() {
    const classes = useStyles()


    return (
           <Grid container 
           className={classes.root}
           direction="row"
           justifyContent="center"
           alignItems="center">
                
                <Hidden xsDown>
                <Grid  item xs={12} className={classes.caja}>
                    <Grid container className={classes.logocontainer} >
                    <img className={classes.logo} alt="logo" src={require("assets/img/Logo3.png")}/>
                    </Grid>
                    
                </Grid>
                </Hidden>
                <Hidden smUp>
                <Grid  item xs={12} className={classes.caja}>
                    <Grid container className={classes.logocontainer} >
                    <img className={classes.logo} alt="logo" src={require("assets/img/Logo3.png")}/>
                    </Grid>
                    
                </Grid>
                </Hidden>
                
               
           </Grid>
    )
}

export default CursoHeader
