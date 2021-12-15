import React from 'react'
import {LazyLoadImage  } from 'react-lazy-load-image-component';
const GalleryImage = ({glr}) => {
    return (
        <div className='col-3'>
        <div className='gallery__image'>
         <LazyLoadImage src={glr.image} alt=""/>
        </div>
    </div>
    )
}

export default GalleryImage
