import React from "react";
import "./Carol.css";


const Carol= ({ product })=> {
  return ( 
             <div className='carousel'>
             <div className='carol'>
             <a href={`/products/${product._id}`}></a>  
           <img src={product.image} className='image'/>
           </div>
         <div className='carol_text'>
           <div className='product_desc'>
             <div className='name'>{product.name}</div>
             <div className='details'> {product.description}</div> 
           </div>
            <div className='price'>
            ${product.price}
            </div>
         </div>
         </div>  
  );
}

export default Carol
