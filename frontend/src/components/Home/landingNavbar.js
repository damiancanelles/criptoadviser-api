import React from 'react';
import{
    makeStyles

}from '@material-ui/core'
import  PropTypes  from 'prop-types';
import Menu from './Menu';
import LanAppBar from './LanAppBar';


const useStyles = makeStyles(theme =>({
        root: {
            display: 'flex',
        },
      
        toolbar: theme.mixins.toolbar,

}));

const LandingNavBar = () =>{
    const classes = useStyles();
    const [abrir, setAbrir] = React.useState(false);

const accionAbrir = ()=>{
    setAbrir(!abrir)
}    

    return(
        <div className={classes.root}>
            <LanAppBar accionAbrir={accionAbrir}/>
           
            
            <Menu
               variant="temporary" 
            
               open={abrir}
               onClose={accionAbrir } />
            
          
          </div>       
     

    )
}
LandingNavBar.propTypes= {
    abrir: PropTypes.bool,
    accionAbrir: PropTypes.func,
}
export default LandingNavBar;