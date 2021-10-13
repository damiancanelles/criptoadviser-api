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
   
      text: {
          textAlign:'none',
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
        margin: 10,
        
      },
   
}))

export default function LendingButton() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
 
 
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        
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
        <Fade  in={open}>
        
        <div className={classes.paper}>
        <Alert style={{"borderRadius":"24px","marginBottom":"10px","padding":"5px"}} severity="info">Para acceder a este servicio pongase en contacto con el siguiente miembro de nustro equipo el lo atendera lo mas rapido posible.</Alert>
      <ModalContact  ></ModalContact>
    
          </div>
        </Fade>
      </Modal>
        <Grid className={classes.gridtext}
        item 
        md={6}
        sm={12}>
          <Grid container  alignItems="center" justifyContent="center">
          <h1 style={{marginBottom:"10px"}} className={classes.text}>Servicios de Lending</h1>
          <h4 style={{margin: 0}}>Nuestro servicio de lending consiste en un contrato de préstamo
           a nuestro grupo de traders, por el cual usted recibe mensualmente un 20% de su inversión, 
           los contratos se procesan hasta el día 10 del mes y los pagos se efectúa el día 12 de cada mes.
            Este servicio incluye un Contrato legal además de identificación por KYC, permitiendo asegurar 100% la inversión de nuestros miembros.</h4>
          <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={()=>{handleOpen()}} variant="contained" color="primary">Contactenos</Button></Grid>
          </Grid>
        </Grid>
        <Grid item 
        md={6}
        sm={12}>
              <Grid container justifyContent="center">
               
              <img   
              alt="img"
              className={classes.image2}
              src={require(`assets/img/lending1.jpg`)}></img>
              </Grid>
          </Grid>
      </Grid>
    )
}