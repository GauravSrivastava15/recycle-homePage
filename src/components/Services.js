import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div name='services'  className='max-w-[1300px] m-auto w-full py-10'>
        <div className='flex justify-center items-center font-body text-3xl font-extrabold'>Our Services</div>
        <div className='flex justify-center items-center font-body text-lg font-semibold text-gray-800 pb-8'>WHAT WE DO</div>
        <Card />
    </div>
  )
}

export default Services