import React,{useState,useContext} from 'react'
import Header from '../components/Header';
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from '../auth/Register';
import Login from "../auth/Login";
export const Home = () => {
    const {  dispatch } = useContext(ModelContext);
    const [state] = useState({
      heading: "we are travel friends",
      paragraph: "Come and Join us we travel the most beauutiful places in the world",
    });
    const [registerModel]=useState('registerModel');
    return (
      <div>
        <Header heading={state.heading} paragraph={state.paragraph}>
          <button
            className="btn-default"
            onClick={() =>
              dispatch({
                type: OPEN_MODEL,payload:registerModel
              })
            }
          >
            Get Started
          </button>
        </Header>
        <Model current={registerModel}>
          <Register />
        </Model>
        <Model>
          <Login />
        </Model>
      </div>
    );
}
