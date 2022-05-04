import React from "react"
//// importing images
import productdata from "../productdata"
import jaket from "../img/jaket.jpeg"
import gloves from "../img/gloves.jpeg"
import helmet from "../img/helmet.jpeg"
import gopro from "../img/gopro.jpeg"
import tailbag from "../img/tailbag.jpeg"
import mic_adapter from "../img/mic_adapter.jpeg"
import mic from "../img/mic.jpeg"


const productsImage = [jaket, gloves, helmet, gopro, tailbag, mic_adapter, mic]
export default function Video({title, description, videoId}){

    const productElments = productdata.map((product) => {
        return (
            <a className="youtube__product" href = {product.url} key = {product.id-1}> 
                <div className="youtube__product__img-box" >
                    <img src={productsImage[product.id - 1]} alt="productImage" className="youtube__product-img"></img>
                    <h5 className="youtube__product-name">{product.name}</h5>
                </div> 
            </a>
        )
    })

    return( 
            <div className="youtube__videos">
                <iframe  className = "iframe"  src = {`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="youtube__about">
                    <h4 className="youtube_video-title">{title}</h4>
                    <p className="youtube__description">{description}</p>
                </div>
                <div className="youtube_products-container">
                        <h4 className="youtube__product-header">Products Used</h4>
                        <div className="youtube__products">
                            <div className="youtube__products-slider" >
                                {productElments}
                            </div>
                        </div>
                    </div>                
            </div>
        )
}




