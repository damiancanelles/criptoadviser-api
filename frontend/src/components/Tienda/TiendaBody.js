import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardProduct from './CardProduct';

import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';






const useStyles = makeStyles((theme) => ({
  gridproductos: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  productos: {
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  acordion: {
    backgroundColor: 'white',
    margin: 5,

  },
  grid: {
    padding: 5,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  gridquestions: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 40,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
}))


function TiendaBody() {
  const classes = useStyles();
  const [data, setdata] = React.useState([])
  const asd = async () => {
    const result = await axios.get("https://criptoadviser.com/api/products", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata(result.data)
  };

  React.useEffect(() => {

    asd();
  }, [])

  return (
    <div id='caja'>
      <Grid container className={classes.gridproductos} >
        {data.map((product, key) => {
          return (
            <Grid key={key} pagi item className={classes.productos} lg={3} md={4} xs={12} sm={6} xl={3}  >

              <CardProduct descripcion={product.descripcion} img={product.image} name={product.name} price={product.price}></CardProduct>

            </Grid>

          )
        })}



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
                <Typography >Qué son las criptomonedas?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones, y controlar la creación de unidades adicionales, es decir, evitar que alguien pueda hacer copias como haríamos, por ejemplo, con una foto. Estas monedas no existen de forma física: se almacenan en una cartera digital.

                  Puede que te preguntes en qué se diferencia un sistema de este tipo de PayPal u otras aplicaciones bancarias que tengas en tu teléfono. A simple vista, ciertamente parecen servir para los mismos casos de uso –pagar a amigos, hacer compras en tus páginas web favoritas–, pero si se realiza un análisis más detenido, no podrían ser más diferentes.
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
                <Typography className={classes.heading}>Que ventaja tienen las criptomonedas sobre el dinero FIAT?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Son descentralizadas.<br />

                  ✅Son altamente resistentes a la desconexión o censura.<br />

                  ✅Sus transacciones son seguras.<br />

                  ✅Poseen naturaleza transfronteriza.
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
                <Typography className={classes.heading}>Cómo puedo invertir en las criptomonedas?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Con las criptomonedas existes diversas formas de ganar dinero o hacer inversiones. Existen plataformas HYIP que se aprovechan de las características de las criptomonedas para conformar sus estafas piramidales prometiendo ganancias inimaginables, como un 200% de tu inversión mensual, para atraer clientes, lo que ha traído mucha mala publicidad, pero en las criptomonedas no todo es tinieblas, existen infinidades de posibilidades que te harán ganar dinero.
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
                <Typography className={classes.heading}>Qué se necesita para hacer trading?</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography>
                Teniendo un celular o una pc y un acceso a internet casi cualquier persona puede , pero recuerde que el dinero fácil no existe, El trading es una actividad muy rentable pero debe ir acompañado de educación porque se puede convertir en una bomba de tiempo si no se sabe manejar. Para tener una operatoria exitosa es necesario dedicarle tiempo a realizar un plan de trabajo como en todos los negocios, cultivar una actitud mental adecuada y por sobre todo tener compromiso y dedicación con lo que hace.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>

    </div>

  )
}

export default TiendaBody
