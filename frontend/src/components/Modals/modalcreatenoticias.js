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
  import { Loader} from 'react-loaders';
  import 'react-block-ui/style.css';
  import 'loaders.css/loaders.min.css';
  

  

export default function ModalCreateNoticias({setOpen, asd, }) {
    const [titulo,settitulo] = React.useState("");
    const [descripcion,setdescripcion] = React.useState("");
    const [cosa1,setcosa1] = React.useState("");
    const [cosa,setcosa] = React.useState("");
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    const [stop,setstop] = React.useState(false)
    
    function handleImage(e){
        const {files} = e.target;
        setcosa(files[0]);
       
  
      };
      function handleMedia(e){
        const {files} = e.target;
        setcosa1(files[0]);
       
  
      };

    async function register(e) {
        e.preventDefault();
        setstop(true);
       
        const data = new FormData() 
        data.append('file', cosa)
        let url = "https://criptoadviser.com/api/noticias/file/";

        await axios.post(url, data, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(async res => { 
            const image = res.data.path;
            
            const data1 = new FormData() 
            data1.append('file', cosa1)
            let url1 = "https://criptoadviser.com/api/noticias/file/";
            
            await axios.post(url1, data1, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(res => {
                const info = {
                    titulo: titulo,
                    descripcion: descripcion,
                    media: res.data.path,
                    image: image,
                    
                  };
              
                  axios.post("https://criptoadviser.com/api/noticias/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
          title="Agregar Noticia"
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
        onChange={(e) => {handleMedia(e)}}
        id="contained-button-file2"
        style={{display:"none"}}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file2">
        <Button  style={{marginTop:20}} variant="contained" color="primary" component="span">
          Subir Media
        </Button>
      </label></Grid>       
                  
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
