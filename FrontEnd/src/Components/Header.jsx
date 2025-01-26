import React from 'react'
import SumayaFxLogo from "../images/Logo3.png"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className=' w-full h-[70px] bg-linear-to-r/decreasing from-[#164da8] to-[#000000] border-b-1 border-white flex justify-between items-center px-10'>
      
      <div className='flex gap-[80px] items-center'>
      <Link to="/"> <img className='w-[150px] h-[150px] ' src={SumayaFxLogo} alt="logo" /></Link>
      <input className='w-[350px] h-[30px] rounded-2xl outline-none bg-white pl-[30px] ' type="text" placeholder='Search cources'/>
      <i class="fa-solid fa-magnifying-glass absolute left-[280px] text-[#164da8] "></i>

    <button className='bg-linear-to-r/decreasing from-[#164da8] to-[#000000] h-[25px] w-[100px] absolute left-[517px] rounded-2xl text-white font-bold '>Search</button>
      </div>

      <div>
        <ul className='flex gap-10 font-bold text-white'>
           <Link to="/"> <li className='cursor-pointer hover:border-b-1 border-white'>Home</li></Link>
           <Link to="/dashboard"><li className='cursor-pointer hover:border-b-1 border-white'>Dashboard</li></Link>
           <Link to="/contact"><li className='cursor-pointer hover:border-b-1 border-white'>Contact us</li></Link>
           <Link to="/createaccount"> <button className='w-[150px] rounded-2xl cursor-pointer hover:bg-white hover:text-black border-1 border-white p-[4px] '>Create Account</button></Link>
        </ul>
      </div>

    </div>
  )
}

export default Header
