import React from 'react';
import axios from 'axios';
import { Alert, Container } from 'reactstrap';
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

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

export default function ModalEditService({setOpen, asd, info}) {
    
 
    const [name,setname] = React.useState(info.name);
    const [caracteristicas,setcaracteristicas] = React.useState("");
    const [caracteristicaslist,setlist] = React.useState(info.caracteristicas);
    const [descripcion,setdescripcion] = React.useState(info.descripcion);
    const [acceslevel,setacceslevel] = React.useState(info.acceslevel);

    const [price,setprice] = React.useState(info.price);
    const [error,seterror] = React.useState(false);
    const [texterror,settexterror] = React.useState(" ");
    
    
    
    
  
    async function register(e) {
        e.preventDefault();
        
        
       
        const cosa = {
            name: name,
            descripcion: descripcion,
            price: price,
            acceslevel: acceslevel,
            caracteristicas: caracteristicaslist
        };
    
    
       axios.put(`https://criptoadviser.com/api/products/${info._id}`,cosa,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
        .then((res) => {
          console.log(res.data);
          if (res.data.message == null) {
            asd();
            setOpen(false);
            
            
        
            
          } 
          else {
            settexterror(res.data.message)
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
              md={4}
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
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Precio en USDT"
                name="price"
                onChange={(e) => {setprice(e.target.value)}}
                required
                value={price}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
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
              md={12}
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
              >
             
              </TextField>
              
            </Grid>

            
            
            <Grid
              item
              md={3}
              xs={12}
            >
              <TextField
                
                fullWidth="100%"
                label="Caracteristicas"
                name="caracteristicas"
                onChange={(e) => {setcaracteristicas(e.target.value)}}
                required
                value={caracteristicas}
                variant="outlined"
              />
              
            </Grid>
            <Grid
              item
              md={1}
              xs={12}
            >

            <IconButton 
            style={{"margin-left":"-15px"}}
            aria-label="add"
            onClick={(e)=> {
                 const list = caracteristicaslist;
                 list == "" ? setlist(caracteristicas) :
                 setlist(`${list}_${caracteristicas}`);
                 console.log(caracteristicaslist);
             }}
            >
              <AddCircleOutlineIcon fontSize="large"/>
            </IconButton>
                
            </Grid>
            
            <Grid 
              item
              md={8}
              xs={12}>
            {caracteristicaslist == "" ? null : caracteristicaslist.split("_").map((car,index)=>(
            <Button
            style={{"margin":"3px"}}
             color="primary"
             variant="contained"
             size="small"
             onClick={(e) => {
                 const lista = caracteristicaslist.split("_");
                 const i = lista.findIndex((element) => element == car);
                 lista.splice(i,1);
                 const list = lista.join("_");
                 setlist(list);
             }}
             
             >
             {car}
           </Button>
           ))}
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