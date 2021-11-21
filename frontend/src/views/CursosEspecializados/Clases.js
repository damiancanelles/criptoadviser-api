import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { useParams } from 'react-router-dom';
import ClasesItable from "components/Table/clasesItable";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router';
import { primaryColor } from "assets/jss/material-dashboard-react";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Clases() {
  const classes = useStyles();
  const {id} = useParams();
  const history = useHistory();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Button style={{color:"black"}} onClick={()=>{history.push("/admin/cursosE/")}}>Atras</Button>
      <ClasesItable cardstyle={classes} id={id}></ClasesItable>
        
      </GridItem>
      
    </GridContainer>
  );
}
