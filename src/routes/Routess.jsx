import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'

 

const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />}/>
            <Route path='home' element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='productdetail' element={<ProductDetail />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
        </Routes>
    )
}

export default Routess
