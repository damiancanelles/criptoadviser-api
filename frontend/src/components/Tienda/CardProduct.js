import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ModalProduct from 'components/Modals/modalproduct';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '24px',
  },
  root: {
    maxWidth: 345,
    borderRadius: '24px',
    '&:hover': {
        boxShadow: "5px 10px 20px 1px rgba(26, 21, 21, 0.452) !important",
        transition: "all 0.4s linear",
        zIndex: 1,
      
    },
  },
  media: {
    margin: "0px",
    height:"240px",
    backgroundPosition: 'center',
    backgroundSize:'cover',
    
    '&:hover': {
        
        zIndex: 1,
      '& $hiddenbutton': {
        opacity: 1,
        transition: "all 0.4s linear",
      },
      
      
    },
  },
  header: {
    height:"100%",
    
  },
  hiddenbutton: {
    opacity: 0,
  },
  price:{
    margin: 0,
   

  },
}));

export default function CardProduct({img,name,price,descripcion,link}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    
    <Card className={classes.root}>
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
       
      <ModalProduct link={link} img={img} price={price} name={name} descripcion={descripcion} setOpen={setOpen} ></ModalProduct>
    
          </div>
        </Fade>
      </Modal>
        <CardMedia
          style={{
            backgroundImage: `url(${img})`}}
          component="span"
          className={classes.media}
          
          title={name}
        >
            <Grid className={classes.header} container  justifyContent="center" alignItems="center">
            <Button onClick={() => {handleOpen()}} className={classes.hiddenbutton} color="primary" variant="contained"> Vista Previa </Button>
            </Grid>
        </CardMedia>

          <Grid container  style={{padding:"24px"}}>
          <Grid item md={12} sm={12} xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
            
              
            <Typography style={{margin: "0px"}}  variant="h6" component="h2">
                {name}
            </Typography>
            
            
           
           
            <Typography className={classes.price}  variant="h5" component="h2">
                {price}$
            </Typography>
            
            
            </Grid>
          </Grid>
          
            
           
            
          
          </Grid>
      
      
    </Card>
  );
}