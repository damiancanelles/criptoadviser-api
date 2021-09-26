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


import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);



export default function Transaccionstable() {
    const [data, setdata] = React.useState([]);
  const classes = useStyles();
 
  
  
 
  async function confirm(e,idd,acc,qwe) {
    e.preventDefault();

    
    axios.get(`https://criptoadviser.com/api/transaccions/confirm/${qwe}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
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
    const result = await axios.get("https://criptoadviser.com/api/transaccions",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setdata(result.data)  
  };

  React.useEffect( () => {
    
    asd();
  },[])

  

function deleteelement(e,id2) {
    e.preventDefault();
    axios.delete(`https://criptoadviser.com/api/transaccions/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
    .then(() => {
      asd()
      })
    

}



const columns = React.useMemo(
  () => [
        {
          Header: '',
          accessor: 'idwallet',
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
          Header: 'Hash',
          accessor: 'hash',
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
          
     
          <Grid container alignItems="center" style={{padding:5}}>
              <Grid xs={12} sm={12} md={9} >
              <Grid style={{paddingLeft:10}} container alignItems="center" justifyContent="flex-start">
              <h3 style={{margin:0}}>Transacciones Criptomonedas</h3>
              
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
                        {index === 0 ? <img style={{width:40}} alt="img" className="imagewallet"
                 
                 src={require(`assets/img/${cell.value}`)}
               ></img> : index === 2 ? `${cell.value} USDT`  : index === 4 ? cell.value === true ? "si" : "no" : cell.render('Cell')}
                      </TableCell>
                      
                    )
                  })}
                  <TableCell align="right">
                  <Button color="primary" onClick={(e) => {
                      confirm(e,row.original.username,row.original.subscription,row.original._id)
                    }}>Confirmar</Button>
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