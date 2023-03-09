import React from 'react';
import Order from '../components/Order';
import '../styles/MyOrder.scss';
const MyOrder = () => {
    return (
        <div className="my-order-container  inactive">
        <h1 className="title">Cart</h1>

       

          <Order/>



      </div>

    );
}

export default MyOrder;