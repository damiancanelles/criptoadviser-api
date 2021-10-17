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

import {TextField, InputAdornment, SvgIcon, Button, Grid} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import ModalImage from 'components/Modals/modalimage';

const useStyles = makeStyles(styles);



export default function UserTrans() {
  const [data, setdata] = React.useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [image, setimage] = React.useState("");
 
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  async function confirm(e,idd,acc,qwe) {
    e.preventDefault();

    
    axios.get(`https://criptoadviser.com/api/transaccionsmc/confirm/${qwe}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then((res) => {
      if (res.data.mesage === null) {
        asd();
         
      }

      })
      const cosa = {
        user: idd,
        subscription: acc,
    };
  
  
     axios.post(`https://criptoadviser.com/api/users/edit/`,cosa,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
      .then((res) => {
        console.log(res.data);
       
      }); 
  }

  const asd = async () => {
    const result = await axios.get("https://criptoadviser.com/api/transaccionsmc",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setdata(result.data)  
  };

  React.useEffect( () => {
    
    asd();
  },[])

  

function deleteelement(e,id2) {
    e.preventDefault();
    axios.delete(`https://criptoadviser.com/api/transaccionsmc/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then(() => {
      asd()
      })
    

}



const columns = React.useMemo(
  () => [
        {
          Header: 'Moneda',
          accessor: 'moneda',
        },
        {
            Header: 'Nombre de Usuario',
            accessor: 'username',
        },
        {
          Header: 'Monto',
          accessor: 'monto',
        },
        {
          Header: 'Comprovante de Pago',
          accessor: 'image',
        },
         {
            Header: 'Confirmation',
            accessor: 'confirmation',
          },
          
      
  ],
  []
)

const {  headerGroups, rows, prepareRow, state, setGlobalFilter  } = useTable({
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
      <ModalImage image={image}></ModalImage>
    </form>
          </div>
        </Fade>
      </Modal>
     
          <Grid container alignItems="center" style={{padding:5}}>
              <Grid  item xs={12} sm={12} md={9} >
              <Grid style={{paddingLeft:10}} container alignItems="center" justifyContent="flex-start">
              <h3 style={{margin:0}}>Transacciones Monedas Cubanas</h3>
              
              </Grid>
              </Grid>
              <Grid item style={{padding:0}} xs={12} sm={12} md={3}>
              
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
                placeholder="Buscar transaccion"
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
                        {index === 3 ? <IconButton onClick={() => {
                            setimage(cell.value)
                            handleOpen();
                            }}><VisibilityIcon style={{color:"black"}}></VisibilityIcon></IconButton> : index === 4 ? cell.value === true ? "si" : "no" : cell.render('Cell')}
                      </TableCell>
                      
                    )
                  })}
              
                  
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