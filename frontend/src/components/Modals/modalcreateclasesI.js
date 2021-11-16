import React from 'react';
import PropTypes from 'prop-types';
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
  

  

export default function ModalCreateClaseI({setOpen, asd, id}) {
    const [title,settitle] = React.useState("");
    const [descripcion,setdescripcion] = React.useState("");
    const [link,setlink] = React.useState("");
    const [datestart,setdatestart] = React.useState("");
    const [inicio,setinicio] = React.useState("");
    const [final,setfinal] = React.useState("");
    const [cosa,setcosa] = React.useState("");
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ");
    const [stop,setstop] = React.useState(false);
    
    function handleImage(e){
        const {files} = e.target;
        setcosa(files[0]);
       
  
      };

    async function register(e) {
        e.preventDefault();
        setstop(true);

        const data = new FormData() 
        data.append('file', cosa)
        let url = "https://criptoadviser.com/api/clases/file/";

        if (cosa === "") {
          const info = {
            titulo: title,
            descripcion: descripcion,
            link: link,
            datestart: datestart,
            duracion: `${inicio} - ${final}`,
            file: cosa,
            cursoid: id,
            
          };
      
          axios.post("https://criptoadviser.com/api/clasesI/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
            const info = {
                titulo: title,
                descripcion: descripcion,
                link: link,
                datestart: datestart,
                duracion: `${inicio} - ${final}`,
                file: res.data.path,
                cursoid: id,
                
              };
          
              axios.post("https://criptoadviser.com/api/clasesI/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
                label="Titulo"
                name="titulo"
                onChange={(e) => {settitle(e.target.value)}}
                required
                value={title}
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
                label="Link"
                name="link"
                onChange={(e) => {setlink(e.target.value)}}
                required
                value={link}
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
              <Grid container >
             <Grid style={{paddingRight:20}} item md={6} sm={6} xs={6}>
             <TextField
              fullWidth
              id="date"
              label="Fecha"
              type="date"
              variant="outlined"
              defaultValue="2017-05-24"
              onChange={(e) => {setdatestart(e.target.value)}}
              value={datestart}
              InputLabelProps={{
                shrink: true,
              }}
            />
             </Grid>
             <Grid style={{paddingRight:20}} item md={3} sm={3} xs={3}>
             <TextField
             fullWidth
                      id="time"
                      label="Inicio"
                      type="time"
                      variant="outlined"
                      defaultValue="07:30"
                      onChange={(e) => {setinicio(e.target.value)}}
                      value={inicio}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      inputProps={{
                      step: 300, // 5 min
                      }}
                  />
             </Grid>
             <Grid item md={3} sm={3} xs={3}>
             <TextField
             fullWidth
                      id="time"
                      label="Fin"
                      type="time"
                      variant="outlined"
                      defaultValue="07:30"
                      onChange={(e) => {setfinal(e.target.value)}}
                      value={final}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      inputProps={{
                      step: 300, // 5 min
                      }}
                  />
             </Grid>
             <Grid item md={6} xs={12}>
             <input
        onChange={(e) => {handleImage(e)}}
        accept="audio/*"
        id="contained-button-file"
        style={{display:"none"}}
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button  style={{marginTop:20}} variant="contained" color="primary" component="span">
          Subir Audio
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
