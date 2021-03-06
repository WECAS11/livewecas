import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { NavLink } from 'react-router-dom';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => ( 
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                    <input type="checkbox" /> this order contains a gift</small> 
    
                    </>
            )}
            decimalscale={3}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button><NavLink to='/shipped'style={{textDecoration:'none' }}>Proceed to checkout</NavLink></button>
        </div>
    )
}

export default Subtotal
