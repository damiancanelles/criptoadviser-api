import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import axios from 'axios';

function AccountProfileDetails({id}){
  
  const [values, setValues] = React.useState({});

  const asd = () => {
    axios.get(`https://criptoadviser.com/api/users/${id}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then((result) => {
      console.log(result.data.user)
      setValues(result.data.user)
      })
  };

  React.useLayoutEffect ( () => {
    console.log("Hola")
    asd();
  },[])

  return (
    <Grid container justifyContent='center' alignItems='center' alignContent='center'>
    
      <Card elevation={3}>
        <CardHeader
          subheader="La informacion del usuario"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <h4 style={{margin:0}}>Username</h4>
              <TextField
                fullWidth
                name="Username"
                required
                value={values.user}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <h4 style={{margin:0}}>Telegram</h4>
              <TextField
                fullWidth
                name="Usuario de Telegram"
                required
                value={values.telegramuser}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <h4 style={{margin:0}}>Email</h4>
              <TextField
                fullWidth
                name="email"
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <h4 style={{margin:0}}>Link de Referido</h4>
              <TextField
                fullWidth
                name="email"
                required
                value={values.referido}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <h4 style={{margin:0}}>Dinero del Lending (USDT)</h4>
              <TextField
                fullWidth
                name="email"
                required
                value={values.link}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <h4 style={{margin:0}}>Canal de Señales</h4>
              <TextField
                fullWidth
                name="señales"
                required
                value={values.señales}
                variant="outlined"
              />
            </Grid>
    
          </Grid>
        </CardContent>        
      </Card>
    
    </Grid>
  );
};

export default AccountProfileDetails;
