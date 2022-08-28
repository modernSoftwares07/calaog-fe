import React from "react";
import './ProductRow.css'
import ProductCard from "../ProductCard/ProductCard";
const ProductRow = (props) => {
const products = props.element.map(data => {
    return(
        <div className="w3-cell w3-container col-container w3-center">
        <ProductCard 
    imageUrl = {data.imageUrl}
    title = {data.title}
    price = {data.price}
    category = {data.category}
    />
    </div>
    )
})
return(
    <div className="w3-cell-row row-container">
        {products}
    </div>
    )
}

export default ProductRow