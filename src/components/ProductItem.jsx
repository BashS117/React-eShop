import React from 'react';
import '../styles/ProductItem.scss';
import addToCartIcon from '../assets/images/add-to-cart.png';


const ProductItem = ({product}) => {

	

    return (
        <div className="product-item">
         
              <img className='product-item-image' src={product.images[0]} alt={product.title} />
			<div className="product-card-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img className='add-to-cart-icon' src={addToCartIcon} alt="" />
				</figure>
				
			</div> 
		</div>
    );
}

export default ProductItem;