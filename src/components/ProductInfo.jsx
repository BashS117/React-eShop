import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductInfo.scss';
const ProductInfo = ({product}) => {

    const {addToCart,amount,setAmount}=useContext(AppContext);



    const handleClick=(cartItem)=>{
        addToCart(cartItem,amount
        )

    }


    return (
        <div className="product-info  ">
            <div className="product-visualitation">

                <img src={product.images[0]} alt="bike" />
                <div className="product-images-container">
                    <img className="img-product-button" src="./assets/image-product-1-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-2-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-3-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-4-thumbnail.jpg" alt="" />

                </div>


            </div>

            <div className="product-description">
                <h1>SNEAKER COMPANY</h1>
                <h2>{product.title}</h2>
                <p className="text-description">{product.description}</p>
                <div className="final-price">
                    <span>${product.price}</span>
                    <span>50%</span>
                </div>

                <p>${product.price*2}</p>

                <section className="section-add-to-cart" >
                    <div className="plus-less-button-container">
                        <button 
                        onClick={()=>setAmount(amount-1)}
                        disabled={amount<=1}
                        type='button' 
                        className="plus-less-button less-b">-</button>
                        <p className="amountItem">{amount}</p>
                        <button
                        onClick={()=>setAmount(amount+1)}
                        disabled={amount>=9}
                        type='button' 
                        className="plus-less-button pluss-b">+</button>

                    </div>

                    <button onClick={()=>handleClick(product)} className="primary-button add-to-cart-button">



                        <img className="img brightness" src="./assets/icon-cart.svg" alt='' />

                        Add to cart
                    </button>

                </section>

            </div>


        </div>
    );
}

export default ProductInfo;