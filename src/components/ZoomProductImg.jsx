import React from 'react';
import '../styles/ZoomProductImg.scss';

const ZoomProductImg = () => {
    return (
        <div class="img-visualitation-zoom inactive">
            <div class="close-icon-container">
                <img class="close-icon" src="./assets/icon-close.svg" alt="" />
            </div>
            <div class="controls">
                <div class="control control-left"><img src="./assets/icon-previous.svg" alt="" /></div>
                <div class="control control-rigth"><img src="./assets/icon-next.svg" alt="" /></div>
            </div>


            <div class="img-Container">
                <img class="main-img" src="./assets/image-product-1.jpg" alt="bike" />
            </div>

            <div class="product-images-container zoom-thumbnails">
                <div class="thumbnail-container" >
                    <img class="thumbnails active" src="./assets/image-product-1.jpg" alt="" />
                </div>
                <div class="thumbnail-container" >
                    <img class="thumbnails" src="./assets/image-product-2.jpg" alt="" />
                </div>
                <div class="thumbnail-container" >
                    <img class="thumbnails" src="./assets/image-product-3.jpg" alt="" />
                </div>
                <div class="thumbnail-container" >
                    <img class="thumbnails" src="./assets/image-product-4.jpg" alt="" />
                </div>

            </div>
        </div>
    );
}

export default ZoomProductImg;