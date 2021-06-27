import React from 'react';
import './Signin.css';
import sh from '../images/logo.jpeg';
import { NavLink } from 'react-router-dom';

function Signin() {
    return (
        <div classNames='signin'>
        
          <NavLink to='/'><img className='loginimg' src={sh} alt=""/></NavLink>
          <div className='login'>
             <h1>Sign-in</h1>

             <form className='form'>

            <h5>E-mail</h5>
            <input type='text' placeholder='   Enter your e-mail'/>

            <h5>Password</h5>
            <input type='password' placeholder='  Password'/>
            <br/>
            <button className='loginbtn'>Sign-in</button>
            <p className='condition'>By sigining-in you agree to WECAS's condition of use and sale. <br/>Please 
                 our privacy notice, our cookies notice and our interest-based Ads
                 notice
             </p>
             <button className='resbtn'>Creat your Account</button>
             </form>
             
          </div>
            
        </div>
    )
}

export default Signin
