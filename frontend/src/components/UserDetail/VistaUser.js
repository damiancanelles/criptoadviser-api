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

const VistaUser = () => {
    const [user,] = useAuth();
    const classes = useStyles()
    const [values, setValues] = React.useState({});

  const asd = async () => {
    const result = await axios.get(`https://criptoadviser.com/api/users/${user.userid}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setValues(result.data.user)
  };

  React.useEffect( () => {
    
    asd();
  },[])
    return (
        <Grid container style={{marginTop:'10px', marginBottom:'10px'}}>
            <Grid item xs={12} xl={6} lg={6} md={6} className={classes.grid}>
                <AccountProfileDetails values={values} />
            </Grid>
            <Grid item xs={12} xl={4} lg={6} md={6} className={classes.grid}>
                <AccountBotInfo/>
            </Grid>
            <Grid item xs={12} xl={4} lg={6} md={6} className={classes.grid}>
                <Cursos id={user.userid}/>
            </Grid>
        </Grid>

    )
}
export default VistaUser;