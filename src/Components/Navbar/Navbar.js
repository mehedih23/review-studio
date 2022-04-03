import './Navbar.css';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=' bg-slate-500'>
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden p-4'>
                {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <ul className={`
                absolute bg-slate-500 w-full 
                flex flex-col justify-center items-center duration-500 ease-out 
                ${isOpen ? 'top-[50px]' : 'top-[-220px]'} 
                md:static md:flex-row md:h-[80px]
            `}>
                <li className='font-bold py-1.5 md:px-8'><CustomLink to='/'>HOME</CustomLink></li>
                <li className='font-bold py-1.5 md:px-8'><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
                <li className='font-bold py-1.5 md:px-8'><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>
                <li className='font-bold py-1.5 md:px-8'><CustomLink to='/blogs'>BLOGS</CustomLink></li>
                <li className='font-bold py-1.5 md:px-8'><CustomLink to='/about'>ABOUT</CustomLink></li>
            </ul>
        </nav >
    )
}

export default Navbar