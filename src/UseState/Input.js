import React, { useState } from "react";

export default function Input() {
    const [name, setName] = useState()

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <input placeholder="Enter your Name" onChange={handleChange}></input>
            <br/> <br/>
            The name typed is {name}
        </div>
    )
}