import React,{useState} from 'react'
import Header from '../components/Header';
export const Home = () => {
    const [state] = useState({
      heading: "we are travel friends",
      paragraph: "Come and Join us we travel the most beauutiful places in the world",
      
    });
    return (
      <div>
        <Header heading={state.heading} paragraph={state.paragraph}>
          <button className='btn-default'>Get Started</button>
        </Header>
      </div>
    );
}
