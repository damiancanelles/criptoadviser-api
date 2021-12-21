import { Grid, makeStyles} from '@material-ui/core';
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
    const [values, setValues] = React.useState({
		"role": "admin",
		"activate": true,
		"referido": "",
		"lending": 0,
		"señales": "",
		"_id": "613c1ff767d9dd6a0e8d53e7",
		"user": "Damian",
		"password": "$2a$10$ahQVyWh8Xr/5GxyUlUhJWOnDck9Qew3EVdSp0yxN6HgK1YuBQf8kG",
		"email": "dcanellesgomez@gmail.com",
		"telegramuser": "RedDragonTH",
		"subscription": "2022-01-08T05:25:05.148Z",
		"date": "2021-09-11T03:18:15.281Z",
		"__v": 0
	});

  const asd = async () => {
    const result = await axios.get(`https://criptoadviser.com/api/users/${user.userid}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setValues(result.data.user)
  };

  React.useEffect( () => {
    
    asd();
  })
    return (
        <Grid container style={{marginTop:'10px', marginBottom:'10px'}}>
            <Grid item xs={12} xl={6} lg={6} md={6} sm={6} className={classes.grid}>
                <AccountProfileDetails values={values} />
            </Grid>
            <Grid item xs={12} xl={6} lg={6} md={6} sm={6} className={classes.grid}>
                <AccountBotInfo/>
            </Grid>
            <Grid item xs={12} xl={12} lg={12} md={12} className={classes.grid}>
                <Cursos id={user.userid}/>
            </Grid>
        </Grid>

    )
}
export default VistaUser;