import React from 'react';
import{
    makeStyles
   ,Drawer
   ,Divider
}from '@material-ui/core'
import MenuItem from './MenuItem';
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { whiteColor, defaultFont, grayColor, hexToRgb } from 'assets/jss/material-dashboard-react';
import classNames from "classnames";



const useStyles = makeStyles(theme =>({
    drawer: {
        width: 240,
        flexShrink: 0,
       
    },
    drawerPaper: {
        backgroundColor: '#030523',
        width: 240,
    
    },
    offset: theme.mixins.toolbar,
    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "4",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "0",
    
          height: "1px",
          right: "15px",
          width: "calc(100% - 30px)",
          backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
        },
      },
      logoLink: {
        ...defaultFont,
        textTransform: "none",
        padding: "10px 0",
        display: "block",
        fontSize: "24px",
        textAlign: "left",
        fontWeight: "400",
        lineHeight: "30px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
          color: whiteColor,
        },
      },
      logoLinkRTL: {
        textAlign: "right",
      },
      logoImage: {
        width: "30px",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px",
      },
      img: {
        height: "35px",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0",
      }, 
}))
const Menu = (props) =>{
       const classes = useStyles();
    
    return( 
        <Drawer className={classes.drawer} variant={props.variant} open={props.open}
        onClose= {props.onClose ? props.onClose: null}
        classes={{paper: classes.drawerPaper}} anchor='right'>
            <div className={classes.logo}>
      <Link
        onClick={() => {document.body.style.overflow = "scroll";}}
        to="/inicio"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        style={{color: "white"}}
      >
        <div className={classes.logoImage}>
          <img src={require("assets/img/logonavbar.png")} alt="logo" className={classes.img} />
        </div>
      </Link>
    </div>
         <Divider/>
         <MenuItem/>   
        </Drawer>
    )
}
Menu.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    variant: PropTypes.string,
}
export default Menu;


