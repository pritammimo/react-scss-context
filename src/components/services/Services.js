import React,{useState} from 'react'
import ServicesLeft from './ServicesLeft'

const Services = () => {
    const [state]=useState({
        heading:'why customers love travel friends because we provide unique services.',
        subHeading:'Our aim is to provide professional and unique services to customers,and we have provided high quality services to our customers thats why they love travel friends'
    })
    return (
        <div className="services">
            <div className="services__contents">
              <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                  <div className="col-6 p-15">
                  <ServicesLeft heading={state?.heading} 
                  subHeading={state?.subHeading}/>
                  </div>
                  <div className="col-6 p-15">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                </div>
              </div>
            </div> 
        </div>
    )
}

export default Services
