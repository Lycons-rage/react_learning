import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductContext";

function ProductList(){

    const { products, loading, error } = useProducts()

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/ProductDetails/${product.id}`}><h2>{product.title}</h2></Link>
                        {/* <p>{product.description}</p> */}
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ProductList