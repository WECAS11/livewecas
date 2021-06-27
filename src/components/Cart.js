import React from 'react';
import { useStateValue } from '../StateProvider';
import './Cart.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Cart() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div className='cart'>
            <div className='cartright'>
            <p>Hello, welcome to cart</p>
            <div>
                {basket.map(item => (
                    <CheckoutProduct
                
                    title= {item.title}
                    img={item.img}
                    price={item.price}
                    
                        />
                        
                ))}
                
            </div>
            </div>
            <div className='cartleft'>
                <div className='sub'>< Subtotal/></div>
            </div>
        </div>
    )
}

export default Cart
