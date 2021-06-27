import React from 'react';
import './Scraf.css';
import Product from './Product';

function Pant() {
    return (
        <div className='scraf'>
        <p className='heading'>HOME - PANTS</p>
        <div className='scrafcontainer'>
          <Product
            img= "https://martinvalen.com/17244-home_default/men-s-designer-jeans-fringe-ankle-pants-black.jpg"
            title= "A-Pant"
            desc="a best quality product"
            price= "1299"
            />
             <Product
            img= "https://martinvalen.com/17164-home_default/men-s-oversize-jogger-cargo-pants-skinny-leg-grey.jpg"
            title= "B-Pant"
            desc="a best quality product"
            price= "1199"
            />
             <Product
           img= "https://martinvalen.com/17121-home_default/men-s-cargo-denim-jogger-skinny-leg-camo.jpg"
           title= "C-Pant"
           desc= "a best quality product"
           price="1499"
            />
             <Product
           img= "https://martinvalen.com/17104-home_default/men-s-oversize-denim-jogger-pants-cargo-ice-blue.jpg"
           title= "D-Pant"
           desc= "a best quality product"
           price= "1399"
            />
             <Product
           img= "https://martinvalen.com/17257-home_default/men-s-cool-jogger-jeans-denim-pants-eau-de-nil.jpg"
           title="E-Pant"
           desc="a best quality product"
           price="1599"
            />
             <Product
            img= "https://martinvalen.com/16868-home_default/men-s-distorted-grey-basic-jeans.jpg"
            title="F-Pant"
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
           img= "https://martinvalen.com/17237-home_default/men-s-designer-jeans-fringe-ankle-pants-creme.jpg"
           title= "G-Pant"
           desc="a best quality product"
           price="1499"
            />
         
     </div>
        
    </div>
    )
}

export default Pant
