import React from 'react'
import './Section2.css'
import online from '../section2/icon-online.svg'
import api from '../section2/icon-api.svg'
import budgeting from '../section2/icon-budgeting.svg'
import onboard from '../section2/icon-onboarding.svg'
const Section2 = () => {
  return (
    <div className='bg-gray-200 py-[6rem]'>
      <div className='max-w-[1300px] mx-auto px-4'>
        {/* first */}
         <div className='py-5'>
          <h1 className='text-4xl color'>Why choose Easybank?</h1>
          <div className=' md:w-[40%] w-[100%]'>
          <p className='mt-4 color py-2'>We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
          </div>
         </div>

         {/* second */}

         <div className='grid gap-[2rem] md:grid-cols-2 lg:grid-cols-4 grid-cols-1 py-5 mt-10' >
            <div className='py-2 px-3'>
              <img src={online} alt="" className='mb-4' />
              <h2 className='text-2xl color mb-7'>Online Banking</h2>
              <p className='color'>  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
            </div>

            <div className='py-2 px-3'>
              <img  src={budgeting} className='mb-4' alt="" />
              <h2 className='text-2xl color mb-7'>Simple Budgeting</h2>
              <p className='color'>
              See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.
              </p>
            </div>
            <div className='py-2 px-3'>
              <img src={onboard} alt="" className='mb-4'/>
              <h2 className='text-2xl color mb-7'>Fast Onboarding</h2>
              <p className='color'> We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.</p>
            </div>
            <div className='py-2 px-3'>
              <img src={api} alt="" className='mb-4' />
                <h2 className='text-2xl color mb-7'>Open API</h2>
                <p className='color'>  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Section2