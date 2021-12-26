import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import ButtonE from './Button';


import CarouselItem from './CaruselItem';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';







const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },

  acordion: {
    backgroundColor: 'white',
    margin: 5,

  },
  grid: {
    marginTop: 10,
    marginBottom: 10,
  },
  gridquestions: {
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
    },
  },

}))


function FreelancersBody() {
  const classes = useStyles();
  const [data, setdata] = React.useState([])
  const asd = async () => {
    const result = await axios.get("https://criptoadviser.com/api/freelancers", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata(result.data)
  };

  React.useEffect(() => {

    asd();
  }, [])

  return (

    <div className={classes.root} id='caja'>

      <Carousel>
        {data.map((product, key) => {
          return (
            <CarouselItem
              src={product.image}
              title={product.titulo}
              descripcion={product.descripcion.split(".")[0]}
              product={product}>
            </CarouselItem>
          )
        })}

      </Carousel>

      <Grid className={classes.grid} >
        <ButtonE ></ButtonE>
      </Grid>

      <Grid container justifyContent="center">
        <h1 style={{ margin: "0px" }} >FAQ</h1>
      </Grid>
      <Grid className={classes.gridquestions} container direction="row" justifyContent="center">
        <Grid
          item
          md={6}
          xs={12}>
          <Accordion className={classes.acordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Donde y como puedo conseguir criptomonedas?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Las criptomonedas se pueden cambiar por dinero FIAT en plataformas especiales llamadas exchanges(intercambios). En Cuba al no existir ningún medio de ese tipo reconocido legalmente, se utiliza el intercambio de persona a persona. Existen varios grupos en las redes sociales dedicados exclusivamente a esto, si es nuevo en el mundo de las criptos y desea hacer uno de estos intercambios, para mayor seguridad no lo haga solo, pida la ayuda de alguien con experiencia previa que lo asesore. Aquí les dejaremos el enlace de nuestro grupo privado de intercambio que es moderado constantemente por los administradores y nuestro bot VIP que te permite utilizar los comandos correspondientes para saber si un vendedor o comprador es confiable. Dichos comandos están en la descripción del grupo<a href=' https://t.me/+PkQXQbxgjVs2MThh' target='_blank'> Intercambio de Criptomonedas</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}>
          <Accordion className={classes.acordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Deseo entrar en CriptoADVISER ¿Cómo lo hago ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Si luego de leer con detenimiento todos los tópicos de este menú, estas interesado en entrar en nuestro proyecto cree su cuenta y efectúe el pago de la membresía por el tiempo correspondiente que desee permanecer con nosotros, una vez creada su cuenta se le asignara su código de referidos
              </Typography>
            </AccordionDetails>
          </Accordion >
        </Grid>
        <Grid
          item
          md={6}
          xs={12}>
          <Accordion className={classes.acordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Qué servicios ofertamos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ofertamos una serie de servicios con el objetivo de formar traders y brindar soporte durante su operatoria. Para mayor comodidad hemos dispuesto todos estos servicios por un pago conjunto de 10 USDT, que validará su membresia durante todo un mes fiscal. Todos los servicios están detallados en el catalogo que contiene nuestro bot de telegram @criptoadviser_bot
              </Typography>
            </AccordionDetails>
          </Accordion >
        </Grid>
        <Grid
          item
          md={6}
          xs={12}>
          <Accordion className={classes.acordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Qué es nuestro sistema de compensación y como activarlo?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                Es una forma de estimular a los miembros oficiales por su ayuda al crecimiento de nuestra comunidad y al proyecto. ¿Como activar el sistema?  Primeramente debes saber que nuestro sistema de compensación tiene 2 niveles: 👇              ✅Nivel 1 : Añadir nuevos miembros. Por cada persona que pague
                la membresía invitado por usted, se le compensará con 2 USDT
                mensuales mientras dicho miembro permanezca en el proyecto.
                Para activar el sistema solo necesita que el potencial miembro le
                entregue su código (código del que invita) al encargado económico
                en el momento que vaya a efectuar el pago de la membresía.                                                                                                                                ✅Nivel 2 : Nuevos miembros que inviertan en el servicio de Lending. Por cada nuevo miembro que invierta (invitado por usted) en este servicio ganará un 10% de su inversión mensualmente mientras él permanezca activo usando dicho servicio. Para activar este nivel solo necesita que el potencial inversor presente su código (código del que invita) al miembro de administración del lending en el momento de solicitar el servicio.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>


    </div>

  )
}

export default FreelancersBody
