import './Header.css';
import banner from '../../assets/images/banner-product.png'
import React from 'react'
import Reviews from '../CustomerReview/Reviews';

const Header = () => {
    return (
        <div className='h-[87vh]'>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center py-[80px] md:py-[180px] lg:py-[80px]'>
                <div className='p-2 md:p-4 md:w-1/2'>
                    <h1 className='text-3xl lg:text-5xl font-bold my-2'>Welcome to <span className='text-orange-900'>Review Studio</span></h1>
                    <h1 className='text-2xl md:text-4xl font-semibold my-2'>Help to <span className='text-orange-900'>find your best</span></h1>
                    <p className='leading-relaxed lg:leading-loose my-4 lg:text-lg'>A book can help you get your life back on course. Good book supports you to let go of your fear and discover your true potential. That's why we are helping people to find the best book. At <span className='text-orange-900 font-bold'>Review Studio</span> we are dedicated to reading and reviewing the very best fantasy books for both children and adults (both young and old). By this website you can see how good the book is.</p>
                    <button className='live-demo-btn'>
                        Live Demo
                    </button>
                </div>
                <div className='p-2 md:p-4 md:w-1/2 '>
                    <img className='h-full' src={banner} alt="banner" />
                </div>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    )
}

export default Header