import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    return(
        <div className = "product-card">
        <div className="w3-card-4 product-img">
            <img src= {props.imageUrl}
            alt="Alps" className="product-details"/>
            <div className="w3-container w3-center">
                <span className="product-text">
                <p>{props.title.slice(0,21)}</p>
                <p className='price'>{props.price}</p>
                <p className='price'>Catagory : {props.category}</p>
                </span>
            </div>
        </div>
     </div> 
    )
}

export default ProductCard