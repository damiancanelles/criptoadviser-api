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
  

  const acceslevels = [
    {
      value: 'principal',
      label: 'Principal'
    },
    {
      value: 'independiente',
      label: 'Independiente'
    },
  ];
  

export default function ModalEditService({setOpen, asd, object}) {
    const [type,settype] = React.useState(object.type);
    const [titulo,settitulo] = React.useState(object.titulo);
    const [descripcion,setdescripcion] = React.useState(object.descripcion);
    const [numero,setnumero] = React.useState(object.contactinfo.numero);
    const [ubicacion,setubicacion] = React.useState(object.contactinfo.ubicacion);
    const [facebook,setfacebook] = React.useState(object.contactinfo.facebook);
    const [instagram,setinstagram] = React.useState(object.contactinfo.instagram);
    const [twitter,settwitter] = React.useState(object.contactinfo.twitter);
    const [cosa,setcosa] = React.useState(object.image);
    const [cosa2,setcosa2] = React.useState(object.gallery);
    const [whatsapp,setwhatsapp] = React.useState(object.contactinfo.whatsapp);
    const [telegram,settelegram] = React.useState(object.contactinfo.telegram);
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
        let url = "https://criptoadviser.com/api/servicios/file/";

        if ( cosa === object.image && cosa2 === object.gallery) {
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
            image: cosa,
            gallery: cosa2,
            type: type,
            
          }
          await axios.put(`https://criptoadviser.com/api/servicios/${object._id}`, info, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
           
        }
        else {
          if (cosa === object.image) {
            const data2 = new FormData()
            Array.from(cosa2).forEach(image => {
              data2.append('file', image)
            })
            let url2 = "https://criptoadviser.com/api/servicios/manyfile/";  
            
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
                image: cosa,
                gallery: res.data.rutes,
                type: type,
                
              };
          
              axios.put(`https://criptoadviser.com/api/servicios/${object._id}`,info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
          }
          else {
            if (cosa2 === object.gallery) {
              await axios.post(url, data, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(async res => {
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
                image: res.data.path,
                gallery: cosa2,
                type: type,
                
              }
              axios.put(`https://criptoadviser.com/api/servicios/${object._id}`,info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
            }
            else {
              await axios.post(url, data, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(async res => { 
            const image = res.data.path
            const data2 = new FormData()
            Array.from(cosa2).forEach(image => {
              data2.append('file', image)
            })
            let url2 = "https://criptoadviser.com/api/servicios/manyfile/";  
            
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
                gallery: res.data.rutes,
                type: type,
                
              };
          
              axios.put(`https://criptoadviser.com/api/servicios/${object._id}`,info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
          }
        }
       
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
                  <Grid style={{paddingRight:20}} item md={3} xs={3}>
                  <TextField
                fullWidth
                label="Tipo"
                name="image"
                onChange={(e) => {settype(e.target.value)}}
                required
                select
                SelectProps={{ native: true }}
                value={type}
                variant="outlined"
              >
               {acceslevels.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
                      </Grid>
                      <Grid style={{paddingRight:20}} item md={3} xs={3}>
                      <TextField
                fullWidth
                label="Telefono"
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
