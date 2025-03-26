import React from "react";

function ItemsRender({products = []}){
    return (
        <div>
          <h1>Product List</h1>
          <ul>
            {products.map((product) => (
              
              <li key={product.id}>
                <strong>{product.name}</strong> -  
                
                {product.stock > 0 ? (
                  <span style={{ color: "green" }}> Current Stock : {product.stock}</span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}> Out of Stock</span>
                )}

              </li>
            ))}
          </ul>

        </div>
      );
}


export default ItemsRender