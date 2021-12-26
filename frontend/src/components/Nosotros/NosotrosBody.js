import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ReactPlayer from 'react-player';
import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { grayColor } from 'assets/jss/material-dashboard-react';

import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import { Hidden } from '@material-ui/core';
import CarouselUsuarios from './CarouselUsuarios';






const useStyles = makeStyles((theme) => ({
  gridproductos: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  acordion: {
    backgroundColor: 'white',
    margin: 5,

  },
  grid: {
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  instructor: {
    width: 250,
  },
  image2: {
    height: '260px',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      height: "auto",
      width: '100%',
      margin: 0,
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
  grid2: {
    borderRadius: 10,
    backgroundColor: '#030523',
    height: 80,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
    },
  },
  contactimage: {
    height: 80,
  },
  text: {
    padding: 0,
    paddingRight: 5,
    margin: 0,
  },
  texttitle: {
    margin: 0,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      textAlign: "center"
    },
  },
  text2: {
    color: grayColor[0],
    margin: 0,
  },
  link: {
    textTransform: 'none',
  },
  player: {
    paddingLeft: "4%",
    paddingRight: "4%",
    [theme.breakpoints.down('xs')]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
}))


function NosotrosBody() {
  const classes = useStyles();
  const [data, setdata] = React.useState([])

  const qwe = async () => {
    const result = await axios.get("https://criptoadviser.com/api/noticias", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata(result.data)
  };

  React.useEffect(() => {

    qwe();
  }, [])

  return (

    <div id='caja'>

      <h2 className={classes.text} style={{ textAlign: "center", padding: 10, paddingBottom: 0 }}>Quienes somos?</h2>


      <Grid style={{ paddingTop: 10 }} container className={classes.grid} justifyContent="center" alignItems="center">
        <Grid style={{ "paddingLeft": "4%", "paddingRight": "4%", "paddingBottom": "4%" }}
          item
          md={6}
          xs={12}>
          <h2 style={{ marginBottom: "10px", }} className={classes.texttitle}>CriptoADVISER</h2>
          <h4 className={classes.text}>Las compras P2P ofrecen la posibilidad de comprar y vender bitcoin y otras criptomonedas entre particulares de una forma segura. La gran ventaja es la multitud de diferentes métodos de pago disponibles, todo ello, con la seguridad que ofrece Binance.</h4>

        </Grid>
        <Grid
          item
          md={6}
          xs={12}>
          <img alt="img"
            className={classes.image2}
            src={require(`assets/img/image2.jpg`)}
          ></img>
        </Grid>
        <Carousel>
          {data.map((noticia, index) => {
            return (
              <Grid key={index} container className={classes.grid} direction="row" alignItems="center" justifyContent="center" >
                <Grid className={classes.player}
                  item
                  md={6}
                  xs={12}>
                  <ReactPlayer
                    controls={true}
                    config={{
                      file: {
                        attributes: {
                          poster: noticia.image
                        }
                      }
                    }}
                    url={noticia.media}
                    className="react-player"
                    height="100%"
                    width="100%"
                  />
                </Grid>
                <Grid style={{ "paddingLeft": "4%", "paddingRight": "4%" }}
                  item
                  md={6}
                  xs={12}>
                  <h2 style={{ marginBottom: 10 }} className={classes.text}>{noticia.titulo}</h2>
                  <h4 className={classes.text}>{noticia.descripcion}</h4>
                </Grid>

              </Grid>
            )
          })}
        </Carousel>
        <CarouselUsuarios></CarouselUsuarios>
        <h1 style={{ margin: "0px", textAlign: "center" }} >FAQ</h1>
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
              <Typography className={classes.heading}>Qué es USDT?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                El USDT ( Tether) es un token con tres variantes en tres redes criptográficas TRC20, ERC20 y OMNI, que no varia en su precio ya q emula el valor del USD(dólar estadounidense)
                Ej: 1 USDT ≈ 1 USD
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
              <Typography className={classes.heading}>Cómo puedo invertir en las criptomonedas??</Typography>
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
            <AccordionDetails>
              <Typography>
                Teniendo un celular o una pc y un acceso a internet casi cualquier persona puede , pero recuerde que el dinero fácil no existe, El trading es una actividad muy rentable pero debe ir acompañado de educación porque se puede convertir en una bomba de tiempo si no se sabe manejar. Para tener una operatoria exitosa es necesario dedicarle tiempo a realizar un plan de trabajo como en todos los negocios, cultivar una actitud mental adecuada y por sobre todo tener compromiso y dedicación con lo que hace.
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
              <Typography className={classes.heading}>Qué es USDT?</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                El USDT ( Tether) es un token con tres variantes en tres redes criptográficas TRC20, ERC20 y OMNI, que no varia en su precio ya q emula el valor del USD(dólar estadounidense)
                Ej: 1 USDT ≈ 1 USD
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>

  )
}

export default NosotrosBody
