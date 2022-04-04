import './CustomerReviews.css';
import React from 'react'
import useReview from '../../Hooks/useReview/useReview';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const CustomerReviews = () => {
    const [reviews] = useReview()
    const review = reviews.slice(0, 3)
    console.log(review);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/reviews')
    }

    return (
        <div className='pb-8'>
            <h1 className='text-5xl text-center font-bold'>Customer's Review({review.length})</h1>

            {
                review.map(rev => <Review
                    key={rev.id}
                    singleReview={rev}
                ></Review>)
            }
            <div className='text-center'>
                <button onClick={handleClick} className='reveal-button text-2xl font-bold px-6 py-2 border'>Reveal Reviews</button>
            </div>
        </div>
    )
}

export default CustomerReviews