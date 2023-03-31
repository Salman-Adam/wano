import React from 'react'

import './Home.css'
import {RiSearch2Line} from "react-icons/ri"
import ProductCard from '../../Components/ProductCard/ProductCard'

const Home = () => {
  return (
    <div className='home'>
      <div className="search">
          <input type="text"  placeholder='Search...' /> <RiSearch2Line/> 
      </div>
      <div dir='rtl'> <ProductCard /> </div>
    </div>
  )
}

export default Home