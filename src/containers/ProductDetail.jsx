import React from 'react';
import '../styles/ProductDetail.scss'
import ProductInfo from '../components/ProductInfo';
import ZoomProductImg from '../components/ZoomProductImg';


const ProductDetail = () => {
  return (
    <aside className='ProductDetail'> 
    <div className='ProductDetail-close'>

    </div>

    <ProductInfo/>


<ZoomProductImg/>
    
    
      
      </aside>
   

  );
}

export default ProductDetail;