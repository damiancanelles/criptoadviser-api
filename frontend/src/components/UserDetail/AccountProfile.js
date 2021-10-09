import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';




const user = {
  avatar: '../../../public/static/marc.jpg',
  city: 'Cienfuegos',
  country: 'Cuba',
  jobTitle: 'Programador',
  name: 'Osmel Martinez',
  timezone: 'GTM-7'
};

const AccountProfile = (props) => (
  <Grid container justifyContent='center' alignItems='center' alignContent='center'>
  <Card {...props} elevation={3}>
    <CardContent >
      <Grid item
        sx={{
          
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      > <Grid container direction='column' justifyContent='center' alignItems='center' alignContent='center'>
        <Avatar
          style={{height:'100px', width:'100px'}}
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
        
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
     
        </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Subir Foto
      </Button>
    </CardActions>
  </Card>
  </Grid>
);

export default AccountProfile;
