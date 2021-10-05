import { Grid, makeStyles, Paper, Button, TextField } from '@material-ui/core';
import React from 'react'
import AccountProfile from './Account/AccountProfile';
import AccountProfileDetails from './Account/AccountProfileDetails';


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
        <Grid container >
            <Grid item xs={12} xl={3} className={classes.grid}>
               <AccountProfile/>
            </Grid>
            <Grid item xs={12} xl={9} className={classes.grid}>
                <AccountProfileDetails/>
            </Grid>
        </Grid>

    )
}
export default VistaUser;