import DestionationDetails from "./DestionationDetails"

const DestinationInfo = ({details}) => {
    return (
        <div className="destinationInfo">
            <div className="container">
             <h2 className="heading headingAnimation">
               Overview
             </h2>
             <div className="row">
               <div className="col-8">
                 <p className="destinationInfo__p animation">
                      {details.details}
                 </p>
               </div>
             </div>
             <h2 className="heading headingAnimation">
                Good to Know
             </h2>
             <div className="row">
               <div className="col-8">
                <DestionationDetails title="Language" text={details.language}/>
               </div>
               <DestionationDetails title="Currency" text={details.currency}/>
             </div>
            </div>
        </div>
    )
}

export default DestinationInfo
