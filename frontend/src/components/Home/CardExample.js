import React from 'react'
import PropTypes from 'prop-types'

function CardExample({title, imageSource, url, text}) {
  return (
    <div className='card text-center bg-dark' id='card'>
      <div className='overflow'>
      <img src={imageSource} alt='' className='card-img-top'/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
         <p className='card-text'>
           {
              text ? text: "lorem adsasdasdasdasdadaisdasdas"
           }
         </p>
         <a href={url} className="btn btn-outline-secondary rounded-0">Go</a>
      </div>
       
    </div> 
  )
}

export default CardExample



CardExample.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
}



