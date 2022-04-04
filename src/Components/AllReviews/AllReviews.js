import './AllReviews.css'
import React from 'react'

const AllReviews = (props) => {
    const { AllReviews } = props;
    const { picture, name, review, ratings } = AllReviews;

    return (
        <div className='m-4 p-4'>
            <div>
                <div>
                    <img className='userPicture' src={picture} alt={name} />
                    <h1 className='text-2xl my-2'>{name}</h1>
                </div>
                <p>{review}</p>
                <p className='ratings'>Ratings : {ratings}</p>
            </div>
        </div>
    )
}

export default AllReviews