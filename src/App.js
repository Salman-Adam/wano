import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'
import { Home, Profile, Cart, Contact } from './PageRouter/index'
import Navbar from './Components/Navbar/Navbar'
import { Navigation, Container } from './Components/index'
import ProductScreen from './PageRouter/ProductScreen/ProductScreen'
import Menu from './PageRouter/Menu/Menu'
const app = () => {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>
      </Container>
      <Navigation />
    </>
  )
}

export default app