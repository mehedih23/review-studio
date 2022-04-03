import './Review.css';
import React from 'react'

const Review = (props) => {
    const { singleReview } = props
    const { name, review, } = singleReview;
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-cols-2 lg:flex-cols-3 justify-center items-center my-4 p-2'>
                <h1 className='text-center'>{name}</h1>
                <p>{review.length > 250 ? review.slice(0, 250) : review}</p>
            </div>
        </div>
    )
}

export default Review