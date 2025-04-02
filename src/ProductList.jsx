import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductContext";
import "../styles/ProductCard.css"
import tailwindcss from "@tailwindcss/vite";

function ProductList(){

    const { products, loading, error } = useProducts()

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
        <div className="border-2 border-gray-200 p-2 rounded-md ro">
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <Link to={`/ProductDetails/${product.id}`}>
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        {/* <p>{product.description}</p> */}
                        <p>Price: ${product.price}</p>
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ProductList