import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import  PropTypes  from 'prop-types';
import { ButtonGroup, Grid, Hidden} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import DropDownServicios from './DropDown';
import { Link } from 'react-router-dom';
import { whiteColor } from 'assets/jss/material-dashboard-react';
import useAuth from 'auth/useauth';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Notificaciones from './Notificaciones';
import UserIcon from '@material-ui/icons/PersonOutlined'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appbar: {
    backgroundColor: '#030523',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  title: {
    
    textTransform:"none",
    fontSize:'20px'

  },
  logo:{
      height:'30px',
  },
  button1: {
    color: whiteColor,
    marginRight: theme.spacing(2),
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  

  },
  button2: {
    textTransform: 'none',
  },
  title2: {

    textTransform:"none",
    fontSize:'18px'
  },
  grupo: {
    marginLeft: 20,
    alignItems: "center",
  }
 
}));

 function LanAppBar (props) {
  const [user,setuser] = useAuth();  
  const classes = useStyles();
  
  

  function logout(e) {
    e.preventDefault();

    setuser({
      name: null,
      token: null,
      subscription: null,
      userid: null
    });
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('subscription');


  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
     
        <Toolbar>
        <Link to="/inicio">
        <Grid container alignItems="center">
        <img className={classes.logo} alt="logo" src={require("assets/img/logonavbar.png")}></img>
        </Grid>
        </Link>
          <Hidden smDown>
           <Grid item xl={10} lg={9} md={8} >
            
            <Grid container alignItems="center">
                <ButtonGroup className={classes.grupo}> 
                <Link to="/inicio">
                <Button color="inherit" variant='text'  className={classes.button1}  > Inicio </Button>
                </Link>
                <DropDownServicios></DropDownServicios>
                <Link to="/freelancers">
                <Button color="inherit" variant='text'  className={classes.button1} > Freelancers </Button>
                </Link>
                <Link to="tienda">
                <Button color="inherit" variant='text'  className={classes.button1} > Tienda </Button>
                </Link>
                <Link to="/nosotros">
                <Button color="inherit" variant='text'  className={classes.button1} > Nosotros </Button>
                </Link>
                </ButtonGroup>
            </Grid>
            </Grid>
            </Hidden>
            <Hidden xsDown>
          <Grid item xl={2} lg={3} md={4}  sm={11} >  
            <Grid container alignItems="center" justifyContent='flex-end'>
           
          
          {user.name == null ? 
          <ButtonGroup className={classes.grupo}> 
          <Link to="/login">
           <Button color="inherit" variant='text'  className={classes.button1} > Iniciar sesión </Button>
           </Link>
           <Link to="/registro">
           <Button color="inherit" variant='text'  className={classes.button1} > Registrarse</Button>
           </Link>
          </ButtonGroup> : 
          <ButtonGroup className={classes.grupo}> 
          <Hidden smDown>
            <Link to='/user' style={{color: 'white'}}>
            <IconButton color='inherit'>
              <UserIcon  />
            </IconButton>
            </Link>
          <Notificaciones></Notificaciones>
          </Hidden>
           {user.role === "admin" ? <Link to="/admin/users">
           <IconButton color="inherit" variant='text' style={{margin:0}} className={classes.button1} ><SettingsIcon></SettingsIcon> </IconButton>
           </Link> : null}
           
           <IconButton onClick={(e) => {logout(e)}} color="inherit" variant='text' style={{margin:0}} className={classes.button1} ><ExitToAppIcon></ExitToAppIcon></IconButton>
           
          </ButtonGroup>
          }
           
           
             
           </Grid>
           </Grid>
           </Hidden> 
           <Hidden mdUp>
           <Grid item  xs={12} sm={1}>
           <Grid container alignItems="center" justifyContent='flex-end'>
             <Hidden smUp>
             {user.name === null ? <Link to="/login">
           <Button color="inherit" variant='text'  className={classes.button1} > Iniciar sesión </Button>
           </Link> : null}
             </Hidden>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
             onClick={() => props.accionAbrir()}>
              <MenuIcon/>
            </IconButton>
            </Grid>
            </Grid>
            </Hidden>
        </Toolbar>
 
      </AppBar>
    </div>
  );
}
LanAppBar.propTypes = {
  accionAbrir: PropTypes.func,
}
export default LanAppBar;