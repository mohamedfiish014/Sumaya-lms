import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/Contact"
import CreateAccount from './Pages/CreateAccount'

const App = () => {
  return (
    <div>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/createaccount' element={<CreateAccount/>} />
        
    </Routes>  
    </div>
  )
}

export default App
