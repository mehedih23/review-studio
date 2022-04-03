import './Reviews.css';
import React from 'react'
import useReview from '../../Hooks/useReview/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReview()
    const review = reviews.slice(0, 3)
    console.log(review);

    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>Customer's Review({review.length})</h1>

            {
                review.map(rev => <Review
                    key={rev.id}
                    singleReview={rev}
                ></Review>)
            }
        </div>
    )
}

export default Reviews