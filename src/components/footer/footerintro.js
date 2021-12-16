import React,{useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footerintro = () => {
    const [state]=useState({
        logo:'/assets/footer/logo.png',
        intro:'Travel friends is a travelling agency,we arrange tours to the world famous and most beautiful countries,since 2005, we provide high quality services for our valuable customers'
    })
    return (
        <div className="footer__intro">
          <div className='footer__intro__img'>
           <LazyLoadImage src={state.logo} alt='footer logo'/>
          </div>
             <p className='footer__intro_msg'>
              {state.intro}
             </p>
        </div>
    )
}

export default Footerintro
