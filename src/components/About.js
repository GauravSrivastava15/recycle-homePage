import React from 'react'


const About = () => {
  return (
    <div className='max-w-[1380px] mx-auto'>
            <div className='flex justify-center font-body font-extrabold text-2xl pt-4'>
                ZERO E-WASTE
            </div>
            <div className='flex flex-col mx-auto max-w-[490px] text-center font-body font-semibold text-gray-800 '>
                
                <p className='text-lg'>There should be millions of people striving for zero waste, rather than a selected few who achieve it perfectly.</p>
            </div>

            <div className='flex flex-col md:flex-row md:w-full justify-around pt-8 p-4'>
               <div className='max-w-[500px] text-justify pr-4'>
                    <div className='font-body text-4xl font-extrabold pb-4'>Who we are</div>
                    
                        <spna className='font-body text-xl font-bold text-green-600'>Remine India </spna>
                        <span className=''>our mission is to create a sustainable future by responsibly recycling electronic waste and Li batteries.
                            We offer comprehensive services, including collection, sorting, processing, and recycling of e-waste and Li batteries. 
                            Our state-of-the-art facilities use cutting-edge technologies to minimize the environmental impact of our operations. 
                            Since our founding, we have diverted over hundred tons of e-waste and Li batteries from landfills and reduced 
                            CO2 emissions. We are committed to sustainability, transparency, and social responsibility in
                            everything we do, and we are proud to have received numerous awards and accolades for our efforts. Our team 
                            of experienced professionals is dedicated to making a positive impact on the environment and building a more
                            sustainable future for generations to come. Get involved today by visiting our website or following us on 
                            social media.
                        </span>

                </div>

               <div className='max-w-[350px] pt-4 '>
                    <div className=''>
                        <img className='rounded-lg' src='/ewaste.png' alt='img'/>
                    </div>
                    
               </div>
            </div>

        </div>
  )
}

export default About