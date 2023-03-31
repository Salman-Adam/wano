import React from 'react'
import './ProductScreen.css'
import { Link, useParams } from "react-router-dom"
import Product from '../../Data/Products'
import {FaHandPointUp} from 'react-icons/fa'

const ProductScreen = () => {
    const params = useParams()
    const singleProduct = Product.find(p => p._id === params.id)
    return (
        <div className='productscreen'>
            <div className='container'>
                <div className='return-home'><Link to='/'><FaHandPointUp/> الرجوع للصفحة الرئيسية </Link></div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card-body card-img text-center'>
                            <img src={singleProduct.image} alt={singleProduct.name} className="img-flaud" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card-body'>
                            <div>
                                <h2>{singleProduct.name}</h2>
                            </div>
                            <div className='card-text price'>
                                <strong>السعر : </strong>{singleProduct.price} الف
                            </div>
                            <div>
                                <p><strong>المواصفات : </strong> {singleProduct.description}</p>
                            </div>
                            <div>
                                <span className={`stock  ${singleProduct.countInStock > 0 ? 'InStock' : 'outofstock'}`}>
                                    {singleProduct.countInStock > 0 ? 'متوفر' : 'انتهت الكمية'}
                                </span>
                            </div>
                            <div className='card-btn'>
                                <button type='button'
                                 className={singleProduct.countInStock === 0 ? 'none' : 'on'}
                                 disabled={singleProduct.countInStock === 0}>
                                    شراء الان
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductScreen


