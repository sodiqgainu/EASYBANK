import React from 'react'
import './Section3.css'
import money from '../section3/image-currency.jpg'
import confetti from '../section3/image-confetti.jpg'
import plane from  '../section3/image-plane.jpg'
import restaurant from '../section3/image-restaurant.jpg'
const Section3 = () => {
  return (
    <div className='bg-gray-100'>
    <div className='max-w-[1300px] mx-auto py-[4rem] px-5 '>
      {/* first */}
      <div>
     <h1 className='color text-4xl font-medium'>Latest Articles</h1>
      </div>

      {/* second */}
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[2rem] p-0 mt-[4rem]'>
        {/* 1 */}
        <div className='bg-white rounded-md' >
           <div className='rounded-md'>
            <img src={money} className="rounded-md" alt="" />
            </div>
           <div className='py-2 px-5'>
           <h3 className='color'>By Claire Robinson</h3>
           <h2 className='color text-2xl font-medium mt-2'> Receive money in any currency with no fees</h2>
           <p className='color mt-2'>The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
        </div>
        </div>
{/* 2 */}
        <div className='bg-white' >
           <div>
            <img src={money} alt="" />
            </div>
           <div>
           <h3 className='color'>By Claire Robinson</h3>
           <h2 className='color text-2xl font-bold'> Receive money in any currency with no fees</h2>
           <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
        </div>
        </div>
{/* 3 */}

<div className='bg-white' >
           <div>
            <img src={money} alt="" />
            </div>
           <div>
           <h3 className='color'>By Claire Robinson</h3>
           <h2 className='color text-2xl font-bold'> Receive money in any currency with no fees</h2>
           <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
        </div>
        </div>

        {/* 4 */}

        <div className='bg-white' >
           <div>
            <img src={money} alt="" />
            </div>
           <div>
           <h3 className='color'>By Claire Robinson</h3>
           <h2 className='color text-2xl font-bold'> Receive money in any currency with no fees</h2>
           <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
        </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Section3