import React, { useRef } from "react";

function UnCrontrolledForm() {
    const inputRef = useRef(null)

    const viewValueOfRefElement = () => {
        console.log("Updated Value : ", inputRef?.current?.value)
    }

    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={viewValueOfRefElement}>View Value</button>
        </>
    )
}

export default UnCrontrolledForm