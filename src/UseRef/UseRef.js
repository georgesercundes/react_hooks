import React, { useRef, useState } from "react";
 
export default function Ref() {
    const [name, setName] = useState('')
    const inputRef = useRef(null)
    
    const handleClick = () => {
        setName(name === '' ? inputRef.current.focus(): inputRef.current.value)
        inputRef.current.value = ''
    }
    return(
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Type your name..." ref={inputRef}></input>
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}