import React, { useState } from "react";

const ControlledForm = () => {
    const [name, setName] = useState("")

    const handleOnChange = (e) => {
        setName(e.target.value)
        console.log("updated value : "+e.target.value)
    }

    return (
        <>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleOnChange}/>
        </>
    )
}


export default ControlledForm