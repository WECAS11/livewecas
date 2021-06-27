import React from 'react';
import './Scraf.css';
import Product from './Product';

function Tshirt() {
    return (
        <div className='scraf'>
            <p className='heading'>HOME - T-shirts</p>
            <div className='scrafcontainer'>
              <Product
                img= "https://martinvalen.com/16376/men-s-oversize-t-shirt-ripped-neck-text-printed-mint-green.jpg"
                title= "A-Tshirt"
                desc="a best quality product"
                price= "1599"
                />
                 <Product
                img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzH91EwaSyR1cFalDJeOWZ57presBCZDnG3EbOyPy3nyI9dptmUI2yiz2E9DsXySpzjw&usqp=CAU"
                title= "B-Tshirt"
                desc="a best quality product"
                price= "1299"
                />
                 <Product
               img= "https://martinvalen.com/17523-home_default/men-s-oversize-t-shirt-striped-font-detail-white.jpg"
               title= "C-Tshirt"
               desc= "a best quality product"
               price="1499"
                />
                 <Product
               img= "https://martinvalen.com/17030-home_default/men-s-oversize-t-shirt-white.jpg"
               title= "D-Tshirt"
               desc= "a best quality product"
               price= "1399"
                />
                 <Product
               img= "https://martinvalen.com/16298-home_default/men-s-oversize-t-shirt-ripped-neck-print-detailed-red.jpg"
               title="E-Tshirt"
               desc="a best quality product"
               price="1599"
                />
                 <Product
                img= "https://martinvalen.com/16292-home_default/men-s-oversize-basic-t-shirt-double-tailed-grey.jpg"
                title="F-Tshirt"
                desc="a best quality product"
                price="1299"
                />
                 <Product
                 img= "https://martinvalen.com/16309-home_default/men-s-oversize-t-shirt-round-neck-tie-dye-green-white.jpg"
                 title="F-Tshirt"
                 desc="a best quality product"
                 price="1399"
                />
                 <Product
               img= "https://martinvalen.com/16051-home_default/men-s-oversize-t-shirt-tie-dye-pattern.jpg"
               title= "G-Tshirt"
               desc="a best quality product"
               price="1499"
                />
             
         </div>
            
        </div>
    )
}

export default Tshirt
