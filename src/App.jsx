import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Users from './pages/users/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/users/:id' element= {<Users/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
