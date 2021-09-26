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
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Notifications from "@material-ui/icons/Notifications";
import useAuth from "auth/useauth";
import axios from "axios";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalNotificaciones from "components/Modals/modalnotificaciones";



const useStyles = makeStyles(styles);

export default function Notificaciones () {
    const [user] = useAuth();
    const classes = useStyles();
    const [data, setdata] = React.useState([]);
    const [openNotification, setOpenNotification] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [notificacion, setnotificacion] = React.useState({});
    
    function deleteelement(id2) {
      axios.delete(`https://criptoadviser.com/api/notificaciones/${id2}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }})
      
      
  
  }
  
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    deleteelement(notificacion._id);
    setOpen(false);
  };
    
    const asd = async () => {
        const result = await axios.get(`https://criptoadviser.com/api/notificaciones/${user.userid}`,{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
        setdata(result.data)  
      };
    
      React.useEffect( () => {
        
        asd();
      },[])

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
              style={{padding:12,paddingLeft:6,
                textTransform: 'none',}}  
              color="inherit" 
              variant='text'
              onClick={handleClickNotification}
            >
              <Hidden mdUp><p style={{margin:0,marginRight:10}}>Notificaciones</p></Hidden>
               <Notifications className={classes.icons} />
          <span className={classes.notifications}>{data.length}</span>
              
              
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
                      <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                      <div className={classes.paper}>
                      <ModalNotificaciones notificaciones={notificacion} ></ModalNotificaciones>
                  
                        </div>
                      </Fade>
                    </Modal>
                    <ClickAwayListener onClickAway={handleCloseNotification}>
                      <MenuList role="menu">
                          {data.map((notificacion) => {
                              return(
                                
                                <MenuItem
                                onClick={() => {
                                  setnotificacion(notificacion);
                                  handleOpen();
                                }}
                                className={classes.dropdownItem}
                              >
                                {notificacion.preview}
                              </MenuItem>
                              )
                          })}
                        
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Poppers>
          </div>
    )

}

 