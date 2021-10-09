import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Logo1 from 'assets/img/Logo1.png'
import { infoColor } from 'assets/jss/material-dashboard-react';

export const AccountBotInfo = () => {
    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            alignContent='center'>
            
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
                             <img src={Logo1}
                              style={{height:'100px', width:'100px'}}
                              sx={{
                               height: 100,
                               width: 100
                              }}/>
                       
                             <Typography
                                 component='h3'
                              
                                 >
                             Hola bienvenido a CriptoADVISER esta pagina usa para la gran mayoria
                             de sus servicios la red social telegram. Si desea recibir nuestras notificaciones
                             para estar siempre al dia por favor acceda e inicialice nuestro bot.
                             <a href="https://t.me/notifyweb_bot" style={{color:infoColor[0]}}> CriptoADVISER_bot</a>
                             </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
