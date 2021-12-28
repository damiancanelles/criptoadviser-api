import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Helmet } from 'react-helmet';
import {
    Button,
    Card,
    Grid
  } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

  const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: '24px',
        padding: 20,
    },
    text: {
        margin: 0,
    },
    image: {
        width:"100%",
    },
    section: {
        padding: 10,
    },
    icon: {
        paddingLeft: 5,
    },
}))

const ColorButton = withStyles((theme) => ({
    root: {
      borderRadius: '24px',
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

export default function ModalProduct({setOpen,img,name,price,descripcion,link }) {
    const classes = useStyles();
    

    return(
        <Card className={classes.card}>
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={descripcion} />
            </Helmet>
        <Grid container alignItems="center" justifyContent="center">
            <Grid  item md={6} sm={12} xm={12}>
                <img className={classes.image} alt={name} src={img}></img>
            </Grid>
            <Grid className={classes.section} item md={6} sm={12} xm={12}>
                <h3 className={classes.text}>Nombre: {name}</h3>
                <h4 className={classes.text}>Descripcion: {descripcion}</h4>
                <h4 className={classes.text}>Precio: {price}$</h4>
                <Grid item md={12} sm={12} xm={12}>
                <Grid container justifyContent="flex-end">
                <ColorButton variant="contained" color="primary" href={link}>
                    Contactar<WhatsAppIcon className={classes.icon}></WhatsAppIcon>
                </ColorButton>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Card>
    )
}
