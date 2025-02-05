import React from 'react'
import Header from '../Components/Header'
import ForexImageOne from "../images/ForexImageOne.jpg"
import { useState } from "react";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';



const CourseDescriptionTwo = () => {

    // States-yadan waa course content
    
    const [isOpenIntro, setIsOpenIntro] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    /////////////////////////////////////////////////////
  
    return (
    <div>
      
      <div>
      <Header/>
      <Link to="/showallcourses"><i class="fa-solid fa-arrow-left pl-[130px] pt-[50px] text-2xl text-[#f08546]"></i></Link>
    <div className='w-[1000px] h-[1500px] bg-white rounded-lg mt-10 ml-[130px] border-t-2 border-[#164da8] border-b-2  drop-shadow-xl '>
<div className='w-[800px] h-[150px] border-1 border-[#7E7E7E] rounded-sm ml-[100px] mt-[20px]'>
    
    <div className='flex gap-10 '>
<div className='w-[200px] h-[140px] m-1 border-1 border-[#7E7E7E] '>
<img className='w-[190px] h-[130px] m-1 ' src={ForexImageOne} alt="" />
</div>
<div>
    <h1 className=' font-bold text-2xl pt-[20px] '>Course name goes here</h1>
    <p className='font-bold text-sm text-[#f08546] '>Created by Teahcer name <span className='text-[#7E7E7E] '>(280 Studentes) </span></p>
    <p className=' text-justify w-[500px] '>Master the Complete JavaScript with 30 real world JavaScript project with Source Code and detailed JavaScript Notes</p>
    
    <p className='text-sm text-[#7E7E7E]'>Last update: 01/2025</p>
</div>
</div>

<div className='w-[800px] h-[350px] bg-[#f3f3f3] mt-[50px] rounded-sm '>
    <h1 className='text-2xl font-bold pt-[30px] pl-[30px] '>What you will learn</h1>

    
    <div className='space-y-2 ml-[20px] mt-[20px] '>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className="space-y-2  ">
<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-check text-green-500"></i>
<p>You will learn to create modern web applications using JavaScript</p>
</div>
</div>
</div>
    </div>

{/* Course Contents */}

<div>
     

    <div className='w-[800px]  '>
      <h1 className=' text-xl font-bold pt-[30px] pl-[30px]'>Course content</h1>
    </div>

    <div className='bg-[#f3f3f3] w-[800px] rounded-sm h-[260px] '>

    <div className="relative w-[750px] p-4  bg-white shadow-lg top-[20px] mt-[30px] ml-[25px] ">


      <button
        className="w-full p-2 bg-[#f3f3f3]  text-black font-bold rounded-sm "
        onClick={() => setIsOpenIntro(!isOpenIntro)}
      > Introduction
        {isOpenIntro ? 
        
          <i class="fa-solid fa-caret-up space-x-4 absolute right-[30px] top-[25px]"></i>
        : 
        <i class="fa-solid fa-caret-down absolute right-[30px] top-[25px] "></i>
        }
      </button>
      {isOpenIntro && (
        <ul className="mt-2 border-t border-[#164da8] pt-2 space-y-2">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Overview of the course</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Setting-up our first trade</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction2</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction3</li>
        </ul>
      )}
      </div>

{/* Course Content 2 */}

    <div className="relative w-[750px] p-4  bg-white  shadow-lg top-[0px] mt-[19px] ml-[25px] ">

      <button
        className="w-full p-2 bg-[#f3f3f3]  text-black font-bold rounded-sm "
        onClick={() => setIsOpen1(!isOpen1)}
      > Section 1
        {isOpen1 ? 
        
          <i class="fa-solid fa-caret-up space-x-4 absolute right-[30px] top-[25px]"></i>
        : 
        <i class="fa-solid fa-caret-down absolute right-[30px] top-[25px] "></i>
        }
      </button>
      {isOpen1 && (
        <ul className="mt-2 border-t border-[#164da8] pt-2 space-y-2">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Overview of the course</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Setting-up our first trade</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction2</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction3</li>
        </ul>
      )}
      </div>

{/* Course Content 2 */}

    <div className="relative w-[750px] p-4  bg-white  shadow-lg top-[0px] mt-[px] ml-[25px] ">

      <button
        className="w-full p-2 bg-[#f3f3f3]  text-black font-bold rounded-sm "
        onClick={() => setIsOpen2(!isOpen2)}
      > Section 2
        {isOpen2 ? 
        
          <i class="fa-solid fa-caret-up space-x-4 absolute right-[30px] top-[25px]"></i>
        : 
        <i class="fa-solid fa-caret-down absolute right-[30px] top-[25px] "></i>
        }
      </button>
      {isOpen2 && (
        <ul className="mt-2 border-t border-[#164da8] pt-2 space-y-2">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Overview of the course</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Setting-up our first trade</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction2</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Introduction3</li>
        </ul>
      )}
      </div>
    </div>

      </div>

<div>

<h1 className='text-xl font-bold pt-[30px] pl-[30px]'>Requirements</h1>

<div className='space-y-2 ml-[20px] mt-[20px] '>

<div className='flex gap-2'>
<i class="fa-solid fa-caret-right"></i>
<p>Before diving into this topic, learners should have a basic grasp of JavaScript, including knowledge of variables, functions, and basic syntax.</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-caret-right"></i>
<p>Having some previous experience with Reactjs would be beneficial, as the course explores advanced React concepts and best practices.</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-caret-right"></i>
<p>It will be helpful to have a basic understanding of web development concepts such as HTML, CSS, and web architecture.</p>
</div>

<div className='flex gap-2'>
<i class="fa-solid fa-caret-right"></i>
<p>Learners should feel comfortable using a text editor or integrated development environment (IDE) for writing code.</p>
</div>
</div>

<div>

<h1 className='text-xl font-bold pt-[30px] pl-[30px]'>Description</h1>

<p className='pl-[30px] pt-[20px] '>Get ready for an exciting journey into the world of modern web development! Our course, "Full stack MERN Blog Project: MERN Stack Blog with Dashboard" is designed to guide you from the basics to creating a fully functional MERN (MongoDB, Express.js, React, and Node.js) stack blog.

</p>
</div>



<div>
<button className='w-full bg-[#164da8] hover:bg-[#5463ab] p-2 font-bold text-white rounded-sm cursor-pointer mt-[30px] '>Add to cart</button>
</div>


</div>

</div>
</div>

<div className='mt-[100px] '>
<Footer/>
</div>

    </div>

    </div>
  )
}

export default CourseDescriptionTwo
