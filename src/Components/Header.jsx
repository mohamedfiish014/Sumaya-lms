import React, { useState } from 'react'
import HeaderLogo from "../images/HeaderLogo.svg"
import {Link} from "react-router-dom"

const Header = () => {


  return (
    <div className=' w-full h-[70px] fixed z-50 bg-linear-to-r/decreasing from-[#164da8] to-[#000000] border-b-1 border-white flex justify-between items-center px-10'>
      
      <div className='flex gap-[80px] items-center'>
      <div className='flex gap-4 items-center'>
      <Link to="/"> <img className=' w-[50px] h-[50px] ' src={HeaderLogo} alt="logo" /></Link>
      <Link to="/"><h1 className='text-white font-bold text-2xl '>SUMAYA <span className='text-[#f08546] font-bold text-2xl '>FX</span></h1></Link>
      </div>
      <input className='w-[350px] h-[30px] rounded-2xl outline-none bg-white pl-[30px] ' type="text" placeholder='Search cources'/>
      <i class="fa-solid fa-magnifying-glass absolute left-[650px] text-[#164da8] "></i>

      </div>

      <div className='flex items-center  '>
        <ul className='flex gap-8 font-bold text-white'>
           <Link to="/"> <li className='cursor-pointer hover:border-b-1 border-white'>Home</li></Link>
           <Link to="/dashboard"><li className='cursor-pointer hover:border-b-1 border-white'>Dashboard</li></Link>
           <Link to="/contact"><li className='cursor-pointer hover:border-b-1 border-white'>Contact us</li></Link>
           <Link to="/createaccount"> <button className='w-[150px] rounded-2xl cursor-pointer hover:bg-white hover:text-black border-1 border-white p-[4px] '>Create Account</button></Link>
        </ul>

        <div>

        <Link to="/cartpage"> <i class="fa-solid fa-cart-shopping text-white pl-[10px] text-xl cursor-pointer"></i></Link>
        <div className='bg-black w-[22px] border border-white h-[22px] absolute top-[5px] right-[30px] rounded-full '>
          <h1 className='text-white text-center'>1</h1>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Header
