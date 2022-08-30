import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feedback from '../feedback'
import Home from '../home'
import Login from '../login'
import Register from '../register'
import Health from '../health'
import Business from '../business'
import Sports from '../sports'
import Entertainment from '../entertainment'
import Technology from '../technology'
import Politics from '../politics'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/business' element={<Business/>}/>
                <Route path='/health' element={<Health/>} />
                <Route path='/sports' element={<Sports/>} />
                <Route path='/entertainment' element={<Entertainment/>} />
                <Route path='/politics' element={<Politics/>} />
                <Route path='/technology' element={<Technology/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp