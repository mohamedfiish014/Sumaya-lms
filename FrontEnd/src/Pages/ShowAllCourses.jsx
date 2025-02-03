import React from 'react'
import Header from '../Components/Header'
import ForexImageOne from "../images/ForexImageOne.jpg"
// import TestManOne from "../images/TestManOne.jpg"
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const ShowAllCourses = () => {
  return (
    <div>
<Header/>

<div>
  <h1 className='pl-[70px] font-bold text-2xl pt-[100px] '>Our available courses</h1>
</div>

<div>
  
{/* //Qeybtaan waa Cours-Yada */}

<div className='flex justify-center gap-8 mt-[50px] '>

{/* Course1 */}

<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl '>
<Link to="/coursdescriptionone"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptionone"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>

{/* Course2 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
<Link to="/coursdescriptiontwo"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptiontwo"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>


{/* Course3 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
<Link to="/coursdescriptionthree"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptionthree"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>


{/* Course4 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
 <Link to="/coursdescriptionfour"> <img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

 <Link to="/coursdescriptionfour"><h1 className='font-bold pl-[10px] pt-[10px] '>Write course name here</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>
      </div>
      <div className='flex justify-center'>
<Link to="/showallcourses"> <button className='text-white border-2 border-white rounded-sm w-[200px] h-[50px] text-center font-bold cursor-pointer  mt-[50px] hover:bg-white hover:text-black '>Show all courses</button></Link>
</div>

{/* Qeybta 2aad ee Course-yada */}

<div className='flex justify-center gap-8 '>

{/* Course1 */}

<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl '>
<Link to="/coursdescriptionone"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptionone"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>

{/* Course2 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
<Link to="/coursdescriptiontwo"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptiontwo"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>


{/* Course3 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
<Link to="/coursdescriptionthree"><img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

<Link to="/coursdescriptionthree"><h1 className='font-bold pl-[10px] pt-[10px] '>Start your future today</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>


{/* Course4 */}



<div className='w-[260px] h-[330px] bg-white rounded-sm drop-shadow-2xl'>
 <Link to="/coursdescriptionfour"> <img className='rounded-t-sm' src={ForexImageOne} alt="" /></Link>

 <Link to="/coursdescriptionfour"><h1 className='font-bold pl-[10px] pt-[10px] '>Write course name here</h1></Link>
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
  <p className='text-[#7E7E7E]'>(2,500)</p>
</div>
<p className='font-bold pl-[10px] '>$59.9</p>
<button className='bg-[#164da8] text-white font-bold w-[200px] h-[30px] rounded-sm mt-[10px] ml-[30px] '>Add to cart</button>
</div>
      </div>
      <div className='flex justify-center'>
{/* <Link to="/showallcourses"> <button className='text-white border-2 border-white rounded-sm w-[200px] h-[50px] text-center font-bold cursor-pointer  mt-[50px] hover:bg-white hover:text-black '>Show all courses</button></Link> */}
</div>


</div>
<div className='mt-[50px] '>

<Footer/>
</div>
    </div>
  )
}

export default ShowAllCourses
