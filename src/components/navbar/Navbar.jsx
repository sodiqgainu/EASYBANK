import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import {FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

const [toggle, setToggle] = useState(false)

const toggleMenu = () => {
  setToggle(!toggle)
}

  return (
    <div className='flex md:justify-around justify-between py-5 shadow-md items-center md:px-auto  px-10 fixed w-full z-[40] bg-white/35 backdrop-blur-md'>
      <div>
        <img src={logo} alt="" />
      </div>

      <div className='links color font-thin'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>

      <div className={`hidden-links shadow-md color ${toggle ? 'show' : 'hide'} `}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>

<div onClick={toggleMenu} className='menu cursor-pointer'>
  {
    toggle ? <FaTimes/> : <FaBars/>
  }
</div>

<div className='button'>
  <button>Request Invite</button>
</div>

    </div>
  )
}

export default Navbar