import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import { makeStyles } from '@material-ui/core';
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { Grid, Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Helmet } from 'react-helmet';
import ButtonV from '../Freelancers/ButtonView';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  
    carousel: {
      
      backgroundPosition: 'center',
      backgroundSize:'cover',
      height:'280px',
      padding: 40,
      marginBottom: 0,
      [theme.breakpoints.down('xs')]: {
        marginBottom: 10,
      },
    },
    text: {
      margin: 0,
      color: whiteColor,
    },
    text1: {
        margin: 0,
      },
    grid: {
        padding: 40,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 0,
            paddingBottom: 0,
          },
    },
    grid2: {
      padding: 40,
      paddingTop: 0,
      [theme.breakpoints.down('sm')]: {
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 0,
          paddingBottom: 10,
        },
  },
    footer:{
        position: 'fixed',
        bottom: 0,
    },
    
  }))

const ServiciosIndependientes = (props)=> {
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();
    const [freelancers, setfreelancers] = React.useState({
      "gallery": [],
      "titulo": "",
      "descripcion": "",
      "image": "",
      "contactinfo": {
          "numero": "",
          "whatsapp": "",
          "telegram": "",
          "facebook": "",
          "instagram": "",
          "twitter": "",
          "ubicacion": ""
      },
  })
    const contactinfo = JSON.stringify(freelancers.contactinfo)

    const ert = async () => {
        const result = await axios.get(`https://criptoadviser.com/api/servicios/${id}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
        setfreelancers(result.data)
        console.log(result.data.contactinfo.numero)  
      };
    
    React.useEffect( () => {
      ert()
      window.scrollTo(0,0)
    },[])
    return (
        
          
           <>
            <Helmet>
                  <title>{freelancers.titulo}</title>
                  <meta name="description" content={freelancers.descripcion} />
              </Helmet>
            <LandingNavBar/>
           <Grid style={{backgroundImage: `url(${freelancers.image})`,}} container alignItems="center" className={classes.carousel}>
           <Grid item md={12} sm={12} xs={12}>
           <Hidden smDown>
           <h1 className={classes.text}>{freelancers.titulo}</h1>
           </Hidden>
           <Hidden mdUp>
           <h3 className={classes.text}>{freelancers.titulo}</h3>
           </Hidden>
           </Grid>
           </Grid>
           <Hidden smDown>
           <Grid style={{minHeight:220}} container justifyContent="center">
               <Grid className={classes.grid} item md={8} sm={12} xs={12}>
                   <h3 className={classes.text1}>Nombre: {freelancers.titulo}</h3>
                   <h3 className={classes.text1}>Descripcion: {freelancers.descripcion}</h3>
               </Grid> 
               <Grid className={classes.grid} item md={4} sm={12} xs={12}>
                           <h3 style={{display: freelancers.contactinfo.numero === "" ? "none" : null,margin: 0}}>Número de telefono:</h3>
                           <h3 style={{display: freelancers.contactinfo.numero === "" ? "none" : null,margin: 0}}> +53 {freelancers.contactinfo.numero}</h3>  
                           <h3 style={{margin:0}}> Redes:
                           <IconButton href={freelancers.contactinfo.telegram} style={{display: freelancers.contactinfo.telegram === "" ? "none" : null}}> <TelegramIcon style={{color:"black"}}></TelegramIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.whatsapp} style={{display: freelancers.contactinfo.whatsapp === "" ? "none" : null}}> <WhatsAppIcon style={{color:"black"}}></WhatsAppIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.facebook} style={{display: freelancers.contactinfo.facebook === "" ? "none" : null}}> <FacebookIcon style={{color:"black"}}></FacebookIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.instagram} style={{display: freelancers.contactinfo.instagram === "" ? "none" : null}}> <InstagramIcon style={{color:"black"}}></InstagramIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.twitter} style={{display: freelancers.contactinfo.twitter === "" ? "none" : null}}> <TwitterIcon style={{color:"black"}}></TwitterIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.ubicacion} style={{display: freelancers.contactinfo.ubicacion === "" ? "none" : null}}> <LocationOnIcon style={{color:"black"}}></LocationOnIcon> </IconButton>
                           </h3> 
                   
               </Grid> 
           </Grid>
           </Hidden>
           <Hidden mdUp>
           <Grid container justifyContent="center">
               <Grid className={classes.grid} item md={8} sm={12} xs={12}>
                   <h4 className={classes.text1}>Nombre: {freelancers.titulo}</h4>
                   <h4 className={classes.text1}>Descripcion: {freelancers.descripcion}</h4>
               </Grid> 
               <Grid className={classes.grid} item md={4} sm={12} xs={12}>
                           <h4 style={{display: freelancers.contactinfo.numero === "" ? "none" : null,margin: 0}}>Número de telefono:</h4>
                           <h4 style={{display: freelancers.contactinfo.numero === "" ? "none" : null,margin: 0}}> +53 {freelancers.contactinfo.numero}</h4>  
                           <h4 style={{margin:0}}> Redes:
                           <IconButton href={freelancers.contactinfo.telegram} style={{display: freelancers.contactinfo.telegram === "" ? "none" : null}}> <TelegramIcon style={{color:"black"}}></TelegramIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.whatsapp} style={{display: freelancers.contactinfo.whatsapp === "" ? "none" : null}}> <WhatsAppIcon style={{color:"black"}}></WhatsAppIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.facebook} style={{display: freelancers.contactinfo.facebook === "" ? "none" : null}}> <FacebookIcon style={{color:"black"}}></FacebookIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.instagram} style={{display: freelancers.contactinfo.instagram === "" ? "none" : null}}> <InstagramIcon style={{color:"black"}}></InstagramIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.twitter} style={{display: freelancers.contactinfo.twitter === "" ? "none" : null}}> <TwitterIcon style={{color:"black"}}></TwitterIcon> </IconButton>
                           <IconButton href={freelancers.contactinfo.ubicacion} style={{display: freelancers.contactinfo.ubicacion === "" ? "none" : null}}> <LocationOnIcon style={{color:"black"}}></LocationOnIcon> </IconButton>
                           </h4> 
                   
               </Grid> 
           </Grid>
           </Hidden>
          <Grid className={classes.grid2}>
          </Grid>
           <LandingFooter className={classes.footer}></LandingFooter>
           </>
        
    )
}

export default ServiciosIndependientes;
