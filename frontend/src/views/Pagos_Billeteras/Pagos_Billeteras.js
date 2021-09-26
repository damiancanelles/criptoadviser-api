import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Wallettable from "components/Table/wallettable";
import Transaccionstable from "components/Table/transacciontable";
import TransaccionsMCtable from "components/Table/transaccionmctable";
import Tarjetastable from "components/Table/tarjetastable";
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

export default function Pagps() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <Wallettable cardstyle={classes}></Wallettable>
        
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
      <Tarjetastable cardstyle={classes}></Tarjetastable>
        
      </GridItem>
      
      <GridItem xs={12} sm={12} md={12}>
      <Transaccionstable cardstyle={classes}></Transaccionstable>
        
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
      <TransaccionsMCtable cardstyle={classes}></TransaccionsMCtable>
        
      </GridItem>
    </GridContainer>
  );
}
