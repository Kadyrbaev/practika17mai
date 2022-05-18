import React from "react"

function DemoOutput(props){
    console.log('memo');
    return (
        <p>{props.show ? 'This is the new!' : ''} </p>
    )
}
export default React.memo (DemoOutput)