import { Grid, makeStyles, Paper, Button, TextField } from '@material-ui/core';
import useAuth from 'auth/useauth';
import axios from 'axios';
import React from 'react'
import { AccountBotInfo } from './AccountBotInfo';
import AccountProfileDetails from './AccountProfileDetails';
import { Cursos } from './Cursos';


const useStyles = makeStyles((theme) => ({
    grid: {
        padding: theme.spacing(1),       
    },
  
    text: {
        margin: theme.spacing(1)
    },


}))

function VistaUser() {
   
    const classes = useStyles()

    return (
        <Grid container style={{marginTop:'10px', marginBottom:'10px'}}>
            <Grid item xs={12} xl={6} lg={6} md={6} className={classes.grid}>
                <AccountProfileDetails id={sessionStorage.getItem('userid')} />
            </Grid>
            <Grid item xs={12} xl={4} lg={6} md={6} className={classes.grid}>
                <AccountBotInfo/>
            </Grid>
            <Grid item xs={12} xl={4} lg={6} md={6} className={classes.grid}>
                <Cursos id={sessionStorage.getItem('userid')}/>
            </Grid>
        </Grid>

    )
}
export default VistaUser;