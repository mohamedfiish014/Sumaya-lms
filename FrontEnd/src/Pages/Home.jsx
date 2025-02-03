import React from 'react'
import Header from "../Components/Header"
import ForexImageOne from "../images/ForexImageOne.jpg"
import TestManOne from "../images/TestManOne.jpg"
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {

  [
    {
      name: "Ahmed Bulle Hassan",
      role: "Student",
      image: "TestManOne", // Replace with actual image import
      review:
        "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
    },
    {
      name: "John Doe",
      role: "Trader",
      image: "TestManTwo", // Replace with actual image import
      review:
        "This platform has helped me understand Forex trading deeply, and I now make informed decisions confidently."
    },
    {
      name: "Jane Smith",
      role: "Entrepreneur",
      image: "TestManThree", // Replace with actual image import
      review:
        "I can access educational resources anytime, anywhere, which makes learning so convenient and efficient."
    }
  ];



  return (
    <div>
      <Header/>
      <div className='bg-linear-to-r/decreasing from-[#164da8] to-[#000000] w-full h-[1800px]'>

      <div>
<h1 className='text-center text-4xl text-white font-bold pt-[200px] '>Empower your future with the<br/> 
courses designed <span className='text-[#f08546] '>to fit your choice.</span></h1>
<p className='text-center text-white pt-[30px] '>We bring together world-class instructors, interactive content, and a supportive<br/>
community to help you achieve your personal and professional goals.</p>
</div>
<div className='items-center p-2 text-center mt-[50px]  '>
<Link to="/login"> <button className='text-blue-900 cursor-pointer hover:scale-110 duration-300  bg-white w-[200px] h-[50px] font-bold rounded-sm'>Start Learning</button></Link></div>     

{/* //Qeybtaan waa Cours-Yada */}

<div className='flex justify-center gap-8 mt-[50px] '>

{/* Course1 */}

<div className='w-[260px] h-[330px] bg-white rounded-sm '>
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



<div className='w-[260px] h-[330px] bg-white rounded-sm '>
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



<div className='w-[260px] h-[330px] bg-white rounded-sm '>
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



<div className='w-[260px] h-[330px] bg-white rounded-sm '>
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
<Link to="/showallcourses"> <button className='text-white border-2 border-white rounded-sm w-[200px] h-[50px] text-center font-bold cursor-pointer  mt-[50px] hover:bg-white hover:text-black transition-all duration-300'>Show all courses</button></Link>
</div>

{/* ///////////////////////////////// */}

{/* Testmonials */}

      <div className='mt-[100px] '>

      <h1 className='text-white font-bold text-center text-3xl'>Testimonials</h1>
<p className='text-white text-center pt-[30px] '>Hear from our learners as they share their journeys of transformation, success, and how our <br/>platform has made a difference in their lives.</p>

<div className='flex justify-center gap-[50px] mt-[80px] '>

<div className='w-[320px] h-[300px] rounded-[8px] bg-white '>
<div className='w-[320px] h-[100px] bg-[#F3F3F3] rounded-t-[8px] '>

<div className='w-[60px] h-[60px] rounded-full bg-white absolute ml-[120px] mt-[-20px] '>
<img className='rounded-full w-[50px] h-[50px] ml-[5px] mt-[4px]  ' src={TestManOne} alt="" />
</div>

<div className='pt-[50px] '>
  <h1 className='font-bold  text-center'>Ahmed Bulle Hassan</h1>
  <p className='text-center text-[#f08546]'>Student</p>
 </div>
<div>
  <p className='w-[300px] p-[12px] text-justify '>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
</div>

</div>

</div>


<div className='w-[320px] h-[300px] rounded-[8px] bg-white '>
<div className='w-[320px] h-[100px] bg-[#F3F3F3] rounded-t-[8px] '>

<div className='w-[60px] h-[60px] rounded-full bg-white absolute ml-[120px] mt-[-20px] '>
<img className='rounded-full w-[50px] h-[50px] ml-[5px] mt-[4px] ' src={TestManOne} alt="" />
</div>

<div className='pt-[50px] '>
  <h1 className='font-bold  text-center'>Ahmed Bulle Hassan</h1>
  <p className='text-center text-[#f08546]'>Student</p>
 </div>

<div>
  <p className='w-[300px] p-[12px] text-justify '>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
</div>
</div>
</div>
<div className='w-[320px] h-[300px] rounded-[8px] bg-white '>
<div className='w-[320px] h-[100px] bg-[#F3F3F3] rounded-t-[8px] '>

<div className='w-[60px] h-[60px] rounded-full bg-white absolute ml-[120px] mt-[-20px] '>
<img className='rounded-full w-[50px] h-[50px] ml-[5px] mt-[4px] ' src={TestManOne} alt="" />
</div>

<div className='pt-[50px] '>
  <h1 className='font-bold  text-center'>Ahmed Bulle Hassan</h1>
  <p className='text-center text-[#f08546]'>Student</p>
 </div>

 <div>
  <p className='w-[300px] p-[12px] text-justify '>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
</div>
</div>
</div>
</div>

 <div className='  '>
<i class="fa-solid fa-circle-chevron-left text-white text-[50px] absolute bottom-[-850px] left-[30px] "></i>
<i class="fa-solid fa-circle-chevron-right text-white text-[50px] absolute bottom-[-850px] right-[30px]"></i>
</div> 

<div className='mt-[50px] '>
  <h1 className='text-white text-2xl text-center font-bold'>Learn anything about Forex, anywhere, anytime </h1>
  <p className='text-white text-center pt-[30px] '>Quaerat eaque dicta laudantium, aliquam aut enim, <br/>voluptas nam velit provident, quod rem a dolore esse ad fugiat.</p>
</div>

      </div>

      </div>
      
      

      
<Footer/>

      </div>
    
  )
}

export default Home
