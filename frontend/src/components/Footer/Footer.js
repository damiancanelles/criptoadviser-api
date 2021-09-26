/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import { Link } from "react-router-dom";
import { infoColor } from "assets/jss/material-dashboard-react";

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link onClick={() => {document.body.style.overflow = "auto";}} to="/inicio" style={{color:"black"}} className={classes.block}>
                Inicio
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link onClick={() => {document.body.style.overflow = "auto";}} to="/curso" style={{color:"black"}} className={classes.block}>
                Curso
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link onClick={() => {document.body.style.overflow = "auto";}} to="/tienda" style={{color:"black"}} className={classes.block}>
                Tienda
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link onClick={() => {document.body.style.overflow = "auto";}} to="/freelancers" style={{color:"black"}} className={classes.block}>
                Freelancers
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link onClick={() => {document.body.style.overflow = "auto";}} to="/nosotros" style={{color:"black"}} className={classes.block}>
                Nosotros
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <Link
              to="/inicio"
              style={{color: infoColor[0], paddingRight: 20}}
              className={classes.a}
            >
              CriptoADVISER
            </Link>
           
          </span>
        </p>
      </div>
    </footer>
  );
}
