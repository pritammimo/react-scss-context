import { useState,useReducer } from "react";
import ModelContext from "../ModelContext";
const ModelProvider=(props)=>{

const [state,dispatch]=useReducer((state,action)=>
{
    if (action.type === "OPEN_MODEL") {
        return {
          modelStatus: true,
        };
    }
    else if (action.type === "CLOSE_MODEL") {
        return {
          modelStatus: false,
        };
    }
    else {
      return state;
    }
    },{modelStatus:false})
 console.log("check",state)
 return (
     <ModelContext.Provider 
     value={{ state, dispatch }}>
       {props.children}
     </ModelContext.Provider>
 )
}
export default ModelProvider
