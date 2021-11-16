import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';
import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { grayColor } from 'assets/jss/material-dashboard-react';
import { infoColor } from 'assets/jss/material-dashboard-react';
import GetAppIcon from '@material-ui/icons/GetApp';
import HearingIcon from '@material-ui/icons/Hearing';
import axios from 'axios';

import moment from 'moment'






const useStyles = makeStyles((theme) => ({
    gridproductos: {
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
        paddingRight: 5,
          },
    },
    acordion: {
        backgroundColor: 'rgb(235, 235, 235)',
        margin: 5,
        
      },
      grid: {
        padding: 5,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
          },
      },
      image2: {
        width: '80%',
        margin: `5%`,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        margin: 0,
        },
      },
      gridquestions: {
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 40,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          padding: 0,
        },
      },
      grid2: {
        borderRadius: 10,
        backgroundColor: '#030523',
        height: 80,
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 40,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          padding: 0,
        },
      },
      contactimage: {
          height: 80,
      },
      text: {
          margin: 0,
      },
      text2: {
        color: grayColor[0],
        margin: 0,
    },
    link: {
        textTransform: 'none',
    },
    icon: {
        padding: 5,
        borderRadius: 10,
        marginRight: 10,
        borderStyle: 'solid',
        border: 1,
    },
    instructor: {
        width: 250,
    },
    tips: {
        padding:"5px",
        paddingLeft: 60,
        [theme.breakpoints.down('xs')]: {
            padding:"5px",
        
          },
    },
    clase: {
        margin: 0,
        backgroundColor: whiteColor,
        padding: 5,
        borderRadius: 5,
    },
    claseheader: {
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 0,
    },
}))


function ClasesPasadasE({id}) {
    const classes = useStyles();
    const [audio,setaudio] = React.useState(-1);
    const [data, setdata] = React.useState([]);
    const [date] = React.useState(moment())
    
    const asd = async () => {
      const result = await axios.get(`https://criptoadviser.com/api/cursos/clases/${id}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
      setdata(result.data);

    };
  
    React.useEffect( () => {
      
      asd();
    },[])
    
    return (
      
        
          
        
            <Grid style={{"padding":"5px"}} item md={8} sm={12} xs={12}>
                <h3 style={{marginBottom: 10,marginTop: 10}} className={classes.text}>Proximas Clases</h3>
            {data.map((clase,index) => {
              return(
                moment(clase.datestart) > date ? <Accordion className={classes.clase}>
                <AccordionSummary
                  className={classes.claseheader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className={classes.text}>{clase.titulo}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                    <Grid style={{padding:5}} item md={8} sm={12} xs={12}>
                      <p className={classes.text}>{clase.descripcion}
                    </p>
                      
                  </Grid>
                    <Grid style={{padding:5}} item md={4} sm={12} xs={12}>
                      <p className={classes.text}>Fecha: {clase.datestart.split("T")[0]}</p>
                      <p className={classes.text}>Duracion: de {clase.duracion}</p>
                      <p className={classes.text}>Link del canal de voz: <a href={clase.link} style={{color: infoColor[0]}}>{clase.link.split("t.me/")[1]}</a></p>
                  </Grid>
                    </Grid>
                  
                </AccordionDetails>
              </Accordion> : null
              )
            })}
      
            <h3 style={{marginBottom: 10,marginTop: 10}} className={classes.text}>Clases Pasadas</h3>
            {data.map((clase,index) => {
              return(
                moment(clase.datestart) < date ? <Accordion className={classes.clase}>
                <AccordionSummary
                  className={classes.claseheader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className={classes.text}>{clase.titulo}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                    <Grid style={{padding:5}} item md={8} sm={12} xs={12}>
                      <p className={classes.text}>{clase.descripcion}
                    </p>
                      
                  </Grid>
                    <Grid style={{padding:5}} item md={4} sm={12} xs={12}>
                      <p className={classes.text}>Fecha: {clase.datestart.split("T")[0]}</p>
                      <p className={classes.text}>Duracion: de {clase.duracion}</p>
                      <p style={{display: clase.file === "" ? 'none' : null}} className={classes.text}>Audio grabado: <IconButton onClick={()=>{setaudio(index)}}><HearingIcon style={{color:"black"}}></HearingIcon></IconButton></p>
                  </Grid>
                  <Grid style={{padding:5}} item md={12} sm={12} xs={12}>
                {audio === index ? <ReactPlayer
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                controls={true}
                url={clase.file}
                className="react-player"
                width="100%"
                height="50px"
                /> : null}
          </Grid>
                    </Grid>
                  
                </AccordionDetails>
              </Accordion> : null
              )
            })}
            
            </Grid>
            
        
       
        
    )
}

export default ClasesPasadasE
