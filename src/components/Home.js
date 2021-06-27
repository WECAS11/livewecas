import React from 'react';
import './Home.css';
import shirt from '../images/shirt.jpg';
import tshirt from '../images/tshirt.jpg';
import pant from '../images/pant.jpg';
import scraf from '../images/scraf.jpg';
import sh from '../images/cartoon.jpg';
import mypic from '../images/mypic.jpeg';
import Bestsellers from './Products/Bestsellers';
import { NavLink } from 'react-router-dom';


function Home() {

    return (
        <div className='home'>
            <div className='blank'></div>
            <img className="homeimg" src="https://media1.tenor.com/images/6cd451ee790e273adb26af44e6960ca3/tenor.gif?itemid=7389213" alt=""/>
            <h1 className='tagline'>Welcome,<br/> To The Shop Of<br/><span>-- Hip Hop --</span></h1>
            <div className='blank'></div>
            <div className='ptag'>Products</div>
            <div className='products'>
            <NavLink to='/pant'style={{textDecoration:'none' }}><div className='shirt'>
                    <img src={pant} alt="" />
                    <p className='pname'>Pants</p>
                </div></NavLink>
                <NavLink to='/tshirt'style={{textDecoration:'none' }}><div className='shirt'>
                    <img src={tshirt} alt="" />
                    <p className='pname'>T-Shirts</p>
                </div></NavLink>
               
                <NavLink to='/scraf'style={{textDecoration:'none' }}><div className='shirt'>
                    <img src={scraf} alt="" />
                    <p className='pname'>Scraf</p>
                </div></NavLink>
                <NavLink to='/shirt'style={{textDecoration:'none' }}><div className='shirt'>
                    <img src={shirt} alt="" />
                    <p className='pname'>Shirts</p>
                </div></NavLink>
            </div>
            <div className='cartoon'>
                   <img className="cartoonimg" src={sh} alt="" />
                   <button className='cb'>Shop Now</button>
            </div>
            <div className='free'>
                <img className="freebg" src="https://media.tenor.com/images/952997f775050a958c0695b34bcb87a3/tenor.gif" alt=""/>
                <p className='bq'>Top- Sellers</p>
            </div>
            <div className='bestseller'>
                <Bestsellers/>
            </div>
            <div className='design'>
                <p className='designed'>Designed by</p>
                <div className='mypic'>
                <img src={mypic} alt="" />  
                <p className='vikas'>Vikas Hiremath </p>
                </div>
            </div>
        </div>
    )
}

export default Home
