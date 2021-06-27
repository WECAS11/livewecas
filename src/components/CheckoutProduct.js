import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, img, title, price, desc}) {
    const [{basket}, dispatch] = useStateValue();

    const remove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title
        })
    }
    return (
        <div className="checkout">
          <div className='checkoutimg'><img className="checkoutimg1" src={img}/></div> 
           <div className="checkoutinfo">
               <p>{title}</p>
               <p><small>₹</small><strong>{price}/-</strong></p>
               <button onClick={remove}>Remove</button>
           </div>
            
        </div>
    )
}

export default CheckoutProduct
