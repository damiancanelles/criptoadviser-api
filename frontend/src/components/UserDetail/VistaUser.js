import { Grid, makeStyles, Paper, Button, TextField } from '@material-ui/core';
import React from 'react'
import { AccountBotInfo } from './AccountBotInfo';
import AccountProfile from './AccountProfile';
import AccountProfileDetails from './AccountProfileDetails';


const useStyles = makeStyles((theme) => ({
    grid: {
        padding: theme.spacing(1),       
    },
  
    text: {
        margin: theme.spacing(1)
    },


}))

const VistaUser = () => {
    const classes = useStyles()
    return (
        <Grid container style={{marginTop:'10px', marginBottom:'10px'}}>
            <Grid item xs={12} xl={4} className={classes.grid}>
               <AccountProfile/>
            </Grid>
            <Grid item xs={12} xl={4} className={classes.grid}>
                <AccountProfileDetails/>
            </Grid>
            <Grid item xs={12} xl={4} className={classes.grid}>
                <AccountBotInfo/>
            </Grid>
        </Grid>

    )
}
export default VistaUser;