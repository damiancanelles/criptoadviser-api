import { useState } from 'react';
import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';



const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Osmel',
    telegram: 'Dark_Crow',
    email: 'osmel2419@gmail.com',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Grid container justifyContent='center' alignItems='center' alignContent='center'>
    <form
      style={{boxShadow:'initial'}}
      autoComplete="off"
      noValidate
      {...props}
    >
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
              <TextField
                fullWidth
                helperText="Porfavor especifique el nombre de usuario"
                label="Usuario"
                name="Usuario"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="@Telegram"
                name="Usuario de Telegram"
                onChange={handleChange}
                required
                value={values.telegram}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Correo"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                disabled
              />
            </Grid>
    
          </Grid>
        </CardContent>
        <Divider />
        <Grid container justifyContent='center' style={{marginTop: '10px', marginBottom: '10px' }} alignContent='center' alignItems='center'>
          <Button
            
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Grid>         
      </Card>
    </form>
    </Grid>
  );
};

export default AccountProfileDetails;
