import React from 'react';
import './Header.css';
import sh from '../images/logo.jpeg';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='signin'>
            <NavLink to='/signin' style={{textDecoration:'none' }}><h5>Signin</h5></NavLink>
            </div>
            <NavLink to='/'><div className='logo'>
               <img src={sh} alt=""/>
            </div></NavLink>
            <div className='cart'>
            <NavLink to='/cart' style={{textDecoration:'none' }}><h5>Cart - {basket?.length}</h5></NavLink>
            </div>
            
        </div>
    )
}

export default Header
