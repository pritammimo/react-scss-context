
import React,{useContext} from 'react'
import ModelContext from "../context/ModelContext";
const Model = () => {
    const {state,dispatch}=useContext(ModelContext)
    console.log(state)
    return state.modelStatus ? (
      <div className="model">
        <div className="model__body">This is a dummy text</div>
      </div>
    ) : (
      ""
    );
    
}

export default Model
