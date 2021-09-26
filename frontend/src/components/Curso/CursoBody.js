import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { grayColor } from 'assets/jss/material-dashboard-react';
import CursoButton from './CursoButton';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PanToolIcon from '@material-ui/icons/PanTool';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Hidden } from '@material-ui/core';
import ClasesPasadas from './ClasesPasadas';
import useAuth from 'auth/useauth';
import moment from 'moment';






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
        backgroundColor: 'white',
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
          textAlign: "justify",
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


function CursoBody() {
    const classes = useStyles();
    const [user] = useAuth();
    
    return (
      
        <div  id='caja'>
          
         <Grid container className={classes.gridproductos} >
         <CursoButton></CursoButton>
        
          
        {moment(user.subscription) > moment() ? <div>
        <Grid  container className={classes.gridquestions} justifyContent="center" alignItems="flex-start">
        <Grid style={{"padding":"5px"}} item md={8} sm={12} xs={12}>
        <h3 className={classes.text}>Acerca del Curso</h3>
        <h4 className={classes.text}>
            El curso se desarrolla a traves de telegram utilizando canales de voz. La subscripcion incluye asistencia pesonalizada, tips, señales y todo tipo de cosas.El curso se desarrolla a traves de telegram utilizando canales de voz. La subscripcion incluye asistencia pesonalizada, tips, señales y todo tipo de cosas.
        </h4>
        </Grid>
        <Grid className={classes.tips} item md={4} sm={12} xs={12}>
            
            <Grid style={{"marginBottom":"10px"}} container alignItems="center" justifyContent="flex-start">
            <CalendarTodayIcon className={classes.icon}></CalendarTodayIcon>
            <h4 className={classes.text}>Horarios Flexible</h4>
            </Grid>
            <Grid style={{"marginBottom":"10px"}} container alignItems="center" justifyContent="flex-start">
            <PanToolIcon className={classes.icon}></PanToolIcon>
            <h4 className={classes.text}>Asistencia Personalizada</h4>
            </Grid>
            <Grid style={{"marginBottom":"10px"}} container alignItems="center" justifyContent="flex-start">
            <LaptopChromebookIcon className={classes.icon}></LaptopChromebookIcon>
            <h4 className={classes.text}>Curso 100% a distancia</h4>
            </Grid>
            <Grid style={{"marginBottom":"10px"}} container alignItems="center" justifyContent="flex-start">
            <BarChartIcon className={classes.icon}></BarChartIcon>
            <h4 className={classes.text}>Nivel Intermedio</h4>
            </Grid>
            
        </Grid>
    </Grid>

        <Grid  container className={classes.gridquestions} justifyContent="center" alignItems="flex-start">
      
      <ClasesPasadas></ClasesPasadas>
  
      <Grid style={{"padding":"5px"}} item md={4} sm={12} xs={12}>
          
          <Grid style={{"marginBottom":"10px"}} direction="column" container alignItems="center" justifyContent="center">
          <h3 className={classes.text}>Instructor</h3>
          <img className={classes.instructor} alt="instructor" src={require("assets/img/contacto.png")}></img>
          <h4 className={classes.text}>Adrian Lopez</h4>
          <h4 className={classes.text}>Director Creativo</h4>
          <Hidden mdUp>
          <h4 alignItems="center" justifyContent="center" className={classes.text}>Numero de Telefono:</h4>
          <h4 alignItems="center" justifyContent="center" className={classes.text}>+5355188776</h4>
          <h4 className={classes.text}>Redes: <IconButton className={classes.text}><WhatsAppIcon></WhatsAppIcon></IconButton>
          <IconButton className={classes.text}><TelegramIcon></TelegramIcon></IconButton>
          </h4>
          <h4 className={classes.text}>
          <IconButton className={classes.text}><FacebookIcon></FacebookIcon></IconButton>
          <IconButton className={classes.text}><InstagramIcon></InstagramIcon></IconButton>
          <IconButton className={classes.text}><TwitterIcon></TwitterIcon></IconButton></h4>     
          </Hidden>
          <Hidden smDown>
          <h4 alignItems="center" justifyContent="center" className={classes.text}>Numero: +5355188776</h4>
          <h4 className={classes.text}>Redes: <IconButton className={classes.text}><WhatsAppIcon style={{color:"black"}}></WhatsAppIcon></IconButton>
  <IconButton className={classes.text}><TelegramIcon style={{color:"black"}}></TelegramIcon></IconButton>
  <IconButton className={classes.text}><FacebookIcon style={{color:"black"}}></FacebookIcon></IconButton>
  <IconButton className={classes.text}><InstagramIcon style={{color:"black"}}></InstagramIcon></IconButton>
  <IconButton className={classes.text}><TwitterIcon style={{color:"black"}}></TwitterIcon></IconButton></h4>
          </Hidden>
          </Grid>
         
          
      </Grid>
  </Grid> </div>: null}
           
             <Grid container justifyContent="center">
      <h1 style={{margin:"0px"}} >FAQ</h1>
      </Grid>
      <Grid className={classes.gridquestions} container direction="row" justifyContent="center">
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Como suscribirse?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Como contactarnos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion >
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Que es el Treiding?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion >
        </Grid>
        <Grid 
        item 
        md={6}
        xs={12}>
        <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quienes somos?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
      </Grid>
         </Grid>
                
        </div>
        
    )
}

export default CursoBody
