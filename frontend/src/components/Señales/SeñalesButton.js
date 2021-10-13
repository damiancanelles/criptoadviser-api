import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import "react-multi-carousel/lib/styles.css";

import { Alert } from '@material-ui/lab';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalContact from 'components/Modals/modalcontact';


const useStyles = makeStyles((theme) => ({

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
  grid: {
    padding: 5,
    paddingLeft: "4%",
    paddingRight: "4%",
    [theme.breakpoints.down('xs')]: {
        padding: "0",
        paddingBottom: 15  ,
      },
  },
  image2: {
    borderRadius: 24,
    width: "90%",
    [theme.breakpoints.down('sm')]: {
    padding: 10,
    borderRadius: 0,
    width: '100%',
    margin: 0,
    },
  },
  gridtext: {
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },

  text: {
    margin: 0,
   
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },
    
  },
  buttom: {
    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
  },

}))

export default function SeñalesButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.grid} justifyContent="center" alignItems="center">
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
            <Alert style={{ "borderRadius": "24px", "marginBottom": "10px", "padding": "5px" }} severity="info">Para acceder a este servicio pongase en contacto con el siguiente miembro de nustro equipo el lo atendera lo mas rapido posible.</Alert>
            <ModalContact  ></ModalContact>

          </div>
        </Fade>
      </Modal>
      <Grid className={classes.gridtext}
        item
        md={6}
        xs={12}>
           <Grid container  alignItems="center" justifyContent="center">
        <h1  style={{ marginBottom: "10px",  textTransform: 'none', }} className={classes.text}>Señales</h1>
        <h4 style={{margin: 0}}>Brindamos señales de más de 10 canales pagos,
         reunidas en nuestro canal privado, durante todo el día. Tenemos un promedio 
         de más de 50 señales al día.</h4>
        <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={() => { handleOpen() }} variant="contained" color="primary">Contactenos</Button></Grid>
           </Grid>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}>
        <Grid container justifyContent='center'>
          <img
            alt="img"
            className={classes.image2}
            src={require(`assets/img/señales.jpg`)}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}