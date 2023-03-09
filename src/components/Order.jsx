import React from 'react';
import '../styles/Order.scss';
const Order = () => {
    return (
        <div class="my-order-content">
                      <p className="cartEmpty"> Your cart is empty</p>

        <div class="order">
          <figure>
            <img class="img-product-cart" src="./assets/image-product-1-thumbnail.jpg" alt=""/>
          </figure>
          <div class="info-item-container">
            <p>
              Fall Limited Edition sneaker
            </p>
            <div class="value-items">
              <span>$125.00</span>
              <span>X 3</span>
              <p>$375.00</p>
            </div>
          </div>
          <img class="delete-icon" src="./assets/icon-delete.svg" alt="arrow"/>
        </div>
      
        <button class="checkout-button">Checkout</button>
      
      </div>


    );
}

export default Order;