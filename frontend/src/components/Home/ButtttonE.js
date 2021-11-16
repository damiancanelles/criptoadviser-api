import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";

import "react-multi-carousel/lib/styles.css";



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
    margin: 10,
  },

}))

export default function ButtttonE({data}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.grid} justifyContent="center" alignItems="center">
      
      <Grid className={classes.gridtext}
        item
        md={6}
        xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <h1 style={{ marginBottom: "10px" }} className={classes.text}>{data.name}</h1>
          <h4 style={{ margin: 0 }}>{data.descripcion}
          </h4>
          <Grid container justifyContent="flex-end"><Button className={classes.buttom} onClick={()=>{
            history.push(`serviciosindependientes/${data._id}`);
          }} variant="contained" color="primary">Acceder</Button></Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}>
        <Grid container justifyContent="center">
          <img alt="img"
            className={classes.image2}
            src={data.image}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}