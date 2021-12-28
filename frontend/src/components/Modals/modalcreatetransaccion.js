import React from 'react';
import axios from 'axios';
import { Alert, Container } from 'reactstrap';
import {
  Box,
  Button,
  Card,
  CardContent,

  Divider,
  Grid,
  Hidden,
  TextField
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import moment from 'moment';
import useAuth from "auth/useauth";
import BlockUi from 'react-block-ui';
import { Loader } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      width: "95%",
    },
  },
}));


const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 24,
    label: '24',
  },
];



const defaultWallet = { "_id": "60f5f344cd1cc715f83f702f", "name": "Bitcoins", "link": "1LzuqyixZkV1XKAfNMnkSfZ3MBDgtuAwgx", "image": "bitcoin.png", "date": "2021-07-19T21:48:52.887Z", "__v": 0 };
const defaultTarjeta = { "_id": "612a9cddd104e90016b71a91", "name": "Transfermovil MLC", "moneda": "MLC", "numero": "798 456 132 987", "date": "2021-08-28T20:30:21.856Z", "__v": 0 }

export default function ModalCreateTransaccion({ setOpen, asd, price, data }) {
  const classes = useStyles();
  const [user] = useAuth();
  const [data1, setdata1] = React.useState("");
  const [data2, setdata2] = React.useState("");
  const [index, setindex] = React.useState(0);
  const [meses, setmeses] = React.useState("1");
  const [monto, setmonto] = React.useState(price);
  const [hash, sethash] = React.useState("");

  const [subscription, setsubscription] = React.useState(moment().add(1, 'months'));
  const [error, seterror] = React.useState(false);
  const [texterror, settexterror] = React.useState(" ");
  const [walletinfo, setwalletinfo] = React.useState([]);
  const [wallet, setwallet] = React.useState(defaultWallet);
  const [idwallet, setidwallet] = React.useState("");
  const [tarjetainfo, settarjetainfo] = React.useState([]);
  const [tarjeta, settarjeta] = React.useState(defaultTarjeta);
  const [idtarjeta, setidtarjeta] = React.useState("");
  const [stop, setstop] = React.useState(false);
  const [cosa, setcosa] = React.useState("");


  function handleImage(e) {
    const { files } = e.target;
    setcosa(files[0]);


  };

  function setWallet(asd) {
    const Wallets = []
    asd.map((product) => {
      Wallets.push({ value: product._id, label: product.name })
      return 0
    });
    setwalletinfo(Wallets);
  }

  function setTarjeta(asd) {
    const Tarjeta = []
    asd.map((product) => { Tarjeta.push({ value: product._id, label: product.name }); return 0 });
    settarjetainfo(Tarjeta);
  }


  React.useEffect(() => {
    const asd = async () => {
      const result = await axios.get("https://criptoadviser.com/api/wallets", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
      setdata1(result.data)
      setWallet(result.data)
      setwallet(result.data[0])
      setidwallet(result.data[0]._id)
    };
    asd();
  }, [])

  React.useEffect(() => {
    const asd = async () => {
      const result = await axios.get("https://criptoadviser.com/api/tarjetas", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
      setdata2(result.data)
      setTarjeta(result.data)
      settarjeta(result.data[0])
      setidtarjeta(result.data[0]._id)

    };
    asd();
  }, [])

  const handleChange = (event, newValue) => {
    setmeses(newValue);
    setmonto(`${newValue * price}`);
    setsubscription(moment().add(newValue, 'months'));
  };



  function valuetext(value) {
    return `${value}`;
  }

  function valueLabelFormat(value) {
    return `${value}`;
  }

  async function register(e) {
    e.preventDefault();
    setstop(true);

    const info = {
      username: user.name,
      userid: user.userid,
      monto: monto,
      hash: hash,
      subscription: subscription,
      idwallet: wallet.image,
      ref: data
    };


    axios.post("https://criptoadviser.com/api/transaccions/", info, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log(res.data);
        if (res.data.message == null) {
          setOpen(false);
          setstop(false);



        }
        else {
          settexterror(res.data.message);
          setstop(false);
          seterror(true);


        }
      });

    axios.post("https://criptoadviser.com/api/notificaciones/", { preview: "Su subcripcion fue enviada", userid: sessionStorage.getItem('userid'), content: "Gracias por comprar nuentro paquete VIP su transaccion a sido enviada correctamente esta sera confirmada lo mas rapido posible." }, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log(res.data);
        if (res.data.message == null) {
          setOpen(false);
          setstop(false);




        }
        else {
          settexterror(res.data.message);
          setstop(false);
          seterror(true);

        }
      });

    axios.post("https://criptoadviser.com/api/telegrambot/notificaciones/", { telegramuser: `${user.telegramuser}`, content: "Gracias por comprar nuentro paquete VIP su transaccion a sido enviada correctamente esta sera confirmada lo mas rapido posible." }, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log(res.data);
        if (res.data.message == null) {
          setOpen(false);
          setstop(false);




        }
        else {
          settexterror(res.data.message)
          setstop(false);
          seterror(true);

        }
      });
  }

  async function register2(e) {
    e.preventDefault();
    setstop(true);

    const datac = new FormData()
    datac.append('file', cosa)
    let url = "https://criptoadviser.com/api/noticias/file/";

    await axios.post(url, datac, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
      .then(res => {
        const info = {
          username: user.name,
          userid: user.userid,
          monto: monto,
          image: res.data.path,
          subscription: subscription,
          moneda: tarjeta.moneda,
          ref: data
        };


        axios.post("https://criptoadviser.com/api/transaccionsmc/", info, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
          .then((res) => {
            console.log(res.data);
            if (res.data.message == null) {
              setOpen(false);
              setstop(false);



            }
            else {
              settexterror(res.data.message);
              setstop(false);
              seterror(true);


            }
          });

        axios.post("https://criptoadviser.com/api/notificaciones/", { preview: "Su subcripcion fue enviada", userid: sessionStorage.getItem('userid'), content: "Gracias por comprar nuentro paquete VIP su transaccion a sido enviada correctamente esta sera confirmada lo mas rapido posible." }, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
          .then((res) => {
            console.log(res.data);
            if (res.data.message == null) {
              setOpen(false);
              setstop(false);




            }
            else {
              settexterror(res.data.message);
              setstop(false);
              seterror(true);

            }
          });

        axios.post("https://criptoadviser.com/api/telegrambot/notificaciones/", { telegramuser: `${user.telegramuser}`, content: "Gracias por comprar nuentro paquete VIP su transaccion a sido enviada correctamente esta sera confirmada lo mas rapido posible." }, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
          .then((res) => {
            console.log(res.data);
            if (res.data.message == null) {
              setOpen(false);
              setstop(false);




            }
            else {
              settexterror(res.data.message)
              setstop(false);
              seterror(true);

            }
          });
      })


  }

  return (
    <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue" />}>
      <Card>


        <CardContent style={{ padding: 0, paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
          <Grid container alignItems="center" justifyContent="center">
            <Button style={{ color: index === 0 ? "blue" : null }} onClick={() => { setindex(0) }}>Criptomonedas</Button>
            <Button style={{ color: index === 1 ? "blue" : null }} onClick={() => { setindex(1) }}>Moneda Nacional</Button>
          </Grid>
          <Divider style={{ marginBottom: 20 }}></Divider>
          <Collapse in={index === 0}>
            <Grid
              container
              spacing={3}
            >


              <Grid
                item
                md={6} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography id="discrete-slider-restrict" gutterBottom>
                    Elija la duración del servicio en meses
                  </Typography>
                  <Slider
                    value={meses}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-restrict"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={handleChange}
                    min={1}
                    max={24}
                  />
                </div>
              </Grid>
              <Grid
                item
                md={6} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Criptomoneda"
                  name="idwallet"
                  onChange={(e) => {
                    const element = data1.find((w) => w._id === e.target.value);
                    setwallet(element);
                    setidwallet(e.target.value)

                  }}
                  required
                  select
                  SelectProps={{ native: true }}
                  defaultValue={defaultWallet._id}
                  value={idwallet}
                  variant="outlined"
                >
                  {walletinfo.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>


              <Grid
                item
                md={12}
                xs={12}>
                <Box>

                  <Grid container>

                    <Hidden smDown>
                      <Grid
                        item
                        md={1}
                        xs={1}>
                        <Grid container justifyContent="center">
                          <img className="imagewallet"
                            alt=''
                            src={require(`assets/img/${wallet.image}`)}
                          ></img>
                        </Grid>
                      </Grid>
                    </Hidden>
                    <Grid
                      style={{ paddingLeft: 10 }}
                      item
                      md={11}
                      sm={12}
                      xs={12}>
                      <h5 style={{ margin: 0 }}> Para realizar la recargar envíe {meses * price} USD en {wallet.name} a la siguiente dirección  y coloque el hash de la transacción en el campo indicado.</h5>
                      <Grid container alignContent="center">
                        <Grid item md={6} sm={12} xs={12}>
                          <Grid container alignContent="center">
                            <h4 style={{ margin: 0, marginTop: 10 }}> Direccion: {wallet.link} </h4>
                          </Grid>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          <TextField
                            fullWidth
                            label="Hash"
                            name="hash"
                            onChange={(e) => { sethash(e.target.value) }}
                            required
                            value={hash}
                            variant="outlined"
                          />
                        </Grid>

                      </Grid>
                    </Grid>
                  </Grid>

                </Box>
              </Grid>

              <Grid
                item
                md={12}
                xs={12}>
                <Alert color="danger" isOpen={error}>
                  <Container>
                    <div className="alert-icon">
                      <i className="now-ui-icons travel_info"></i>
                    </div>
                    <strong>{texterror}</strong>
                    <button
                      type="button"
                      className="close"
                      onClick={() => seterror(false)}
                    >
                      <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </span>
                    </button>
                  </Container>
                </Alert>
              </Grid>
            </Grid>
          </Collapse>

          <Collapse in={index === 1}>
            <Grid
              container
              spacing={3}
            >


              <Grid
                item
                md={6} sm={12} xs={12}>
                <div className={classes.root}>
                  <Typography id="discrete-slider-restrict" gutterBottom>
                    Elija la duración del servicio en meses
                  </Typography>
                  <Slider
                    value={meses}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-restrict"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={handleChange}
                    min={1}
                    max={24}
                  />
                </div>
              </Grid>
              <Grid
                item
                md={6} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Tarjeta"
                  name="idtarjeta"
                  onChange={(e) => {
                    const element = data2.find((w) => w._id === e.target.value);
                    settarjeta(element);
                    setidtarjeta(e.target.value)

                  }}
                  required
                  select
                  SelectProps={{ native: true }}
                  defaultValue={defaultTarjeta._id}
                  value={idtarjeta}
                  variant="outlined"
                >
                  {tarjetainfo.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>


              <Grid
                item
                md={12}
                xs={12}>
                <Box>

                  <Grid container>


                    <Grid
                      style={{ paddingLeft: 10 }}
                      item
                      md={12}
                      sm={12}
                      xs={12}>
                      <h5 style={{ margin: 0 }}> Para realizar la recargar envíe {tarjeta.moneda === 'CUP' ? meses * price * 73 : meses * price} {tarjeta.moneda} a la siguiente cuenta  y suba una foto del comprobante de pago.</h5>
                      <Grid container alignContent="center">
                        <Grid item md={6} sm={12} xs={12}>
                          <Grid container alignContent="center">
                            <h4 style={{ margin: 0, marginTop: 10 }}> Tarjeta: {tarjeta.numero} </h4>
                          </Grid>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                          <input
                            onChange={(e) => { handleImage(e) }}
                            accept="imagen/*"
                            id="contained-button-file"
                            style={{ display: "none" }}
                            multiple
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                            <Button style={{ marginTop: 10 }} variant="contained" color="primary" component="span">
                              Subir Imagen
                            </Button>

                          </label>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Grid>

                </Box>
              </Grid>

              <Grid
                item
                md={12}
                xs={12}>
                <Alert color="danger" isOpen={error}>
                  <Container>
                    <div className="alert-icon">
                      <i className="now-ui-icons travel_info"></i>
                    </div>
                    <strong>{texterror}</strong>
                    <button
                      type="button"
                      className="close"
                      onClick={() => seterror(false)}
                    >
                      <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </span>
                    </button>
                  </Container>
                </Alert>
              </Grid>
            </Grid>
          </Collapse>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >

          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              if (index === 0) {
                register(e)
              }
              if (index === 1) {
                register2(e)
              }
            }}
          >
            Agregar
          </Button>



        </Box>
      </Card>
    </BlockUi>
  )
}