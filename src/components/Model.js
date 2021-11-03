
import React,{useContext} from 'react'
import ModelContext from "../context/ModelContext";
const Model = () => {
    const {state,dispatch}=useContext(ModelContext)
    const close=(e)=>{
      if(e.target.getAttribute('class') === "model"){
       dispatch({type:"CLOSE_MODEL"})
      }
    }
    console.log(state)
    return state.modelStatus ? (
      <div className="model" onClick={close}>
        <div className="model__body">This is a dummy text</div>
      </div>
    ) : (
      ""
    );
    
}

export default Model
