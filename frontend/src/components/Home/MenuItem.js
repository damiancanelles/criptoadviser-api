import React from 'react';
import{
    List
   ,ListItem
   ,Divider,
   IconButton
} from '@material-ui/core'

import useAuth from 'auth/useauth';
import { makeStyles } from '@material-ui/core';
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
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
  }
 
}));

function MenuItem (){
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


  }

      return(
          <div>
              <List component='nav'>
                 <ListItem button>
                 <Link to="/inicio">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Inicio </Button>
                 </Link>
                 </ListItem>
                 <ListItem button>
                 <Link to="/curso">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Curso de Trading </Button>
                 </Link>
                 </ListItem> 
                 <ListItem button>
                 <Link to="/freelancers">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Freelancers </Button>
                 </Link> 
                 </ListItem>
                  <ListItem button>
                  <Link to="/tienda">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Tienda </Button>
                 </Link>
                 </ListItem>
                 <ListItem button>
                 <Link to="/nosotros">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Nosotros </Button>
                 </Link>
                 </ListItem>
                
                 
                 {user.name == null ? <div><ListItem button>
                   
                 <Link to="/login">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Iniciar Sesion </Button>
                 </Link>
                 </ListItem> 
                 <ListItem button>
                 <Link to="/registro">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Registrarse </Button>
                 </Link> 
                 </ListItem></div> : <div> 
                 <ListItem button>
                  <span style={{color: 'white'}}>
                 <Notificaciones/>
                 </span>
                 </ListItem>
                 <ListItem button>
                    <Link to='/user' style={{color: "white"}}>
                      <Button variant='text' style={{textTransform: 'none'}} color='inherit' endIcon={<UserIcon/>}>Perfil</Button>
                    </Link>
                 </ListItem>
                   {user.role === "admin" ? <ListItem button>
                 <Link to="/admin/users">
                 <Button color="inherit" variant='text'  className={classes.button1}  > Panel de Control </Button>
                 </Link>
                 </ListItem> : null} 
                 <ListItem button>
                 
                 <Button onClick={(e) => {logout(e)}} color="inherit" variant='text'  className={classes.button1}  > Desconectarse </Button>
                 
                 </ListItem></div> }  
                 <Divider/> 
              </List>
          </div>
      )
}
export default MenuItem;