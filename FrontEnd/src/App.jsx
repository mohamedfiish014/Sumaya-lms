import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/ContactUs"
import CreateAccount from './Pages/CreateAccount'
import Login from './Pages/Login'
import SideNav from './Components/SideNav'
import CourseDescriptionOne from './Pages/CourseDescriptionOne'
import CourseDescriptionFour from './Pages/CourseDescriptionFour'
import CourseDescriptionTwo from './Pages/CourseDescriptionTwo'
import CourseDescriptionThree from './Pages/CourseDescriptionThree'
import ShowAllCourses from './Pages/ShowAllCourses'
import AllTeachers from './Pages/Dashboard/AllTeachers'
import CartPage from './Pages/CartPage'
// import ShowAllCourseDesc1 from './Pages/ShowAllCoursses/ShowAllCourseDesc1'

const App = () => {
  return (
    <div>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/createaccount' element={<CreateAccount/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/sidenav' element={<SideNav/>} />
    <Route path='/coursdescriptionone' element={<CourseDescriptionOne/>} />
    <Route path='/coursdescriptionfour' element={<CourseDescriptionFour/>} />
    <Route path='/coursdescriptiontwo' element={<CourseDescriptionTwo/>} />
    <Route path='/coursdescriptionthree' element={<CourseDescriptionThree/>} />
    <Route path='/showallcourses' element={<ShowAllCourses/>} />
    <Route path='/allteachers' element={<AllTeachers/>} />
    <Route path='/cartpage' element={<CartPage/>} />
        
    </Routes>  
    </div>
  )
}

export default App
