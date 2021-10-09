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
import { infoColor } from 'assets/jss/material-dashboard-react';

import axios from 'axios';
import { useHistory } from 'react-router';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import { InputAdornment } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalInfoBot from 'components/Modals/modalinfobot';
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import {Helmet} from 'react-helmet';
import ModalRegistro from 'components/Modals/modal_registro';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link style={{color:infoColor[0]}} to="/inicio">
        CriptoADVISER
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
  logo:{
      height: 80,
      margin: theme.spacing(1),

  },
  image: {
    height:'100vh',
    backgroundImage: `url(${require("assets/img/Login.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  modal: {
    display: 'flex',
    padding: 300,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: "2%",
    },
  },
  paper: {
    borderRadius: '24px',
  },
  paper1: {
    paddingTop: 20,
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

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  
  const [error, seterror] = React.useState(false);
  const [texterror, settexterror] = React.useState("");
  const [alert, setalert] = React.useState(false);
  const [textalert, settextalert] = React.useState("");
  const [email, setemail] = React.useState("");
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [tusername, settusername] = React.useState("");
  const [stop, setstop] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [ipon , set_Open] = React.useState(false);

  const handle_Open = ()=>{
     set_Open(true);
  }
  const handle_Close =()=>{
    set_Open(false)
    history.push("/login")
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const h = window.screen.height-143;

  async function register(e) {
    e.preventDefault();
    setstop(true);

    const info = {
      user: username,
      password: password,
      telegramuser: tusername,
      email: email
    }

    await axios.post("https://criptoadviser.com/api/users/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then((res) => {
      if (res.data.message === "null") {
        setalert(true)   
        settextalert("Usuario creado correctamente")
        setstop(false);
        handle_Open()
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
                <title>Registro</title>
                <meta name="description" content="Nuetro registro." />
            </Helmet>
    <Grid container component="main" className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className={classes.paper}>
        <ModalInfoBot  ></ModalInfoBot>
    
          </div>
        </Fade>
      </Modal>
      <Modal
       aria-labelledby="transition-modal-title"
       aria-describedby="transition-modal-description"
       className={classes.modal}
       open={ipon}
       onClose={handle_Close}

      >
         <Fade in={ipon}>
         <div className={classes.paper}>
         <ModalRegistro/>
         </div>
        
        </Fade>
      </Modal>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper1}>
         
          <Link to="/inicio">
          <img src={Logo} className={classes.logo} alt='' />
          </Link>

          <Typography component="h1" variant="h6">
           Registrarse
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="usuario"
                variant="outlined"
                required
                fullWidth
                id="nombre de usuario"
                label="Usuario"
                value={username}
                onChange={(e) => {setusername(e.target.value)}}
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => {setemail(e.target.value)}}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
              
                 InputProps={{
                  endAdornment: <InputAdornment  position="start">
                    <IconButton onClick={() => {handleOpen()}} style={{marginRight:-10}} ><InfoOutlinedIcon style={{color:"orange"}}></InfoOutlinedIcon></IconButton>
                  </InputAdornment>,
                }}
                variant="outlined"
                required
                fullWidth
                name="tusername"
                label="Telegram Username"
                id="password"
                value={tusername}
                onChange={(e) => {settusername(e.target.value)}}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {setpassword(e.target.value)}}
                autoComplete="current-password"
              />
              
            </Grid>
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
      <Collapse in={alert}>
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
         
            <strong>{textalert}</strong>
            
        </Alert>
      </Collapse>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {register(e)}}
          >
            Registrar
          </Button>
      
          <Grid container justifyContent="center">
            <Grid item>
              <Link style={{color:"black"}} to="/login">
                Ya tienes cuenta? Iniciar Sesión
              </Link>
            </Grid>
          </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </BlockUi>
  );
}