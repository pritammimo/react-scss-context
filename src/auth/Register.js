import React,{useContext,useState} from 'react'
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
const Register = (props) => {
  const {dispatch} =useContext(ModelContext)
  const [state, setstate] = useState({
    name:'',
    email:'',
    password:'',
  })
  const registerForm=(e)=>{
   e.preventDefault();
   console.log(state)
  }
    return (
      <form onSubmit={registerForm}>
        <div className="model__heading">
          <h1>Create new Account</h1>
        </div>
        <div className="group">
          <input
            type="text"
            name=""
            className="group__control"
            placeholder="Enter name"
            onChange={(e)=>setstate({...state,name:e.target.value})}
            value={state.name}
          />
        </div>
        <div className="group">
          <input
            type="email"
            name=""
            className="group__control"
            placeholder="Enter email"
            onChange={(e)=>setstate({...state,email:e.target.value})}
            value={state.email}
          />
        </div>
        <div className="group">
          <input
            type="password"
            name=""
            className="group__control"
            placeholder="Create Password"
            onChange={(e)=>setstate({...state,password:e.target.value})}
            value={state.password}
          />
        </div>
        <div className="group modal__row">
          <input
            type="submit"
            name=""
            className="btn-dark"
            placeholder="Register"
          />
          <span onClick={()=>dispatch({type:OPEN_MODEL,payload:props.currentModel})}>Already have an account?</span>
        </div>
      </form>
    );
}

export default Register
