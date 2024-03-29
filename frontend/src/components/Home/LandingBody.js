import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Grid, Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
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
import LendingButton from 'components/Lending/LendingButton';
import SeñalesButton from 'components/Señales/SeñalesButton';
import CursoButton from 'components/Curso/CursoButton';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import CarouselServicios from './CarouselServicios';
import Butttton from './Butttton';
import ButtttonE from './ButtttonE';



const useStyles = makeStyles((theme) => ({
  root2: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {

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
  image2: {
    width: '80%',
    margin: `5%`,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
    },
  },
  buttom: {

    "paddingLeft": "4%",
    [theme.breakpoints.down('xs')]: {
      "paddingLeft": "0px",
    },
  },
  player: {
    paddingLeft: "4%",
    paddingRight: "4%",
    [theme.breakpoints.down('xs')]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#030523',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      direction: "column",
      justifyContent: "center",
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  footertext: {
    color: '#FFFFFF',
    margin: 0,
  },
  footertext1: {
    color: '#FFFFFF',
    margin: 0,
    marginRight: "30px",
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },

  footergrid1: {
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center",
    },
  },
  footergrid2: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center",
    },
  },
  text: {
    margin: 0,
  },
}))


function LandingBody() {
  const [data, setdata] = React.useState([])
  const [data1, setdata1] = React.useState([])
  const classes = useStyles();
  const [index, setindex] = React.useState(0);
  const [data3, setdata3] = React.useState([])

  const tyu = async () => {
    const result = await axios.get("https://criptoadviser.com/api/cursos", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata3(result.data)
  };


  const qwe = async () => {
    const result = await axios.get("https://criptoadviser.com/api/noticias", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata(result.data)
  };

  const ert = async () => {
    const result = await axios.get("https://criptoadviser.com/api/servicios", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    setdata1(result.data)
    result.data.forEach((element, index) => {
      if (element = result.data.find(e => e.type === "independiente")) {
        setindex(index)
      }
    })

  };

  React.useEffect(() => {

    qwe();
    ert();
    tyu();
  }, [])

  return (
    <div id='caja'>

      <CarouselServicios servicios={data1} />
      <div className={classes.root2}>
        <Grid style={{ "paddingLeft": "4%", "paddingRight": "4%" }} container >
          <Grid item md={12}
            xs={12} >
            <h2 style={{ 'margin': '0px' }} >Servicios Independientes</h2>
            <p>Ofertamos una serie de servicios con el objetivo de formar traders
              y brindar soporte durante su operatoria. Para mayor comodidad hemos
              dispuesto todos estos servicios por un pago conjunto de 10 USDT, que
              validará su membresía durante todo un mes fiscal.</p>

          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start" className={classes.buttom}>
          {data1.map((cosa, i) => {
            return (
              <Button variant={index === i ? 'contained' : 'text'} style={{ "marginLeft": "30px", "marginRight": "30px", 'textTransform': 'none', "display": `${cosa.type === "principal" ? "none" : null}` }} onClick={() => setindex(i)}>{cosa.titulo}</Button>
            )
          })}
          {data3.map((cosa, i) => {
            return (
              <Button variant={index === i + data1.length ? 'contained' : 'text'} style={{ "marginLeft": "30px", "marginRight": "30px", 'textTransform': 'none' }} onClick={() => setindex(i + data1.length)}>{cosa.name}</Button>
            )
          })}
        </Grid>
        {data1.map((cosa, i) => {
          return (
            <Collapse style={{ "display": `${cosa.type === "principal" ? "none" : null}` }} in={index === i}>
              <Butttton data={cosa}></Butttton>
            </Collapse>

          )
        })}
        {data3.map((cosa, i) => {
          return (
            <Collapse in={index === i + data1.length}>
              <ButtttonE data={cosa}></ButtttonE>
            </Collapse>

          )
        })}
        <Carousel>
          {data.map((noticia, index) => {
            return (
              <div>
                <Hidden smDown>
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
                    <Grid style={{ "paddingLeft": "4%", "paddingRight": "4%", paddingBottom: 20 }}
                      item
                      md={6}
                      xs={12}>
                      <h2 style={{ marginBottom: 10 }} className={classes.text}>{noticia.titulo}</h2>
                      <h4 className={classes.text}>{noticia.descripcion}</h4>
                    </Grid>

                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid key={index} container className={classes.grid} direction="row" alignItems="center" justifyContent="center" >
                    <Grid style={{ "paddingLeft": "4%", "paddingRight": "4%", paddingBottom: 20 }}
                      item
                      md={6}
                      xs={12}>
                      <h2 style={{ marginBottom: 10 }} className={classes.text}>{noticia.titulo}</h2>
                      <h4 className={classes.text}>{noticia.descripcion}</h4>
                    </Grid>
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


                  </Grid>
                </Hidden>
              </div>
            )
          })}
        </Carousel>
        <Grid >
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
                <Typography className={classes.heading}>Todos sus servicios requieren el pago de la membresia ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, tenemos también otros servicios independientes a los que puede acceder sin haber comprado el paquete del trader, en los que se incluyen:<br/>

                  📌 Servicio de descarga: podrá solicitar la descarga de archivos, multimedia y otros para luego descargarlo desde la WiFi nauta o la red de datos de Etecsa sin consumir su cuota de datos, el tamaño conjunto de los archivos no debe superar los 10 Gb y tiene un valor de 2 USDT<br/>

                  📌 Reserva de vuelos comerciales: En este servicio nosotros reservamos cualquier  vuelo comercial que desee, contando con un descuento de hasta un 10%, si paga con criptomonedas.<br/>

                  📌 Compras onlines por envió: Con este servicio nosotros lo referimos a usted a una prestigiosa tienda latinoamericana que hace envíos a Cuba, para que pueda beneficiarte de nuestro código de descuentos.<br/>

                  📌 Módulos especializados: Estos módulos están diseñados para tratar temas específicos de trading o del mundo cripto, no es necesario haber participado en el curso básico, tiene un valor de 5 USDT.<br/>

                  📌 Reserva de hoteles en cualquier parte del mundo, con una rebaja de hasta un 20% si paga en criptomonedas.
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
                <Typography className={classes.heading}>Qué beneficios tiene ser un miembro oficial de CriptoADVISER ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Tiene acceso a nuestro sistema de compensación.<br/>

                  ✅ Puede participar en 1 módulo especializado de su elección de manera gratuita.<br/>

                  ✅ Puede usar el servicio de descargas para solicitar un compendio de 4Gb de su elección para ayudarlos en su formación como trader.<br/>

                  ✅ Tiene acceso a nuestro sistema de promociones y regalías.
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
                <Typography className={classes.heading}>Que es el Trading?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  El trading consiste en la compraventa de activos cotizados con mucha liquidez de mercado (acciones, crypto, divisas y futuros). Y ese mercado financiero es electrónico y está regulado. Con el objetivo de beneficiarse de las variaciones en el precio.
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
                <Typography className={classes.heading}>Como puedo invertir en las criptomonedas?</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography>
                  Con las criptomonedas existes diversas formas de ganar dinero o hacer inversiones. Existen plataformas HYIP que se aprovechan de las características de las criptomonedas para conformar sus estafas piramidales prometiendo ganancias inimaginables, como un 200% de tu inversión mensual, para atraer clientes, lo que ha traído mucha mala publicidad, pero en las criptomonedas no todo es tinieblas, existen infinidades de posibilidades que te harán ganar dinero.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
      <Grid container className={classes.footer}>
        <Grid item  >
          <Grid container direction="row" className={classes.footergrid1}>
            <h4 className={classes.footertext1}>Nuestras Redes</h4>
            <ButtonGroup>
              <IconButton className={classes.footertext}><WhatsAppIcon></WhatsAppIcon></IconButton>
              <IconButton className={classes.footertext}><TelegramIcon></TelegramIcon></IconButton>
              <IconButton className={classes.footertext}><FacebookIcon></FacebookIcon></IconButton>
              <IconButton className={classes.footertext}><InstagramIcon></InstagramIcon></IconButton>
              <IconButton className={classes.footertext}><TwitterIcon></TwitterIcon></IconButton>
            </ButtonGroup>
          </Grid>



        </Grid>
        <Grid item   >
          <Grid container direction="row" className={classes.footergrid2}>
            <p className={classes.footertext}>@ CriptoADVISER</p>
          </Grid>



        </Grid>
      </Grid>
    </div>

  )
}

export default LandingBody
