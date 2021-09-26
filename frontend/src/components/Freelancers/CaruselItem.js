import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import "react-multi-carousel/lib/styles.css";

import { whiteColor } from 'assets/jss/material-dashboard-react';
import { useHistory } from 'react-router';
import useFreelancer from 'context/usefreelancer';






const useStyles = makeStyles((theme) => ({
  
  carousel: {
    
    backgroundPosition: 'center',
    backgroundSize:'cover',
    height:'320px',
    padding: 40,
    marginBottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  text: {
    margin: 0,
    color: whiteColor,
  },
  
  
}))


function CarouselItem({title,descripcion,src,product}) {
    const classes = useStyles();
    const history = useHistory();
    const [,setfreelancer] = useFreelancer();
    
    
    return (
        
          <Grid style={{backgroundImage: `url(${src})`,}} container alignItems="center" className={classes.carousel}>
            <Grid item md={12} sm={12} xs={12}>
            <Hidden smDown>
            <h1 className={classes.text}>{title}</h1>
            <h3 className={classes.text}>{descripcion}</h3> 
            </Hidden>
            <Hidden mdUp>
            <h3 className={classes.text}>{title}</h3>
            <h5 className={classes.text}>{descripcion}</h5> 
            </Hidden>
            </Grid>
            <Grid container alignItems="center" justifyContent="flex-end">
              <Button onClick={()=>{
                setfreelancer(product);
                history.push("/freelancersview");
                }} variant="contained" color="primary">Accede Ahora</Button>
            </Grid>
            </Grid>
       
        
        
    )
}

export default CarouselItem
