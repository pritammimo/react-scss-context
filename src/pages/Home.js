import React,{useState,useContext} from 'react'
import Header from '../components/Header';
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
export const Home = () => {
    const { state:ss, dispatch } = useContext(ModelContext);
    const [state] = useState({
      heading: "we are travel friends",
      paragraph: "Come and Join us we travel the most beauutiful places in the world",
    });
    return (
      <div>
        <Header heading={state.heading} paragraph={state.paragraph}>
          <button className='btn-default'>Get Started</button>
        </Header>
        <Model/>
      </div>
    );
}
