import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: { 
          height: '380px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          wordWrap: 'break-word',
          backgroundClip: 'border-box',
          borderRadius: '0.25rem',
          boxSizing: 'border-box',
        },
     
})
const CardServices= ()=> {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root} id='card-services'>

            </div>
        </div>
    )
}

export default CardServices
