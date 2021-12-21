import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import axios from 'axios'


export const Cursos = ({ id }) => {
    const [data, setdata] = React.useState([])
    const [data2, setdata2] = React.useState([])
    const [estado, setestado] = React.useState("Disponible")
    const asd = async () => {
        const result = await axios.get("https://criptoadviser.com/api/cursos", { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
        setdata(result.data)
        console.log(result.data)
    };

    const asd2 = async () => {
        const result = await axios.get(`https://criptoadviser.com/api/cursos/cursos/${id}`, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
        setdata2(result.data)
        console.log(result.data)
    };

    React.useEffect(() => {

        asd();
        asd2();
    }, [])

    return (
        <Grid
            style={{ width: '100%', margin: 'auto'}}
            justifyContent='center'
            alignContent='center'
            container
            spacing={2}
        >

            {
                data.map((curso) => {
                    return (
                        <Grid item xl={3} style={{marginBottom: '20px'}}>
                            <Card style={{ width: '300px', height:'250px'}} elevation={3} >
                                <CardMedia
                                    component='img'
                                    height='140'
                                    image={curso.image}
                                    alt='curso' />
                                <CardContent>
                                    <h4 style={{ margin: 0 }}>{curso.name}</h4>
                                    {data2.some((element) => element.curso._id === curso._id) ? <h4 style={{ margin: 0, color: "blue" }}>Pagado</h4> : <h4 style={{ margin: 0, color: "blue" }}>Disponible</h4>}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
