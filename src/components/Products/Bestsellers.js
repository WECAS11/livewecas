import React from 'react';
import './Scraf.css';
import Product from './Product';

function Bestsellers() {
    return (
        <div className='scraf'>
        <p className='heading'>Coustumers favourite</p>
        <div className='scrafcontainer'>
          <Product
            img= "https://martinvalen.com/17244-home_default/men-s-designer-jeans-fringe-ankle-pants-black.jpg"
            title= "A-Pant"
            desc="a best quality product"
            price= "1599"
            />
            <Product
                img= "https://martinvalen.com/16292-home_default/men-s-oversize-basic-t-shirt-double-tailed-grey.jpg"
                title="F-Tshirt"
                desc="a best quality product"
                price="1299"
                />
                <Product
             img= "https://martinvalen.com/16439-home_default/men-s-jogger-sweatpants-parachute-beige.jpg"
             title="F-Pant"
             desc="a best quality product"
             price="1399"
            />
             <Product
                img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzH91EwaSyR1cFalDJeOWZ57presBCZDnG3EbOyPy3nyI9dptmUI2yiz2E9DsXySpzjw&usqp=CAU"
                title= "B-Tshirt"
                desc="a best quality product"
                price= "1299"
                />
            </div>
        
        </div>
    )
}

export default Bestsellers
