import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Login from '../../login'
import Registration from '../../Registration'

const Routing = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Register' element={<Registration/>}></Route>
    </Routes>
  )
}

export default Routing