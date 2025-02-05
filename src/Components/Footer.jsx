import React from 'react'
import {Link} from "react-router-dom"
import HeaderLogo from "../images/HeaderLogo.svg"

const Footer = () => {
  return (
    <div className='bg-linear-to-b/decreasing from-[#000000] to-[#164da8] w-full h-[300px] border-t border-white '>


    <div className='flex justify-between'>  
      <div className='pt-[30px] pl-[30px] '>
      <div className='flex gap-4 items-center'>
      <Link to="/"> <img className=' w-[50px] h-[50px] ' src={HeaderLogo} alt="logo" /></Link>
      <Link to="/"><h1 className='text-white font-bold text-2xl '>SUMAYA <span className='text-[#164da8] font-bold text-2xl '>FX</span></h1></Link>
      </div>
      <p className='w-[300px] pt-[20px] text-white text-justify '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>

      <div className='pt-[30px]'>
        <h1 className='font-bold text-white'>Quick acess</h1>
        <div className='pt-[20px] '>
        <ul className=' text-white'>
           <Link to="/"> <li className='cursor-pointer'>Home</li></Link>
           <Link to="/dashboard"><li className='cursor-pointer '>Dashboard</li></Link>
           <Link to="/contact"><li className='cursor-pointer '>Contact us</li></Link>
           {/* <Link to="/createaccount"> <button className='w-[150px] rounded-2xl cursor-pointer hover:bg-white hover:text-black border-1 border-white p-[4px] '>Create Account</button></Link> */}
        </ul>
      </div>

      </div>

      <div className='pt-[30px] '>
        <h1 className=' font-bold text-white'>Subscribe to our newsletter</h1>
        <p className='w-[291px] text-white pt-[20px] '>The latest news, articles, and resources, sent to your inbox weekly.</p>
<div className='mt-[10px] '>
  <input className='w-[240px] bg-white outline-none rounded-sm p-1 ' placeholder='Enter your email' type="email" />
</div>
  <button className='bg-[#164da8] p-1 w-[240px] text-white rounded-sm mt-[5px] cursor-pointer hover:bg-[rgb(60,98,159)] '>Subscribe</button>
      

      </div>
      </div>
      <div className='border border-white w-[1000px] ml-[120px] mt-[30px] '>
      </div>
<p className='text-white text-center pt-[15px] '>Copyright 2025 © SUMAYA FX. All Right Reserved.</p>

      </div>
  )
}

export default Footer
