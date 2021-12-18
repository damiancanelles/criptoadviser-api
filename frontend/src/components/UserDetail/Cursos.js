import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Logo1 from 'assets/img/Logo1.png'
import axios from 'axios'
import { infoColor } from 'assets/jss/material-dashboard-react';

export const Cursos = ({id}) => {
    const [data,setdata] = React.useState([])
    const [data2,setdata2] = React.useState([])
    const [estado,setestado] = React.useState("Disponible")
    const asd = async () => {
        const result = await axios.get("https://criptoadviser.com/api/cursos",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
        setdata(result.data)
        console.log(result.data)  
      };

      const asd2 = async () => {
        const result = await axios.get(`https://criptoadviser.com/api/cursos/cursos/${id}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
        setdata2(result.data)  
        console.log(result.data)  
      };  
    
      React.useEffect( () => {
        
        asd();
        asd2();
      },[])

    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            alignContent='center'>
            
            {
                data.map((curso) => {
                   
                    return (
                        <Card elevation={3}>
                <CardContent>
                    <Grid
                        item
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <Grid container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            alignContent='center'>
                             <img src={curso.image}
                              style={{height:'100px'}}
                              sx={{
                               height: 100,
                               width: 100
                              }}/>
                       
                                <h4 style={{margin:0}}>{curso.name}</h4>
                                {data2.some((element) => element.curso._id === curso._id) ? <h4 style={{margin:0,color:"blue"}}>Pagado</h4>:<h4 style={{margin:0,color:"blue"}}>Disponible</h4>}
                                
                           
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
                    )
                })
            }
        </Grid>
    )
}
