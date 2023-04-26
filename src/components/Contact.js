import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'



const Contact = () => {
  return (
    <div name='contact' className='bg-gray-700'>
        <div className='max-w-[1300px] m-auto w-full py-8'>
            <div className='flex justify-center items-center font-body text-5xl font-extrabold text-white'>Remine India</div>
            <div className='flex flex-col justify-center items-center font-body text-lg font-bold text-white'>
                <div className='p-2 md:p-0'>Remine India is a recognized startup working on recycling e-Waste and Li Batteries</div>
                <div className='flex items-center pt-4'>
                    <MdLocationPin className='cursor-pointer'/>
                    <div className='pl-2'>Ashoka Road, Janpath, CP, New Delhi, IN</div>
                </div>
                <div className='flex items-center pt-3'>
                    <FiPhoneCall />
                    <div className='pl-2'>+91-123456789</div>
                </div>
                <div className='flex pt-3 cursor-pointer'>
                    <BsFacebook className='mx-2'/>
                    <BsInstagram className='mx-2' />
                    <BsTwitter className='mx-2'/>
                    <BsLinkedin className='mx-2'/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Contact