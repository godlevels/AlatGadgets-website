import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'

 

const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />}/>
            <Route path='home' element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='shop/:id' element={<ProductDetail />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
        </Routes>
    )
}

export default Routess
