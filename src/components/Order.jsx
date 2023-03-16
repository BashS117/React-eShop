import React,{useContext} from 'react';
import '../styles/Order.scss';
import iconDelete from '../assets/images/icon-delete.svg';
import AppContext from '../context/AppContext';

const Order = ({cartItem}) => {
const {removeFromCart,}= useContext(AppContext);

const handleRemove = cartItem =>{
  removeFromCart(cartItem);
}

    return (
        <div className="my-order-content">
                 

        <div className="order">
          <figure>
            <img className="img-product-cart" src={cartItem.images[0]} alt={cartItem.title}/>
          </figure>
          <div className="info-item-container">
            <p>
              {cartItem.title}
            </p>
            <div className="value-items">
              <span>{cartItem.price}</span>
              <span>X {cartItem.amount}</span>
              <p>${cartItem.price*cartItem.amount}</p>
            </div>
          </div>
          <img 
          onClick={()=>handleRemove(cartItem)}
          className="delete-icon" 
          src={iconDelete} alt="arrow"/>
        </div>
      
        <button className="checkout-button">Checkout</button>
      
      </div>


    );
}

export default Order;