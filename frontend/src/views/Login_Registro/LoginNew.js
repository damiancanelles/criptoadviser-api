import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'assets/img/Logo.png'
import useAuth from 'auth/useauth';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { infoColor } from 'assets/jss/material-dashboard-react';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import {Helmet} from "react-helmet"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/inicio" style={{color:infoColor[0]}}>
        CriptoADVISER
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflow: 'auto'
  },
  logo:{
      height: 80,
      margin: theme.spacing(1),

  },
  image: {
    
    backgroundImage: `url(${require("assets/img/Login.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [,setuser] = useAuth();
  const [error, seterror] = React.useState(false);
  const [texterror, settexterror] = React.useState("");
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [stop, setstop] = React.useState(false);
  const h = window.screen.height-143;

  async function login(e) {
    e.preventDefault();
    setstop(true);

    const info = {
      user: username,
      password: password
    }

    await axios.post("https://criptoadviser.com/api/users/login",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then((res) => {
      if (res.data.message == "null") {
        setuser(res.data.userinfo);
        sessionStorage.setItem('userid',res.data.userinfo.id);
        sessionStorage.setItem('token',res.data.userinfo.token);
        sessionStorage.setItem('name',res.data.userinfo.name);
        sessionStorage.setItem('subscription',res.data.userinfo.subscription);
        sessionStorage.setItem('role',res.data.userinfo.role);
        sessionStorage.setItem('telegramuser',res.data.userinfo.telegramuser);
        setstop(false);
        history.push("/inicio")
      }
      else {
        seterror(true);
        setstop(false);
        settexterror(res.data.message)
      }
    })
  }

  return (
    <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue"/>}>
      <Helmet>
                <title>Login</title>
                <meta name="description" content="Nuestro login." />
            </Helmet>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}  className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Grid container alignItems="center" justifyContent="center">
        <Grid item className={classes.paper}>
         
         <Link to="inicio">
         <img src={Logo} className={classes.logo}/>
         </Link>

         <Typography component="h2" variant="h6">
         Iniciar Sesión
         </Typography>
         <form className={classes.form} noValidate>
           <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="ussername"
             label="Usuario"
             name="username"
             value={username}
             onChange={(e) => {setusername(e.target.value)}}
             autoFocus
           />
           <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="current-password"
             value={password}
             onChange={(e) => {setpassword(e.target.value)}}
           />
           <Collapse in={error}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                seterror(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         
            <strong>{texterror}</strong>
            
        </Alert>
      </Collapse>
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
             onClick={(e) => {login(e)}}
           >
           Iniciar Sesión
           </Button>
           <Grid container justifyContent="center">
             <Grid item>
               <Link to="/registro" style={{color: "black"}}>
                 {"No tienes una cuenta? Registrarse"}
               </Link>
             </Grid>
           </Grid>
           <Box mt={5}>
             <Copyright />
           </Box>
         </form>
       </Grid>
        </Grid>
      </Grid>
    </Grid>
    </BlockUi>
  );
}