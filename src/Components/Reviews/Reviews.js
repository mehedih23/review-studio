import './Reviews.css';
import React from 'react'
import useReviews from '../../Hooks/useReview/useReview';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-3xl lg:text-5xl my-8 text-center'>What out customer says</h1>
            {reviews.map(rev => <AllReviews
                key={rev.id}
                AllReviews={rev}
            ></AllReviews>)}
        </div>
    )
}

export default Reviews