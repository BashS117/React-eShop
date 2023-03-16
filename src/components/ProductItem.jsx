import React from 'react';
import '../styles/ProductItem.scss';
import addToCartIcon from '../assets/images/add-to-cart.png';
import { useNavigate } from 'react-router-dom';


const ProductItem = ({product}) => {

	const navigate = useNavigate();
	const toInfo=()=>{
		navigate(`/ProductDetail`, 
		{state:{product

		}})
	}
	

    return (
        <div className="product-item">
         
              <img onClick={toInfo} className='product-item-image' src={product.images[0]} alt={product.title} />
			<div className="product-card-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img onClick={toInfo} className='add-to-cart-icon' src={addToCartIcon} alt="" />
				</figure>
				
			</div> 
		</div>
    );
}

export default ProductItem;