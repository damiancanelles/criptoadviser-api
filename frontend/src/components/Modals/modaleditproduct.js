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
  

  

export default function ModalEditProduct({setOpen, asd, info}) {
    const [name,setname] = React.useState(info.name);
    const [descripcion,setdescripcion] = React.useState(info.descripcion);
    const [price,setprice] = React.useState(info.price);
    const [cosa,setcosa] = React.useState(info.image);
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    const [stop,setstop] = React.useState(false)
    
    function handleImage(e){
        const {files} = e.target;
        setcosa(files[0]);
       
  
      };

    async function register(e) {
        e.preventDefault();
        setstop(true);
       
        const data = new FormData() 
        data.append('file', cosa)
        let url = "https://criptoadviser.com/api/products/file/";

        if (cosa === info.image) {
            const qwe = {
                name: name,
                descripcion: descripcion,
                price: price,
                image: cosa,
                
              };
          
              axios.put(`https://criptoadviser.com/api/products/${info._id}`,qwe,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
            await axios.post(url, data, { headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
            .then(res => { 
            const qwe = {
                name: name,
                descripcion: descripcion,
                price: price,
                image: res.data.path,
                
              };
          
              axios.put(`https://criptoadviser.com/api/products/${info._id}`,qwe,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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

        
    }

    return(
      <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue"/>}>
        <Card>
        <CardHeader
          align="center"
          subheader="Rellene la informacion necesaria"
          name="Agregar Clase"
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
                label="Nombre"
                name="name"
                onChange={(e) => {setname(e.target.value)}}
                required
                value={name}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Precio"
                name="price"
                onChange={(e) => {setprice(e.target.value)}}
                required
                value={price}
                variant="outlined"
              />
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
      </label>       
                  
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