import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Fill } from 'react-icons/ri'
const Navbar = () => {
  const LinkNav = [
    {
      "name": "الرئيسية",
      "link": "/",
      "classname_li": "nav-item",
      "classname_a": "nav-link fw-bold"
    },
    {
      "name": "العروض",
      "link": "/Profile",
      "classname_li": "nav-item",
      "classname_a": "nav-link fw-bold"
    },
    {
      "name": "تواصل معنا",
      "link": "/Contact",
      "classname_li": "nav-item",
      "classname_a": "nav-link fw-bold"
    }
  ]
  return (
    <div className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <Link to='/#' className='navbar-brand'>WANO</Link>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav ms-auto'>
            {LinkNav.map((LinkNav) => {
              return(
                <li className={LinkNav.classname_li}><Link to={LinkNav.link} className={LinkNav.classname_a}>{LinkNav.name}</Link></li>
              )
            })}
          </ul>
          <ul className='nav navbar-nav ms-auto'>
            <li className='Cart_Navigate nav-item'>
              <Link to="/Cart" className='nav-link'>
                <em>22</em>
                <RiShoppingCart2Fill />
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar