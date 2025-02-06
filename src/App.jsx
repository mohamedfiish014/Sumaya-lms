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
import AddStudent from './Pages/Dashboard/Students/AddStudent'
import AllStudents from './Pages/Dashboard/Students/AllStudents'
import AddCourse from './Pages/ShowAllCoursses/AddCourse'
import Faq from './Pages/Faq'
import SlidesImage from './Pages/SlidesImage'
import AddTeacher from './Pages/Dashboard/Teacher/AddTeacher'
import Admin from './Pages/Dashboard/Admin/Admin'
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
    <Route path='/add' element={<AddStudent/>} />
    <Route path='/all' element={<AllStudents/>} />
    <Route path='/courses' element={<AddCourse/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/slides' element={<SlidesImage/>} />
    <Route path='/addteacher' element={<AddTeacher/>} />
    <Route path='/admin' element={<Admin/>} />
        
    </Routes>  
    </div>
  )
}

export default App
