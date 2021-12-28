import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { Box, ButtonGroup, Grid, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import moment from 'moment';
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

    textTransform: "none",
    fontSize: '20px'

  },
  logo: {
    height: '30px',
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

    textTransform: "none",
    fontSize: '18px'
  },
  grupo: {
    position: 'relative',
    display: 'flex',

  }

}));

function LanAppBar(props) {
  const [user, setuser] = useAuth();
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
    sessionStorage.removeItem('telegramuser');
    sessionStorage.removeItem('role');


  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Grid container alignContent='center' alignItems='center'>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
              <Link to="/inicio">
                <img className={classes.logo} alt="logo" src={require("assets/img/logonavbar.png")}></img>
              </Link>
            </Grid>
            <Hidden smDown>
              <Grid item xl={8} lg={8} md={7} >

                <Grid container alignItems="center" justifyContent='flex-start'>
                  <Link to="/inicio">
                    <Button color="inherit" variant='text' className={classes.button1}  > Inicio </Button>
                  </Link>
                  {moment(user.subscription) > moment() ? <Link to="/curso">
                    <Button color="inherit" variant='text' className={classes.button1}  > Curso de Trading </Button>
                  </Link> : null}
                  <Link to="/freelancers">
                    <Button color="inherit" variant='text' className={classes.button1} > Freelancers </Button>
                  </Link>
                  <Link to="tienda">
                    <Button color="inherit" variant='text' className={classes.button1} > Tienda </Button>
                  </Link>
                  <Link to="/nosotros">
                    <Button color="inherit" variant='text' className={classes.button1} > Nosotros </Button>
                  </Link>

                </Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xl={2} lg={2} md={3} sm={6} >
                <Grid container  direction='row' justifyContent='flex-end' >
                  {user.name == null ?
                    <div className={classes.grupo}>
                      <Link to="/login">
                        <Button color="inherit" variant='text' className={classes.button1} > Iniciar sesión </Button>
                      </Link>
                      <Link to="/registro">
                        <Button color="inherit" variant='text' className={classes.button1} > Registrarse</Button>
                      </Link>
                    </div> :
                    <div className={classes.grupo}>
                      <Link to='/user' style={{ color: 'white' }}>
                        <IconButton color='inherit'>
                          <UserIcon />
                        </IconButton>
                      </Link>
                      {user.role === "admin" ? <Link to="/admin/users">
                        <IconButton color="inherit" variant='text' style={{ margin: 0 }} className={classes.button1} ><SettingsIcon></SettingsIcon> </IconButton>
                      </Link> : null}
                      <IconButton onClick={(e) => { logout(e) }} color="inherit" variant='text' style={{ margin: 0 }} className={classes.button1} ><ExitToAppIcon></ExitToAppIcon></IconButton>
                    </div>
                  }
                </Grid>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={6} sm={2}>
                <Grid container alignItems="center" alignContent='center' justifyContent='flex-end'>
                  <Hidden smUp>
                    {user.name === null ? <Link to="/login">
                      <Button color="inherit" variant='text' className={classes.button1} > Iniciar sesión </Button>
                    </Link> : null}
                  </Hidden>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={() => props.accionAbrir()}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
LanAppBar.propTypes = {
  accionAbrir: PropTypes.func,
}
export default LanAppBar;