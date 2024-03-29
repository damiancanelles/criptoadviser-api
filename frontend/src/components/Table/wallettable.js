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

import {TextField, InputAdornment, SvgIcon,  Grid} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import ModalEditWallet from 'components/Modals/modaleditwallet';
import ModalCreateWallet from 'components/Modals/modalcreatewallet';
import AddCircleIcon from '@material-ui/icons/AddCircle';


import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);



export default function Wallettable() {
    const [data, setdata] = React.useState([])
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [id, setid] = React.useState("");
   
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };
  
    const asd = async () => {
      const result = await axios.get("https://criptoadviser.com/api/wallets",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
      setdata(result.data)  
    };
  
    React.useEffect( () => {
      
      asd();
    },[])
  
  function deleteelement(e,id2) {
      e.preventDefault();
      axios.delete(`https://criptoadviser.com/api/wallets/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
            Header: 'Nombre',
            accessor: 'name',
          },
          {
            Header: 'Link',
            accessor: 'link',
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
      <ModalCreateWallet asd={asd} setOpen={setOpen} ></ModalCreateWallet>
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
      <ModalEditWallet asd={asd} info={id} setOpen={setOpen2} ></ModalEditWallet>
    </form>
          </div>
        </Fade>
      </Modal>
     
      <Grid container alignItems="center" style={{padding:5}}>
              <Grid xs={12} sm={12} md={9} >
              <Grid style={{paddingLeft:10}} container alignItems="center" justifyContent="flex-start">
              <h3 style={{margin:0}}>Wallets</h3>
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
          <CardBody>
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
                        {index === 0 ? cell.value === "" ? null :  <img style={{width:40}} alt="img" className="imagewallet"
                 
                 src={require(`assets/img/${cell.value}`)}
               ></img> : cell.render('Cell') }
                      </TableCell>
                      
                    )
                  })}
                  <TableCell align="right">
                  <IconButton color="primary" onClick={() => {
                      setOpen2(true);
                      setid(row.original);
                      console.log(row)
                      
                    }} aria-label="add to shopping cart">
        <Edit />
      </IconButton>
                  <IconButton color="secondary" onClick={(e) => {deleteelement(e,row.original._id)}} aria-label="add an alarm">
        <DeleteIcon />
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