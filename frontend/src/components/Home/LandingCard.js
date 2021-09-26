import React from 'react';
import {
  Card
 ,CardActionArea
 ,CardActions
 ,CardMedia
 ,Typography
 ,CardContent
 ,Button
 ,makeStyles

} from '@material-ui/core';
import Imagen from 'assets/img/Logo.png'


const useStyles = makeStyles({
  
  root: {
    maxWidth: 345,

  },
  media: {
    height: 140,
  },
  fixed:{

  }
});

const Tarjeta = ()=>{
 const classes = useStyles()


    return(

       <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Imagen}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align='center'>
              Zapatos
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.fixed}>
          <Button size="small" color="primary">
            Leer más
          </Button>
          <Button size="small" color="primary">
           Add to Car
          </Button>
        </CardActions>
      </Card>

    )
}

export default Tarjeta;