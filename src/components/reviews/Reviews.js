import React,{useContext,useState} from 'react'
import SharedContext from "../../context/SharedContext";
import ReviewBody from './ReviewBody';
const Reviews = () => {
    const [heading]=useState('what our customers are saying?')
    const {sharedData:{reviews}}=useContext(SharedContext);
    console.log("reviews",reviews)
    return (
		<div className='reviews'>
			<div className='container'>
				<h2 className='heading headingAnimation'>{heading}</h2>
				<div className='row ml-minus-15 mr-minus-15'>
					{reviews.length > 0
						? reviews.map((review, index) => (
								<ReviewBody key={index} review={review} />
						  ))
						: ''}
				</div>
			</div>
		</div>
	);
}

export default Reviews
