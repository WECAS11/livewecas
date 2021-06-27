import React from 'react';
import './Shipped.css';
import sh from '../images/ship.jpg';

function Shipped() {
    return (
        <div className='happy'>
            <h1>THANK YOU</h1>
            <h2> SHIPPMENT UNDER PROCESS</h2>
            <img src={sh}/>
        </div>
    )
}

export default Shipped
