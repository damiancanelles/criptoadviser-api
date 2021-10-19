import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useTable, useGlobalFilter } from 'react-table';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";

import {TextField, InputAdornment, SvgIcon, Grid} from "@material-ui/core";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReactPlayer from 'react-player';
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

import Edit from '@material-ui/icons/Edit';

import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import ModalCreateNoticias from 'components/Modals/modalcreatenoticias';
import ModalEditNoticias from 'components/Modals/modaleditnoticias';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ModalCreateService from 'components/Modals/modalcreateservices';
import ModalEditService from 'components/Modals/modaleditservices';

const useStyles = makeStyles(styles);



export default function ServiciosTable() {
  const [data, setdata] = React.useState([])
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [info, setinfo] = React.useState({});


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  const asd = async () => {
    const result = await axios.get("https://criptoadviser.com/api/servicios",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setdata(result.data)  
  };

  React.useEffect( () => {
    
    asd();
  },[])

function deleteelement(e,id2) {
    e.preventDefault();
    axios.delete(`https://criptoadviser.com/api/servicios/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then(() => {
      asd()
      })
    

}


  
 

  


const columns = React.useMemo(
  () => [
    
        {
            Header: 'Imagen',
            accessor: 'image',
        },
        {
            Header: 'Titulo',
            accessor: 'titulo',
        },
        {
            Header: 'Descripcion',
            accessor: 'descripcion',
        },
        {
            Header: 'Tipo',
            accessor: 'type',
        },
        {
            Header: 'Informacion de Contacto',
            accessor: 'contactinfo',
        },
          
        
        
        
      
  ],
  []
)

const { headerGroups, rows, prepareRow, state, setGlobalFilter  } = useTable({
  columns,
  data,
}, useGlobalFilter)

const {globalFilter} = state

  return (
    
    <Card >
          <Grid style={{paddingTop:10,paddingLeft:10,paddingRight:10,}}>
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className={classes.paper}>
        <form
      autoComplete="off"
      noValidate
      
    >
      <ModalCreateService asd={asd} setOpen={setOpen}></ModalCreateService>
    </form>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
        <div className={classes.paper}>
        <form
      autoComplete="off"
      noValidate
      
    >
      <ModalEditService asd={asd} setOpen={setOpen2} object={info}></ModalEditService>
    </form>
          </div>
        </Fade>
      </Modal>
      
      
     
            <Grid container alignItems="center" style={{padding:5}}>
              <Grid xs={12} sm={12} md={9} >
              <Grid style={{paddingLeft:10}} container alignItems="center" justifyContent="flex-start">
              <h3 style={{margin:0}}>Servicios Independientes</h3>
              <IconButton  
              color="primary" 
              variant="contained" 
               aria-label="contained primary button"
                onClick={() => {handleOpen()}}><AddCircleIcon></AddCircleIcon></IconButton>
              </Grid>
              </Grid>
              <Grid style={{padding:0}} xs={12} sm={12} md={3}>
              
                <TextField
                
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa fa-search fa-lg"></i>
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar usuario"
                variant="outlined"
                value={globalFilter || ""}
                onChange={(e) => {setGlobalFilter(e.target.value)}}


              />
              </Grid>
            </Grid>
          </Grid>
          <CardBody style={{padding:0}}>
          <TableContainer>
          
          <Table className={classes.table} aria-label="customized table">
            
            <TableHead>
            
            {headerGroups.map((headerGroup,key) => (
              <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column,key) => (
                  <TableCell key={key} component="th" scope="row" {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
                
              </TableRow>
            ))}
            
            </TableHead>
            <TableBody>
            
            {rows.map((row,key) => {
              prepareRow(row)
              return (
                <TableRow key={key} {...row.getRowProps()}>
                  
                  {row.cells.map((cell,index) => {
                    return (
                      <TableCell key={index} {...cell.getCellProps()}>
                        {index === 0 ? <img alt="carousel" src={cell.value} style={{height:100}}></img> : index === 4 ? <Grid container>
                             <Grid md={12} sm={12}>
                             <h4 style={{display: cell.value.numero === "" ? "none" : null,margin: 0}}>Número de telefono:</h4>
                             <h4 style={{display: cell.value.numero === "" ? "none" : null,margin: 0}}> +53 {cell.value.numero}</h4> </Grid>  
                            <IconButton href={cell.value.telegram} style={{display: cell.value.telegram === "" ? "none" : null}}> <TelegramIcon style={{color: "black"}}></TelegramIcon> </IconButton>
                            <IconButton href={cell.value.whatsapp} style={{display: cell.value.whatsapp === "" ? "none" : null}}> <WhatsAppIcon style={{color: "black"}}></WhatsAppIcon> </IconButton>
                            <IconButton href={cell.value.facebook} style={{display: cell.value.facebook === "" ? "none" : null}}> <FacebookIcon style={{color: "black"}}></FacebookIcon> </IconButton>
                            <IconButton href={cell.value.instagram} style={{display: cell.value.instagram === "" ? "none" : null}}> <InstagramIcon style={{color: "black"}}></InstagramIcon> </IconButton>
                            <IconButton href={cell.value.twitter} style={{display: cell.value.twitter === "" ? "none" : null}}> <TwitterIcon style={{color: "black"}}></TwitterIcon> </IconButton>
                            <IconButton href={cell.value.ubicacion} style={{display: cell.value.ubicacion === "" ? "none" : null}}> <LocationOnIcon style={{color: "black"}}></LocationOnIcon> </IconButton>  
                        </Grid> : cell.render('Cell')}
                      </TableCell>
                      
                    )
                  })}
                  
                  <TableCell width="100px" align="right">
                  <IconButton color="secondary" onClick={(e) => {deleteelement(e,row.original._id)}} aria-label="add an alarm">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" onClick={() => {handleOpen2();setinfo(row.original)}} aria-label="add an alarm">
       <Edit></Edit> 
      </IconButton>
                  </TableCell>
                  
                  
                </TableRow>
              )
            })}
                  
              
            </TableBody>
          </Table>
        </TableContainer>
          </CardBody>
        </Card>
    
      
      
            
          
        
    
    
  );
}






