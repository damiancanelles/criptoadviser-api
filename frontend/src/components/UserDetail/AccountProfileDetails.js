import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';


const AccountProfileDetails = ({values}) => {
  

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
              xs={12}
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
              xs={12}
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
              xs={12}
            >
              <h4 style={{margin:0}}>Dinero del Lending (USDT)</h4>
              <TextField
                fullWidth
                name="email"
                required
                value={values.lending}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
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
