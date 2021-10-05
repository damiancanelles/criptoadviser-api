import { useState } from 'react';
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

const states = [
  {
    value: 'Cienfuegos',
    label: 'Cienfuegos'
  },
  {
    value: 'Villa_Clara',
    label: 'Villa Clara'
  },
  {
    value: 'Matanzas',
    label: 'Matanzas'
  },
  {
    value: 'La_Habana',
    label: 'La Habana'
  },
  {
    value: 'Artemisa',
    label: 'Artemisa'
  },
  {
    value: 'Mayabeque',
    label: 'Mayabeque'
  },
  {
    value: 'Pinar_del_Rio',
    label: 'Pinar del Rio'
  },
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Osmel',
    telegram: 'Dark_Crow',
    email: 'osmel2419@gmail.com',
    phone: '55715873',
    state: 'Cienfuegos',
    country: 'Cuba'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Grid container justify='center' alignItems='center' alignContent='center'>
    <form
      style={{boxShadow:'initial'}}
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
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
              md={6}
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número de teléfono"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
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
                label="País"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
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
                label="Ciudad"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Grid container justify='center' style={{marginTop: '5px' }} alignContent='center' alignItems='center'>
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
