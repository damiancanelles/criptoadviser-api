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
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            paddingBottom: 15  ,
          },
      },
      image2: {
        height: '310px',
        margin: `5%`,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        margin: 0,
        },
      },
   
      text: {
          margin: 0,
      },
      buttom: {
        [theme.breakpoints.down('xs')]: {
        margin: 10,
        },
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
        <Grid style={{"paddingLeft":"4%","paddingRight":"4%","paddingBottom":"4%"}}
        item 
        md={6}
        xs={12}>
          <h1 style={{marginBottom:"10px"}} className={classes.text}>Servicios de Lending</h1>
          <h4 className={classes.text}>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h4>
          <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={()=>{handleOpen()}} variant="contained" color="primary">Contactenos</Button></Grid>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
          <img   alt="img"
                 className={classes.image2}
                 src={require(`assets/img/lending.jpg`)}
               ></img>
          </Grid>
      </Grid>
    )
}