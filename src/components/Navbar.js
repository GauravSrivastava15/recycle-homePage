import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className=' rounded-l h-20 font-body shadow-xl px-2 max-w-[1380px]  mx-auto flex justify-between items-center'>
        <div>
            <h1 className='text-2xl font-extrabold'>Remine India</h1>
        </div>
        
        <ul className='hidden md:flex md:justify-evenly md:text-lg md:font-bold'>
            <li className='px-3 cursor-pointer'>
                <Link to='slider' smooth duration={500}>Home</Link>
                
            </li>
            <li className='px-3 cursor-pointer'>About </li>
            <li className='px-3 cursor-pointer'>
                <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
            </li>
            <div className='px-11'>
                <Link to='contact'>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold  px-4 rounded-xl shadow-md">Contact us</button>
                
                </Link>
            </div>
            <div className='px-11'>
                <Link to=''>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold  px-4 rounded-xl shadow-md">Sign In</button>
                
                </Link>
            </div>
        </ul>
        
        <div 
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-black md:hidden">
                {
                    <FaBars size={30} />
                }
        </div>

    

        
        
    </div>
  )
}

export default Navbar