import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
const Product = ({ singleItem }) => {
    return (

        <div className=' mb-4'>
            <div className='cart-card'>
                <div className='c-img'>
                    <Link to={`/product/${singleItem._id}`}><img src={singleItem.image} alt='' /></Link>
                </div>
                <div className='c-name'><Link to={`/product/${singleItem._id}`}>{singleItem.name}</Link></div>
                <div className='c-price'>{singleItem.price}$</div>
                <div className='c-btn'>
                    <button type='button' className=''><Link to={`/product/${singleItem._id}`}>الشراء</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Product