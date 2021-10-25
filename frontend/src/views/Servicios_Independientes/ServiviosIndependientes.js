import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import { Button, makeStyles } from '@material-ui/core';
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
    const [data, setdata] = React.useState([])

    const ert = async () => {
        const result = await axios.get(`https://criptoadviser.com/api/servicios/${id}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
        setdata(result.data)
        console.log(result.data.contactinfo.numero)  
      };
    
    React.useEffect( () => {
      ert()
      window.scrollTo(0,0)
    },[])
    return (
        
          
          <>
          <Button onClick={()=> {console.log(data.contactinfo.numero)}}>{data.titulo}</Button>
         </>
        
    )
}

export default ServiciosIndependientes;
