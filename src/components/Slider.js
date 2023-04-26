import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {
    const slides = [
        {
            url:'https://media.istockphoto.com/id/1298365619/photo/recycling-symbol-digital-3d-illustration.jpg?s=612x612&w=0&k=20&c=pLedszB6EIgu649MEbx2hqE7hsN8J5a9Vfg3jwrszbU='
        },
        {
            url:'https://media.istockphoto.com/id/1372577388/photo/old-electronic-devices-on-a-dark-background-the-concept-of-recycling-and-disposal-of.jpg?s=612x612&w=0&k=20&c=RGm3eCA76Y_IJJYGCLWS9acSR39Gb7iqsC_DIhJyG2g='
        },
        {
            url:'https://media.istockphoto.com/id/1263548947/photo/sustainable-lifestyle-and-environmental.jpg?s=612x612&w=0&k=20&c=xku4h9bXroqNsgE2tj79aVsm9jp2WAFn-YvQ4bwoGhw='
        },
        {
            url:'https://media.istockphoto.com/id/679832496/photo/battery.jpg?b=1&s=170667a&w=0&k=20&c=_5vu14AdpJFDfOsL2YiRK794g6W8sQBXFnwZuA6XOso='
        }
    ]


    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div name='slider' id='slider' className=' max-w-[1300px] h-[740px] w-full m-auto py-16 px-4  relative group'>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
             <BsChevronCompactLeft onClick={prevSlide} size={30}/> 
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div> 
        
        { <div className='flex top-4 justify-center py-2'>
            {
                slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                    onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'> <RxDotFilled /> </div>
                ))
            }
            </div> 
        }
        
    </div>

  )
}

export default Slider