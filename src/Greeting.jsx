import React, { useState } from "react";

function Greeting(){
    const [name, setName] = useState("");

    const reset = () => {
        setName("")
    }

    return(
        <>
        <div>
            <h1>Hello! {name || ""}</h1>
            <input 
                type="text" 
                placeholder="Enter your name"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                /><br /><br />
            <button onClick={reset}>RESET</button>
        </div>
        </>
    )
}


export default Greeting