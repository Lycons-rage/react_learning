import React, { createContext, useContext, useEffect, useState } from "react"

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect((() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }), []);

    return (
        <ProductContext.Provider value = {{products, loading, error}}>
            {children}
        </ProductContext.Provider>
    )
} 

export const useProducts = () => useContext(ProductContext);