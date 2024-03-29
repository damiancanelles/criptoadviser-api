import React from 'react';

import axios from 'axios';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
  import BlockUi from 'react-block-ui';
  import { Loader } from 'react-loaders';
  import 'react-block-ui/style.css';
  import 'loaders.css/loaders.min.css';
  

  

export default function ModalCreateFreelancer({setOpen, asd, }) {
    const [titulo,settitulo] = React.useState("");
    const [descripcion,setdescripcion] = React.useState("");
    const [numero,setnumero] = React.useState("");
    const [ubicacion,setubicacion] = React.useState("");
    const [facebook,setfacebook] = React.useState("");
    const [instagram,setinstagram] = React.useState("");
    const [twitter,settwitter] = React.useState("");
    const [cosa,setcosa] = React.useState("");
    const [cosa2,setcosa2] = React.useState("");
    const [whatsapp,setwhatsapp] = React.useState("");
    const [telegram,settelegram] = React.useState("");
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    const [stop,setstop] = React.useState(false);

    function handleImage(e){
        const {files} = e.target;
        setcosa(files[0]);
       
  
      };

    async function handleGalleryImage(e){
        const {files} = e.target;
        setcosa2(files);
       
  
      };  

    async function register(e) {
        e.preventDefault();
        setstop(true);
       
        const data = new FormData() 
        data.append('file', cosa)
        let url = "https://criptoadviser.com/api/freelancers/file/";

        await axios.post(url, data, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(async res => { 
            const image = res.data.path
            const data2 = new FormData()
            Array.from(cosa2).forEach(image => {
              data2.append('file', image)
            })
            let url2 = "https://criptoadviser.com/api/freelancers/manyfile/";  
            
            await axios.post(url2, data2, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(res => {
              const info = {
                titulo: titulo,
                descripcion: descripcion,
                contactinfo: {
                    numero: numero,
                    whatsapp: whatsapp,
                    telegram: telegram,
                    facebook: facebook,
                    instagram: instagram,
                    twitter: twitter,
                    ubicacion: ubicacion,
                },
                image: image,
                gallery: res.data.rutes
                
              };
          
              axios.post("https://criptoadviser.com/api/freelancers/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
              .then((res) => {
                console.log(res.data);
                if (res.data.message === "null") {
                  asd();
                  setstop(false);
                  setOpen(false);
                  
                  
              
                  
                } 
                else {
                  settexterror(res.data.message)
                  setstop(false);
                  seterror(true);
                  
                }
              });
            })  

            
          })


        
    }

    return(
      <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue"/>}>
        <Card>
        <CardHeader
          align="center"
          subheader="Rellene la informacion necesaria"
          title="Agregar Freelancer"
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
                label="Titulo"
                name="titulo"
                onChange={(e) => {settitulo(e.target.value)}}
                required
                value={titulo}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <Grid item md={12} xs={12}>
                  <Grid container>
                      <Grid style={{paddingRight:20}} item md={6} xs={6}>
                      <TextField
                fullWidth
                label="Numero de Telefono"
                name="numero"
                onChange={(e) => {setnumero(e.target.value)}}
                required
                value={numero}
                variant="outlined"
              />
                      </Grid>
                      <Grid style={{paddingRight:10}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Telegram"
                name="telegram"
                onChange={(e) => {settelegram(e.target.value)}}
                required
                value={telegram}
                variant="outlined"
              />
                      </Grid>
                      <Grid style={{paddingLeft:10}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="WhatsApp"
                name="whatsapp"
                onChange={(e) => {setwhatsapp(e.target.value)}}
                required
                value={whatsapp}
                variant="outlined"
              />
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
              fullWidth
                label="Descripcion"
                name="descripcion"
                onChange={(e) => {setdescripcion(e.target.value)}}
                multiline
                rows={4}
                required
                value={descripcion}
                variant="outlined"
              />
              
              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Grid
              item
              md={12}
              xs={12}
            >
              <Grid container >
              <Grid style={{paddingRight:20}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                onChange={(e) => {setfacebook(e.target.value)}}
                required
                value={facebook}
                variant="outlined"
              />
                      </Grid>
                      <Grid style={{paddingRight:20}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                onChange={(e) => {setinstagram(e.target.value)}}
                required
                value={instagram}
                variant="outlined"
              />
                      </Grid>
                      <Grid style={{paddingRight:10}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                onChange={(e) => {settwitter(e.target.value)}}
                required
                value={twitter}
                variant="outlined"
              />
                      </Grid>
                      <Grid style={{paddingLeft:10}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Ubicacion"
                name="ubicacion"
                onChange={(e) => {setubicacion(e.target.value)}}
                required
                value={ubicacion}
                variant="outlined"
              />
                      </Grid>
             <Grid item md={6} xs={12}>
             <input
        onChange={(e) => {handleImage(e)}}
        accept="imagen/*"
        id="contained-button-file"
        style={{display:"none"}}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button  style={{marginTop:20}} variant="contained" color="primary" component="span">
          Subir Imagen
        </Button>
      </label></Grid> 

      <Grid item md={6} xs={12}>
             <input
        onChange={(e) => {handleGalleryImage(e)}}
        accept="imagen/*"
        id="contained-button-image"
        style={{display:"none"}}
        multiple='multiple'
        type="file"
      />
      <label htmlFor="contained-button-image">
        <Button  style={{marginTop:20}} variant="contained" color="primary" component="span">
          Subir Imagenes de la Galeria
        </Button>
      </label></Grid>       
                  
              </Grid>
            </Grid>
            </Grid>
           
           
           
            <Grid 
              item
              md={6}
              xs={12}>
            <Collapse in={error}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                seterror(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         
            <strong>{texterror}</strong>
            
        </Alert>
      </Collapse>
            </Grid>
          </Grid>
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
            onClick={(e)=> {register(e)}}
          >
            Agregar
          </Button>
        </Box>
      </Card>
      </BlockUi>
    )
}
