import React, { useState } from "react";

function FormExample() {
    const [product ,setProduct] = useState({id:1, title:"", price:"", description:""})

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Product detail : \n", product)

        setProduct({ id: product.id + 1, title: "", price: "", description: "" });        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={product.title} placeholder="Product Name" onChange={handleChange} required/><br />
            <input type="text" name="price" value={product.price} placeholder="Price" onChange={handleChange} required/><br />
            <input type="text" name="description" value={product.description} placeholder="Product Description" onChange={handleChange} required/><br />
            <input type="submit" />
        </form>
        <br />
        
        </>
    )
}

export default FormExample