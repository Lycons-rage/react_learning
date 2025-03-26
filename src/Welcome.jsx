import React, { useState } from "react";

// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello Everyone!</h1>;
//     }
// }
 
function Welcome(props) {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        if(value > 0){
            setValue(value - 1)
        }
    }

    return (
        <>
        <div>
            {/* <p>{JSON.stringify(props)}</p> */}
            <div>
                <h1>Value : {value}</h1>
                <button onClick={decrement}>-</button> &nbsp; <button onClick={increment}>+</button>
            </div>
            {/* <h1> WELCOME {props.prop1}! {props.prop2}</h1> */}
        </div>
        </>
    )
}

export default Welcome