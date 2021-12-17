import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import DestinationContext from "../context/DestinationContext";
import { DETAILS,CITIES } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/Destinationinfo";
import { Helmet } from 'react-helmet-async';
import Cities from "../components/cities/Cities";
import Footer from "../components/footer/Footer"
const Details=()=>{
    const {id}=useParams();
    const {destinationsData,dispatch}=useContext(DestinationContext)
    console.log("destinationsData",destinationsData.filteredCities)
    const {details,filteredCities}=destinationsData
    useEffect(() => {
      dispatch({type:DETAILS,payload:id})
      dispatch({type:CITIES,payload:id})
      window.scrollTo(0,0);
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
           <Cities cities={filteredCities} name={details.name}/>
           <Footer/>
       </>
    )
}
export default Details;