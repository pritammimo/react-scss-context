import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import DestinationContext from "../context/DestinationContext";
import { DETAILS,CITY } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/Destinationinfo";
import { Helmet } from 'react-helmet-async';
const Details=()=>{
    const {id}=useParams();
    const {destinationsData,dispatch}=useContext(DestinationContext)
    console.log("destinationsData",destinationsData.filteredCities)
    const {details}=destinationsData
    useEffect(() => {
      dispatch({type:DETAILS,payload:id})
      dispatch({type:CITY,payload:id})
    }, [id])
    return (
       <>
       <Helmet>
           <title>
           {details.name}
           </title>
       </Helmet>
           <Header heading={details.name} image={details.bigImage}></Header>
           <DestinationInfo details={details}/>
       </>
    )
}
export default Details;