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
  

  

export default function ModalEditUser({setOpen, asd, info}) {
    const [señales,setseñales] = React.useState(info.señales);
    const [lending,setlending] = React.useState(info.lending);
    const [link,setlink] = React.useState(info.link);
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    const [stop,setstop] = React.useState(false);
    
  

    async function register(e) {
        e.preventDefault();
        setstop(true);
       
         
            const qwe = {
                user: info._id,
                señales: señales,
                lending: lending,
                link: link
                
              };
          
              axios.post(`https://criptoadviser.com/api/users/editA/`,qwe,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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

    return(
      <BlockUi tag="div" blocking={stop} loader={<Loader active type="line-scale" color="blue"/>}>
        <Card>
        <CardHeader
          align="center"
          subheader="Rellene la informacion necesaria"
          title="Agregar Clase"
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
                label="Dinero del lending"
                name="lending"
                onChange={(e) => {setlending(e.target.value)}}
                required
                value={lending}
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
                label="Link de referidos"
                name="referidos"
                onChange={(e) => {setlink(e.target.value)}}
                required
                value={info}
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
                label="Link del canal de Señales"
                name="link"
                onChange={(e) => {setseñales(e.target.value)}}
                required
                value={señales}
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