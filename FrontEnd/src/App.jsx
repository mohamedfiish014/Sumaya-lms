import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/Contact"
import CreateAccount from './Pages/CreateAccount'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/createaccount' element={<CreateAccount/>} />
    <Route path='/login' element={<Login/>} />
        
    </Routes>  
    </div>
  )
}

export default App
