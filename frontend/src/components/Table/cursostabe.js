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

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

import Edit from '@material-ui/icons/Edit';

import ModalCreateProduct from 'components/Modals/modalcreateproduct';
import ModalEditProduct from 'components/Modals/modaleditproduct';
import ModalCreateCursos from 'components/Modals/modalcreatecursos';
import ModalEditCursos from 'components/Modals/modaleditcursos';

const useStyles = makeStyles(styles);



export default function Cursostable() {
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
    const result = await axios.get("https://criptoadviser.com/api/cursos",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setdata(result.data)  
  };

  React.useEffect( () => {
    
    asd();
  },[])

function deleteelement(e,id2) {
    e.preventDefault();
    axios.delete(`https://criptoadviser.com/api/cursos/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then(() => {
      asd()
      })
    

}


  
 

  


const columns = React.useMemo(
  () => [
    
    
        {
          Header: '',
          accessor: 'image',
        },
        {
          Header: 'Titulo',
          accessor: 'name',
        },
        {
            Header: 'Descripcion',
            accessor: 'descripcion',
          },
        {
          Header: 'Precio',
          accessor: 'price',
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
      <ModalCreateCursos asd={asd} setOpen={setOpen} ></ModalCreateCursos>
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
      <ModalEditCursos asd={asd} setOpen={setOpen2} info={info}></ModalEditCursos>
    </form>
          </div>
        </Fade>
      </Modal>
      
      
     
            <Grid container alignItems="center" style={{padding:5}}>
              <Grid xs={12} sm={12} md={9} >
              <Grid style={{paddingLeft:10}} container alignItems="center" justifyContent="flex-start">
              <h3 style={{margin:0}}>Cursos</h3>
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
                        {index === 0 ? <img alt="img" src={cell.value} style={{width:200}}></img> : index === 3 ? `${cell.value} $` : cell.render('Cell')}
                      </TableCell>
                      
                    )
                  })}
                  <TableCell align="right">
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






