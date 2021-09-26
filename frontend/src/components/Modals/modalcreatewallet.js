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
  import { Loader } from 'react-loaders';
  import 'react-block-ui/style.css';
  import 'loaders.css/loaders.min.css';

  const acceslevels = [
    {
      value: 'bitcoin.png',
      label: 'Bitcoins'
    },
    {
      value: 'ethereum.png',
      label: 'Ethereum'
    },
    {
      value: 'usdt.png',
      label: 'USDT'
    }
  ];

export default function ModalCreateWallet({setOpen, asd, }) {
    
    const [name,setname] = React.useState("");
    const [image,setimage] = React.useState("bitcoin.png");
    const [link,setlink] = React.useState("");
    const [stop,setstop] = React.useState(false);
    const [error,seterror] = React.useState(false)
    const [texterror,settexterror] = React.useState(" ")
    
    async function register(e) {
        e.preventDefault();
        setstop(true);
        
       
        const info = {
          name: name,
          image: image,
          link: link,
        };
    
    
       axios.post("https://criptoadviser.com/api/wallets/",info,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
          title="Agregar Wallet"
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
                label="Criptomoneda"
                name="image"
                onChange={(e) => {setimage(e.target.value)}}
                required
                select
                SelectProps={{ native: true }}
                value={image}
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

ModalCreateWallet.propTypes = {
  setOpen: PropTypes.func,
  asd: PropTypes.func,
}