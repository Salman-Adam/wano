import React from 'react'

import './ProductCard.css'
import Products from '../../Data/Products'
import Product from '../Product/Product'
const ProductCard = () => {
  return (
    <>
      <div className='row'>
        {Products.map((index) => {
          return (
            <div className='col-md-2 col-6'>
              <Product singleItem={index} key={index._id}/>
            </div>
          )})}
      </div>
    </>
  )
}

export default ProductCard