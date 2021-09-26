import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import "react-multi-carousel/lib/styles.css";

import ModalCreateTransaccion from 'components/Modals/modalcreatetransaccion';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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
        paddingTop: 35  ,
        paddingBottom: 15  ,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
          },
      },
      image2: {
        height: '310px',
        margin: 0,
        [theme.breakpoints.down('xs')]: {
          height: "auto",
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

export default function CursoButton() {
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
        <Fade in={open}>
        <div className={classes.paper}>
        <form
      autoComplete="off"
      noValidate
      
    >
      <ModalCreateTransaccion setOpen={setOpen} ></ModalCreateTransaccion>
    </form>
          </div>
        </Fade>
      </Modal>
        <Grid style={{"paddingLeft":"4%","paddingRight":"4%","paddingBottom":"4%"}}
        item 
        md={6}
        xs={12}>
          <h1 style={{marginBottom:"10px"}} className={classes.text}>Curso de Traiding</h1>
          <h4 className={classes.text}>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h4>
          <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={() => {handleOpen()}} variant="contained" color="primary">Suscribirse</Button></Grid>
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