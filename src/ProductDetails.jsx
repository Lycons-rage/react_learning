import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    

    useEffect((() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data) => setProduct(data))
    }), [id]);

    if (!product) return <p>Loading....</p>

    return(
        <>
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="300" />
            <p>{product.description}</p>
        </div>
        </>
    )
}


export default ProductDetails