import React, { useRef, useState } from 'react'
import phones from '../../assets/images/image-mockups.png'
import './Section1.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Section1 = () => {

  const lead = useRef()
  const words = useRef()
  const pop = useRef()

  useGSAP(() => {
    gsap.from(lead.current, {
      x:-300,
      opacity:0,
      duration:2,
      scale:0.5,
      skew:30,
      delay:0.5,
  
    })

    
  })

  const[invitation, setInvitation] = useState(false)

  const invite = () => {
   setInvitation(!invitation)
  
 
  }

  return (
    <>
     <div ref={pop} className={`w-full max-w-[1400px] mx-auto border ${invitation ? 'flex' : 'hidden'} justify-center z-[100px]`}>
      <div className=' rounded-md   fixed z-[50] top-[50px]   bg-white shadow-2xl py-[10px]  px-[15px] font-thin text-lg text-slate-600'>
        <div className='p-2 flex justify-end cursor-pointer'>
          <div className='bg-slate-200 py-1 px-1 rounded-full' onClick={invite}><FaTimes/></div>
        </div>
        <h2><span>Your invite has been sent successfully</span><span><FaCheck className='bg-green-900 text-white py-1 px-1 rounded-full text-xl' /></span></h2>
      </div>

      </div>
    <div className=' py-[8rem]  md:gap-[7rem] flex md:flex-row flex-col items-center '>
       <div className='first gap-[1rem] flex flex-col md:w-[50%] w-[100%]  items-center justify-center text-center md:text-left px-[4rem]'>
           <h1 ref={lead} className='color lg:text-7xl md:text-5xl w-full text-5xl mb-3'>Next generation digital banking</h1>
           <p ref={words} className='color font-thin text-xl'> Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>

  <div className=' flex items-center md:justify-start justify-center  w-full mt-[1rem] '>
    <button className='btn' onClick={invite}>Request Invite</button>
  </div>
       </div>
       <div className='md:w-[50%] w-[100%] m-0  ml-[-1rem] mr-[-1rem] '>
       <div className='second w-[100%]  '>
         <div className='img-container w-[100%] flex items-center'>
            <img src={phones} alt="" />
         </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default Section1