import React from 'react'

const Pickup = () => {
  return (
    <div className='max-w-[1300px] m-auto w-full py-10'>
        <div className='flex justify-center items-center font-body text-3xl font-extrabold'>Schedule Pickup</div>
        <div className='flex justify-center items-center font-body text-lg font-semibold text-gray-800 '>FOR OLD EQUIPMENTS</div>
        <form class="bg-lime-200 p-4 rounded-md max-w-full">
            <div className='flex flex-col md:flex-row justify-between'>

                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="date">
                    Date
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="time">
                    Time
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time" type="time" />
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="description">
                    Description
                </label>
                <textarea class="shadow appearance-none border rounded w-full h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description"></textarea>
            </div>
        
            <div class="flex items-center justify-center">
                <button class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
                </button>
            </div>
        </form>

        {/* <div className='flex justify-between pt-6 '>
            <input className='h-10 w-40 rounded-lg' placeholder='Full Name'></input>
            <input placeholder='email'/>
            <input placeholder='date'/>
            <input placeholder='time'/>
        </div> */}
    </div>
  )
}

export default Pickup