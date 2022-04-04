import './Review.css';
import React from 'react'

const Review = (props) => {
    const { singleReview } = props
    const { name, review, picture, ratings } = singleReview;
    return (
        <div >
            <div className='m-4 p-4'>
                <div className=''>
                    <div className='flex flex-col'>
                        <img className='userPicture' src={picture} alt={name} />
                        <h1 className='text-3xl my-2'>{name}</h1>
                    </div>
                    <p>{review.length > 250 ? review.slice(0, 250) : review}...</p>
                    <p className='ratings'>Ratings : {ratings}</p>
                </div>
            </div>
        </div>
    )
}

export default Review