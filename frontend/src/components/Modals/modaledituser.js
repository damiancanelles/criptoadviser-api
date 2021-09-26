import React from 'react';
import axios from 'axios';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
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

  const acceslevels = [
    {
      value: '1',
      label: 'Freelancers'
    },
    {
      value: '2',
      label: 'Curso de Traiding'
    },
    {
      value: '3',
      label: 'Todo'
    }
  ];

export default function ModalEditUser({setOpen, asd, info}) {
    
 
    
    const [expirationdate,setexpirationdate] = React.useState(info.expirationdate.split("T")[0]);
    const [acceslevel,setacceslevel] = React.useState(info.acceslevel);
    const [error,seterror] = React.useState(false);
    const [texterror,settexterror] = React.useState(" ");
    const [stop,setstop] = React.useState(false)
    
    
    
    
  
    async function register(e) {
        e.preventDefault();
        setstop(true);
        
       
        const cosa = {
          
          expirationdate: expirationdate,
          acceslevel: acceslevel
        };
    
    
       axios.put(`https://criptoadviser.com/api/users/${info._id}`,cosa,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
          title="Editar Usuario"
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
                label="Nivel de acceso"
                name="acceslevel"
                onChange={(e) => {setacceslevel(e.target.value)}}
                required
                select
                SelectProps={{ native: true }}
                value={acceslevel}
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
            <Grid  
              item
              md={6}
              xs={12}>
            <TextField
                fullWidth
                variant="outlined"
                required
                id="date"
                label="Fecha de Expiracion"
                type="date"
                defaultValue={info.expirationdate}
                value={expirationdate}
                onChange={(e) => {setexpirationdate(e.target.value)}}
                InputLabelProps={{
                shrink: true,
                }}
             />
            </Grid>
            <Grid 
              item
              md={12}
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

ModalEditUser.propTypes = {
  setOpen: PropTypes.func,
  asd: PropTypes.func,
  info: PropTypes.object,
}