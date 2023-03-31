import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { RiMenu2Fill, RiHome3Fill, RiShoppingCart2Fill, RiUser3Line, RiPhoneFill } from 'react-icons/ri'
const Navigation = () => {

    document.querySelectorAll('.item').forEach(li => {
        li.addEventListener('click', function () {
            document.querySelectorAll('.item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    return (
        <div className='Navigation'>
            <ul>
                <li className='item'>
                    <Link to="/Menu">
                        <RiMenu2Fill />
                        <span>القائمة</span>
                    </Link>
                </li>
                <li className='item'>
                    <Link to="/Profile">
                        <RiUser3Line />
                        <span>العروض</span>
                    </Link>
                </li>
                <li className='item active'>
                    <Link to="/">
                        <RiHome3Fill />
                        <span>الرئيسية</span>
                    </Link>
                </li>
                <li className='item'>
                    <Link to="/Contact">
                        <RiPhoneFill />
                        <span>تواصل معنا</span>
                    </Link>
                </li>
                <li className='Cart_Navigate item'>
                    <Link to="/Cart">
                        <em>22</em>
                        <RiShoppingCart2Fill />
                        <span>السلة</span>

                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
