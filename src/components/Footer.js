import React from 'react';
import './Footer.css';
import pay from '../images/pay.png';

function Footer() {
    return (
        <div className='Footer'>
            <div className='blank'></div>
            <div className='details'>
                <div className='about'>
                    <h1 className='head'>About us</h1>
                    <p className='leg'> After being frustrated with being unable to find fitted high quality essentials at a fair price, we decided to take matters in to our own hands.</p>
                </div>
                <div className='about'>
                     
                    <h1 className='head'>Help</h1>
                    <p className='leg'> #88, cashhouse,hntl.580012</p>
                    <p className='leg2'> Ph no: +91 7777444555</p>
                    <p className='leg3'> email: wecas@gmail.com</p>
                   
                </div>
            </div>
            <div className='blank'></div>
            <p> ©All Rights-reserved by wecas.</p>
            <img src={pay} alt=""/>
            
        </div>
    )
}

export default Footer
