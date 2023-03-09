import React from 'react';
import '../styles/ProductInfo.scss'
const ProductInfo = () => {
    return (
        <div className="product-info  inactive">
            <div className="product-visualitation">

                <img src="./assets/image-product-1.jpg" alt="bike" />
                <div className="product-images-container">
                    <img className="img-product-button" src="./assets/image-product-1-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-2-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-3-thumbnail.jpg" alt="" />
                    <img className="img-product-button" src="./assets/image-product-4-thumbnail.jpg" alt="" />

                </div>


            </div>

            <div className="product-description">
                <h1>SNEAKER COMPANY</h1>
                <h2>Fall Limited Edition Sneakers</h2>
                <p className="text-description">These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="final-price">
                    <span>$125.00</span>
                    <span>50%</span>
                </div>

                <p>$250.00</p>

                <section className="section-add-to-cart" >
                    <div className="plus-less-button-container">
                        <button className="plus-less-button less-b">-</button>
                        <p className="amountItem"></p>
                        <button className="plus-less-button pluss-b">+</button>

                    </div>

                    <button className="primary-button add-to-cart-button">



                        <img className="img brightness" src="./assets/icon-cart.svg" alt='' />

                        Add to cart
                    </button>

                </section>

            </div>


        </div>
    );
}

export default ProductInfo;