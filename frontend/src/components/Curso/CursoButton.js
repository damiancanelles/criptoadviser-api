import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import "react-multi-carousel/lib/styles.css";

import ModalCreateTransaccion from 'components/Modals/modalcreatetransaccion';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalNotificaciones from 'components/Modals/modalnotificaciones';

const useStyles = makeStyles((theme) => ({
  modal: {
    overflow: "scroll",
    padding: '80px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: "2%",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],

  },
  grid: {
    padding: 5,
    paddingLeft: "4%",
    paddingRight: "4%",
    [theme.breakpoints.down('xs')]: {
      padding: "0",
      paddingBottom: 15,
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


  text: {
    margin: 0,

    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },

  },
  gridtext: {
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  buttom: {
    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
  },
  modal2: {
    display: 'flex',
    padding: 300,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: "2%",
    },
  },

}))

export default function CursoButton({title,text,image,price,id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
    };

const handleClose2 = () => {
    setOpen2(false);
    };

  return (
    <Grid container className={classes.grid} justifyContent="center" alignItems="center">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal2}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
            <form
              autoComplete="off"
              noValidate

            >
              <ModalNotificaciones notificaciones={{content: "Para acceder a nuestro paquete de servicios usted necesita estar registrado en nuestro sitio web en caso de ya de estar registrado inicie sesion gracias por su visita."}}></ModalNotificaciones>
            </form>
          </div>
        </Fade>
      </Modal>
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
            <form
              autoComplete="off"
              noValidate

            >
              <ModalCreateTransaccion setOpen={setOpen} price={price} data={`curso_${id}`} ></ModalCreateTransaccion>
            </form>
          </div>
        </Fade>
      </Modal>
      <Grid className={classes.gridtext}
        item
        md={6}
        xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <h1 style={{ marginBottom: "10px" }} className={classes.text}>{title}</h1>
          <h4 style={{ margin: 0 }}>{text}
          </h4>
          {sessionStorage.getItem('name') ? <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={() => { handleOpen() }} variant="contained" color="primary">Suscribirse</Button></Grid> : <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={() => { handleOpen2() }} variant="contained" color="primary">Suscribirse</Button></Grid>}
        </Grid>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}>
        <Grid container justifyContent="center">
          <img alt="img"
            className={classes.image2}
            src={image}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}