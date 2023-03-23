import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/ProductDetail.scss';
import ProductInfo from '../components/ProductInfo';
import Previous from '../assets/images/icon-previous.svg'

const ProductDetail = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(location.state.product);
  }, [location]);

  return (
    <aside className='ProductDetail'>
      <Link to="/">
      <div className='ProductDetail-close'>
        <img src={Previous} alt="" />
      </div>
      </Link> 
      {product && <ProductInfo product={product} />}
    </aside>
  );
}

export default ProductDetail;




