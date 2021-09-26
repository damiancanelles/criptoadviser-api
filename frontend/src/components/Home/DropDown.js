import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

export default function DropDownServicios () {
    const history = useHistory();
    const classes = useStyles();
    const [openNotification, setOpenNotification] = React.useState(null);
    
    const handleClickNotification = (event) => {
        if (openNotification && openNotification.contains(event.target)) {
          setOpenNotification(null);
        } else {
          setOpenNotification(event.currentTarget);
        }
      };
      
    const handleCloseNotification = () => {
        setOpenNotification(null);
        };
    
    return (
        <div className={classes.manager}>
            <Button
              style={{marginRight: '15px',
                textTransform: 'none',}}  
              color="inherit" 
              variant='text'
              onClick={handleClickNotification}
            >
              Servicios Independientes
              <ArrowDropDownIcon></ArrowDropDownIcon>
              
              <Hidden mdUp implementation="css">
                <p onClick={handleCloseNotification} className={classes.linkText}>
                  Servicios Independientes
                </p>
              </Hidden>
            </Button>
            <Poppers
              open={Boolean(openNotification)}
              anchorEl={openNotification}
              transition
              disablePortal
              className={
                classNames({ [classes.popperClose]: !openNotification }) +
                " " +
                classes.popperNav
              }
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="notification-menu-list-grow"
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseNotification}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={()=>{history.push("/curso");}}
                          className={classes.dropdownItem}
                        >
                          Curso de Traiding
                        </MenuItem>
                        <MenuItem
                          onClick={()=>{history.push("/lending");}}
                          className={classes.dropdownItem}
                        >
                          Servicio de Lending
                        </MenuItem>
                        <MenuItem
                          onClick={()=>{history.push("/señales");}}
                          className={classes.dropdownItem}
                        >
                          Señales
                        </MenuItem>
                        
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Poppers>
          </div>
    )

}

 