import React, { useState } from "react";


// function ItemList({items = []}){
//     return (
//         <>
//         <h1>List of Items</h1>
//         {/* {items.length > 0 && 
//             (<p>Items list to be shown here...</p>)
//         } */}

//         {/* {items.length ? <p>Items list to be shown here...</p> : <p>No items found</p>} */}

//         {items.length ? <ul>
//             {items.map((item,index) => (
//                 <li key = {index}>{item}</li>
            
//             ))}</ul> : <p>No items found...</p>
//         }

//         </>
//     );
// }


function ItemList({items = []}){
    const [itemData, setItemData] = useState(items);

    const onClickHandler = (e, i) => {
        
    }
}


export default ItemList;