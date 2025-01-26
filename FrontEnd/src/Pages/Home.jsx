import React from 'react'
import Header from "../Components/Header"
import ForexImageOne from "../images/ForexImageOne.jpg"

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='bg-linear-to-r/decreasing from-[#164da8] to-[#000000] w-full'>

      <div>
<h1 className='text-center text-4xl text-white font-bold pt-[100px] '>Empower your future with the<br/> 
courses designed <span className='text-[#f08546] '>to fit your choice.</span></h1>
<p className='text-center text-white pt-[30px] '>We bring together world-class instructors, interactive content, and a supportive<br/>
community to help you achieve your personal and professional goals.</p>
</div>
<div className='items-center p-2 text-center mt-[50px] '>
<i class="fa-solid fa-arrow-right absolute top-[405px] left-[695px] text-blue-900 "></i>
<button className='text-blue-900 bg-white w-[200px] h-[50px] font-bold rounded-2xl'>Start Learning</button></div>
      
<div>
        <h1 className='text-[#f08546] font-bold text-center pt-[30px] '>Learn from the best</h1>
        <p className='text-white text-center pt-[30px] '>Discover our top-rated courses across various categories. From coding and design to <br/>business and wellness, our courses are crafted to deliver results.</p>
      
        <div>

<div className='w-[260px] h-[300px] bg-white rounded-sm '>
<img className='rounded-t-sm' src={ForexImageOne} alt="" />

<h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1>
<p className='text-[#565656] font-light pl-[10px] '>Instructor: Sumaya</p>

<div className='flex gap-2'>
  <p className='text-[#565656] font-light pl-[10px]'>4.5</p>
  <div className='text-[15px] space-x-1 '>
  <i class="fa-solid fa-star text-[#f08546] "></i>
  <i class="fa-solid fa-star text-[#f08546] "></i>
  <i class="fa-solid fa-star text-[#f08546] "></i>
  <i class="fa-solid fa-star text-[#f08546] "></i>
  <i class="fa-solid fa-star text-[#7E7E7E] "></i>
  </div>
</div>
</div>


      </div>
      </div>
      
      
      </div>
    </div>
  )
}

export default Home
