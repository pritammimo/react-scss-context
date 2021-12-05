import React from 'react'

const DestionationDetails = ({title,text}) => {
    return (
        <div className="destinationInfo__details">
                     <div className="destinationInfo__details__head">
                      {title}
                     </div>
                     <div className="destinationInfo__details__text">
                       {text}
                     </div>
                 </div>
    )
}

export default DestionationDetails
