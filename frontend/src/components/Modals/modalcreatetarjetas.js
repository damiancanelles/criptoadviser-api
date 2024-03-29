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
  

  

export default function ModalCreateTarjetas({setOpen, asd, }) {
    
    const [name,setname] = React.useState("");
    const [moneda,setmoneda] = React.useState("");
    const [numero,setnumero] = React.useState("");
    const [stop,setstop] = React.useState(false);
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    
    async function register(e) {
        e.preventDefault();
        setstop(true);
        
       
        const info = {
          name: name,
          moneda: moneda,
          numero: numero,
        };
    
    
       axios.post("https://criptoadviser.com/api/tarjetas/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
        .then((res) => {
          console.log(res.data);
          if (res.data.message == null) {
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

    return(
      <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue"/>}>
        <Card>
        <CardHeader
          align="center"
          subheader="Rellene la informacion necesaria"
          title="Agregar Tarjeta"
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
                label="Name"
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
                label="Moneda"
                name="moneda"
                onChange={(e) => {setmoneda(e.target.value)}}
                required
                value={moneda}
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
                label="Tarjeta"
                name="numero"
                onChange={(e) => {setnumero(e.target.value)}}
                required
                value={numero}
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

