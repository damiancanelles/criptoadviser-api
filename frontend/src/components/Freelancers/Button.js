import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router";
import axios from 'axios';



import useFreelancer from 'context/usefreelancer';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0,
        transition: "all 0.4s linear",
      },
      '& $imageMarked': {
        opacity: 0,
        
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonE() {
  const [,setfreelancer] = useFreelancer();
  const classes = useStyles();
  const history = useHistory();
  const [data, setdata] = React.useState([])

 
  const sizes = ["35%","30%","35%","40%","40%","20%","35%","30%","35%"
  ]


  const asd = async () => {
    const result = await axios.get("https://criptoadviser.com/api/freelancers",{ headers: {'Accept': 'application/json','Content-Type': 'application/json' }});
    setdata(result.data)  
  };

  React.useEffect( () => {
    
    asd();
  },[])
  

  return (
    <div className={classes.root}>
      {data.map((image,index) => {
        return(
          <ButtonBase
          onStar
          onClick={()=>{
            setfreelancer(image);
            history.push("/freelancersview");
          }}
          focusRipple
          key={image.titulo}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: sizes[index < 6 ? index : index % 6]}}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.image})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.titulo}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        )
        
}
      )}
      
    </div>
  );
}
