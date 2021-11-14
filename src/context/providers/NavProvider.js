import { useState,useReducer } from "react";
import NavContext from "../NavContext";
import NavReducer from "../reducers/NavReducer";
const NavProvider=(props)=>{
const [state,dispatch]=useReducer(NavReducer
    ,false)
 console.log("check",state)
 return (
     <NavContext.Provider value={{state,dispatch}}>
       {props.children}
     </NavContext.Provider>
 )
}
export default NavProvider
