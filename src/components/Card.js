import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between p-4'>
        <div class="max-w-[350px]  rounded overflow-hidden shadow-lg shadow-black">
            <img class="w-auto pl-14 h-56" src="https://cdn.pixabay.com/photo/2014/04/02/10/56/recycling-304974__340.png" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 hover:text-green-600 cursor-pointer">Electronic Waste  Collection & Recycling </div>
                <p class="text-gray-700 text-base">
                Electronic recycling involves collecting, sorting, and recycling electronic products in order to reuse any salvageable materials in the electronics.
                </p>
            </div>
        </div>
        <div class="max-w-[350px] rounded overflow-hidden shadow-lg shadow-black my-8 md:my-0">
            <img class="w-full" src="https://media.istockphoto.com/id/667809936/photo/electronic-waste.jpg?b=1&s=170667a&w=0&k=20&c=gzaL0U0wVD3Uh6H5SHRHjJX3MMm5IJjwPeP3uwUmQAA=" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 hover:text-green-600 cursor-pointer">Hard Drive, Flash Drive & SSD Destruction</div>
                <p class="text-gray-700 text-base line-clamp-5">
                Concerns regarding the security of confidential information on devices are a top concern when it comes to e-waste management. In order to protect your data from being compromised, we provide 2X data destruction services at your doorstep, including Data Degaussing, Hard Disk Shredding, and Software Data Destruction.
                </p>
            </div>
        </div>
        <div class="max-w-[350px] rounded overflow-hidden shadow-lg shadow-black">
            <img class="w-full" src="https://media.istockphoto.com/id/451100663/photo/old-and-used-electric-home-waste.jpg?b=1&s=170667a&w=0&k=20&c=TlsrWMaA8aXx4H0QUpyix4U0Yk4AnEfZXpPA8vJoYwE=" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 hover:text-green-600 cursor-pointer">Electronics & Computer Resale</div>
                <p class="text-gray-700 text-base">
                We provide unique destination for buying used computers or electronic items at the most affordable price.Buyers are welcome to leave their best offer on available electronic products and we will make the deal happen. 
                </p>
            </div>
        </div>

    </div>
  )
}

export default Card