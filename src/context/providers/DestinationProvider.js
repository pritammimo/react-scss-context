import { useReducer } from "react";
import DestinationContext  from "../DestinationContext";
import DestinationsReducer from "../reducers/DestinationReducer";
import { destinations } from "../../data/destinations";
const DestinationProvider=(props)=>{
    const [destinationsData,dispatch]=useReducer(DestinationsReducer,{
        destinations
    });
    return (
        <DestinationContext.Provider value={{destinationsData,dispatch}}>
          {props.children}
        </DestinationContext.Provider>
    )
}
export default DestinationProvider;