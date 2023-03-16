import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductDetail.scss';
import ProductInfo from '../components/ProductInfo';

const ProductDetail = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(location.state.product);
  }, [location]);

  return (
    <aside className='ProductDetail'> 
      <div className='ProductDetail-close'></div>
      {product && <ProductInfo product={product} />}
    </aside>
  );
}

export default ProductDetail;




