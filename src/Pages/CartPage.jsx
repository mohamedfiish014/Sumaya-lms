import React from 'react'
import Header from '../Components/Header'
import ForexImageOne from "../images/ForexImageOne.jpg"
import Footer from '../Components/Footer'

const CartPage = () => {
  return (
    <div>
    <div>

      <Header/>
    </div>

    <div className=' bg-gray-200 h-[700px] '>
        <h1 className='pt-[100px] pl-[100px] font-bold text-2xl '>Your shopping cart</h1>
<div className='flex gap-8'>
        <div className='bg-white w-[700px] h-[400px] ml-[100px] mt-[30px] rounded-l-lg '>
        <div className='ml-[30px] mt-[30px] bg-gray-200 w-[650px] rounded-sm h-[130px] '>
<div className='flex'>
  <img className='w-[130px] h-[125px] p-2 ' src={ForexImageOne} alt="" />
  <div>
    <h1 className=' font-bold text-xl pt-[5px] '>Course name goes here</h1>
    <p className='font-bold text-sm text-[#f08546] '>Created by Teahcer name <span className='text-[#7E7E7E] '>(280 Studentes) </span></p>
    <p className=' text-justify w-[500px] '>Master the Complete JavaScript with 30 real world JavaScript project with Source Code and detailed JavaScript Notes</p>
    
    <p className='text-sm text-[#7E7E7E]'>Last update: 01/2025</p>
</div>
</div>
        </div>
        </div>
        <div className='bg-white w-[400px] h-[400px] mt-[30px] rounded-r-lg'>
<h1 className='font-bold pl-[20px] pt-[30px] '>Total Courses : 1</h1>
<h1 className='font-bold pl-[20px] pt-[20px]'>Total price : </h1>
<h1 className='font-bold pl-[20px] pt-[20px] text-6xl'>$79.88</h1>
<button className='bg-[#164da8] text-center w-[350px] p-2 rounded-sm text-white font-semibold ml-[22px] mt-[150px] '>Checkout</button>
        </div>
        </div>
    </div>

    <div className=' '>
      <Footer/>
    </div>
    </div>
  )
}

export default CartPage
