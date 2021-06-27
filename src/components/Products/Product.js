import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product({id, img, title, price, desc}) {
    const [{basket}, dispatch] = useStateValue();

    console.log('this is basket', basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
            
                title:title,
                img:img,
                price:price,
                desc:desc,
            },
        });
    };
    return (
        <div className='product' >
            <img src={img} alt="" />    
            <h1>{title}</h1>
            <h4>{desc}</h4>
            <h2><strong>₹</strong>{price} /-</h2>
            <button onClick={addToBasket}>Add to cart</button>     
        </div>
    )
}

export default Product
